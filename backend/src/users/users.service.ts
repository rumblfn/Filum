import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateUserDto } from './dto/dto/users.dto';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private _prisma: PrismaService) {}

  async create(dto: CreateUserDto) {
    const user = await this._prisma.users.findUnique({
      where: {
        email: dto.email,
      },
    });

    if (user) {
      throw new ConflictException('email duplicated');
    }

    const newUser = await this._prisma.users.create({
      data: {
        ...dto,
        password: await hash(dto.password, 10),
      },
    });

    const { password: _, ...rest } = newUser;
    return rest;
  }

  async findByEmail(email: string) {
    return this._prisma.users.findUnique({
      where: { email },
    });
  }

  async findById(id: number) {
    return this._prisma.users.findUnique({
      where: { id: id },
    });
  }
}
