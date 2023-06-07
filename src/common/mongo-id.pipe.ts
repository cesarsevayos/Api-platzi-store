import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';
import { isMongoId } from 'class-validator';

//Pipe para validar el mongoId, class-validator provee dicha funcion
@Injectable()
export class MongoIdPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    if (!isMongoId(value)) {
      throw new BadRequestException(`${value} not is a mongoId`);
    }
    return value;
  }
}
