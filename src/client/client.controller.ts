import { Controller } from '@nestjs/common';
import { ClientService } from './client.service';
import { Body, Post } from '@nestjs/common';
import { Client } from './client.dto';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  async create(@Body() client: Client) {
    return await this.clientService.create(client);
  }
}
