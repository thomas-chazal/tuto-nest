import { Controller, Get } from '@nestjs/common';

@Controller('profile')
export class ProfileController {
  @Get()
  profile() {
    return { message: 'I am protected route' };
  }
}
