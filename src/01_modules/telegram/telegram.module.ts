import { Module } from '@nestjs/common';
import { TelegramService } from './services/telegram.service';

@Module({
    providers: [TelegramService],
})
export class TelegramModule {}
