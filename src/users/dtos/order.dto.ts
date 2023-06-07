import {
  IsArray,
  IsDate,
  IsMongoId,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';
import { ApiProperty, OmitType, PartialType } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty()
  @IsMongoId()
  readonly customer: string;

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  readonly date: Date;

  @ApiProperty()
  @IsArray()
  @IsNotEmpty()
  readonly products: string[];
}

export class UpdateOrderDto extends PartialType(
  OmitType(CreateOrderDto, ['products']),
) {}
