import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Client } from './client.dto';

@Injectable()
export class ClientService {
  constructor(private prisma: PrismaService) {}

  async create(data: Client): Promise<Client> {
    return await this.prisma.client.create({ data });
  }
}
