import { Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginUserDto } from './dto/dto/auth.dto';
import { UsersService } from '../users/users.service';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private _usersService: UsersService,
    private _jwtService: JwtService,
  ) {}

  async login(dto: LoginUserDto) {
    const user = await this.validateUser(dto);
    return {
      user,
      tokens: {
        access: await this._jwtService.signAsync(user, {
          expiresIn: '1h',
          secret: process.env.JWT_SECRET_KEY,
        }),
        refresh: await this._jwtService.signAsync(user, {
          expiresIn: '7d',
          secret: process.env.JWT_REFRESH_TOKEN_KEY,
        }),
      },
    };
  }

  async validateUser(dto: LoginUserDto) {
    const user = await this._usersService.findByEmail(dto.email);

    if (user) {
      const compareStatus = await compare(dto.password, user.password);
      if (compareStatus) {
        const { password, ...result } = user;
        return result;
      }
    }

    throw new UnauthorizedException();
  }
}
