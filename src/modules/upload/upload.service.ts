import * as AWS from 'aws-sdk';
import { ConfigService } from '@nestjs/config';
import { Inject, Injectable } from '@nestjs/common';
import { DoSpacesServiceLib, UploadedMulterFileI } from '@/utils/FilesSpaces';

@Injectable()
export class UploadService {
  bucketUrl: string;

  constructor(
    @Inject(DoSpacesServiceLib) private readonly s3: AWS.S3,
    private readonly configService: ConfigService
  ) {
    this.bucketUrl = this.configService.get<string>('<BUCKET_NAME>');
  }

  async uploadImage(file: UploadedMulterFileI): Promise<any> {
    const fileName = `${Date.now()}-${file.originalname}`;

    return new Promise((resolve, reject) => {
      this.s3.putObject(
        {
          Bucket: 'azanzifiles',
          Key: fileName,
          Body: file.buffer,
          ACL: 'public-read',
        },
        async (error: AWS.AWSError) => {
          if (error) {
            const errorr = reject(
              new Error(`Something went wrong when uploading the logo!`)
            );
            return errorr;
          }

          const url = `${this.bucketUrl}/${fileName}`;

          return {
            message: resolve(url),
          };
        }
      );
    });
  }

 
}
