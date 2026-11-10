import { Injectable } from '@nestjs/common';
import { Producto } from './producto.entity';

@Injectable()
export class ProductosService {
  private productos: Producto[] = [];

  findAll(): Producto[] {
    return this.productos;
  }
}
