import { PartialType } from '@nestjs/mapped-types'
import { Type } from 'class-transformer'
import { IsOptional, IsPositive } from 'class-validator'
import { CreateServicoDto } from './create-servico.dto'

export class GetServicoDto extends PartialType(CreateServicoDto) {
  @IsOptional()
  @IsPositive({
    message: 'O ID informado é inválido',
  })
  @Type(() => Number)
  id?: number
}
