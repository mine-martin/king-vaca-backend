import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';
import { DoSpacesServicerovider } from '@/utils/FilesSpaces';

@Module({
  imports: [ConfigModule],
  providers: [UploadService, DoSpacesServicerovider],
  controllers: [UploadController],
  exports: [UploadService, DoSpacesServicerovider],
})
export class UploadModule {}
