import {
  Controller,
  Post,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';
import { UploadedMulterFileI } from '@/utils/FilesSpaces';
import { diskStorage } from 'multer';

@Controller('upload')
// @UseGuards(JwtTwoFactorGuard)
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @UseInterceptors(FileInterceptor('file'))
  @Post('image')
  async uploadImage(@UploadedFile() file: UploadedMulterFileI) {
    return this.uploadService.uploadImage(file);
  }

  @Post('locally')
  @UseInterceptors(
    FilesInterceptor('files', 20, {
      storage: diskStorage({
        destination: 'uploads/user-files',
        // filename: editFileName,
      }),
      //   fileFilter: imageFileFilter,
    }),
  )
  uploadMultipleFiles(@UploadedFiles() files) {
    const response = [];
    files.forEach((file) => {
      const fileReponse = {
        filename: file,
      };
      response.push(fileReponse);
    });
    return response[0].filename.path;
  }
}
