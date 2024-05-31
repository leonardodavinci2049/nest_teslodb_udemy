import { Controller, Get } from '@nestjs/common';

import { SeedService } from './seed.service';

@Controller('/v1/seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get()
  // @Auth( ValidRoles.admin )
  executeSeed() {
    return this.seedService.runSeed();
  }
}
