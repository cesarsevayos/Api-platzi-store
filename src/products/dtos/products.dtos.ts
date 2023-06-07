import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsPositive,
  IsOptional,
  Min,
  ValidateIf,
  ValidateNested,
} from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateCategoryDto } from './category.dtos';

export class CreateProductDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  readonly price: number;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  readonly stock: number;

  @ApiProperty()
  @IsNotEmpty()
  readonly image: string;

  @ApiProperty()
  @IsNotEmpty()
  @ValidateNested()
  readonly category: CreateCategoryDto;

  // @ApiProperty()
  // @IsPositive()
  // @IsNumber()
  // @IsNotEmpty()
  // readonly brandId: number;

  // @ApiProperty()
  // @IsArray()
  // @IsNotEmpty()
  // readonly categoriesIds: number[];
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}

//Filtro para paginacion
export class FilterProductsDto {
  @IsOptional()
  @IsPositive()
  limit: number;

  @IsOptional()
  @Min(0)
  offset: number;

  @IsOptional()
  @IsPositive()
  minPrice: number;

  //Valida solo si existe el minPrice
  @ValidateIf((item) => item.minPrice)
  @IsPositive()
  maxPrice: number;
}
