import { Module } from '@nestjs/common';
import { TelegramModule } from './01_modules/telegram/telegram.module';
import { FamilyTreeModule } from './01_modules/family-tree/family-tree.module';

@Module({
    imports: [TelegramModule, FamilyTreeModule],
})
export class AppModule {}
