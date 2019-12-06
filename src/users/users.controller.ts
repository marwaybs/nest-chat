import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { get } from 'http';
import { CreateUserDto } from './create-user.dto';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param() params): string {
    return `This action returns a #${params.id}`;
  }
}
