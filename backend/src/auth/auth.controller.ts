import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/dto/users.dto';
import { LoginUserDto } from './dto/dto/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private _usersService: UsersService,
    private _authService: AuthService,
  ) {}

  @Post('register')
  async registerUser(@Body() dto: CreateUserDto) {
    return await this._usersService.create(dto);
  }

  @Post('login')
  async loginUser(@Body() dto: LoginUserDto) {
    return await this._authService.login(dto);
  }
}
