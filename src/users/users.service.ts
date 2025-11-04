import { ConflictException, Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';
import { hashSync as bcryptHashSync } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/db/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async create(newUser: UserDto) {
    const userAlreadyRegisteres = await this.findByUserName(newUser.username);

    if (userAlreadyRegisteres) {
      throw new ConflictException(
        `User '${newUser.username}' already registered`,
      );
    }
    const dbuser = new UserEntity();
    dbuser.username = newUser.username;
    dbuser.passwordHash = bcryptHashSync(newUser.password, 10);

    const { id, username } = await this.userRepository.save(dbuser);

    return { id, username };
  }

  async findByUserName(username: string): Promise<UserDto | null> {
    const userFound = await this.userRepository.findOne({
      where: { username },
    });

    if (!userFound) {
      return null;
    }

    return {
      id: userFound.id,
      username: userFound.username,
      password: userFound.passwordHash,
    };
  }
}
