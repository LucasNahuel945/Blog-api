import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagController } from './tag.controller';
import { Tag } from './tag.entity';
import { TagService } from './tag.services';

@Module({
    imports: [TypeOrmModule.forFeature([Tag])],
    controllers: [TagController],
    providers: [TagService],
    exports: [TagService],
})

export class TagModule {}