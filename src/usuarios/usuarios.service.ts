import { Injectable } from '@nestjs/common';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuariosService {
  private usuarios: Usuario[] = [];

  findAll(): Usuario[] {
    return this.usuarios;
  }

  create(usuario: Usuario): Usuario {
    this.usuarios.push(usuario);
    return usuario;
  }
}
