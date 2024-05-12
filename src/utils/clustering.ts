import * as _cluster from 'cluster';
import * as os from 'os';
import { AppConfig } from 'src/modules/app/app.config';
import { PinoLogger } from 'nestjs-pino';
import * as dotenv from 'dotenv';

dotenv.config();

const cluster = _cluster as unknown as _cluster.Cluster;
const numCPUs = os.cpus().length;

export const clusterize = (callback: () => Promise<void>) => {
  const logger = new PinoLogger(AppConfig.getLoggerConfig());
  if (cluster.isPrimary) {
    logger.info(`Main server started, listening on port ${process.env.PORT}`);
    for (let i = 0; i < numCPUs; i += 1) {
      cluster.fork();
    }
    cluster.on('exit', (worker) => {
      logger.info(`Worker ${worker.process.pid} died. Restarting`);
      cluster.fork();
    });
  } else {
    logger.info(`Cluster server started on ${process.pid}`);
    callback();
  }
};
