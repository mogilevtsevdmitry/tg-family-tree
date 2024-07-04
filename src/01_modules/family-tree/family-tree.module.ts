import { Module } from '@nestjs/common';
import { IFamilyTreeRepository } from './02_interfaces/i-family-tree.repository';
import { FamilyTreeRepository } from './04_adapters/repositories/family-tree.repository';

@Module({
    providers: [{ provide: IFamilyTreeRepository, useClass: FamilyTreeRepository }],
    exports: [IFamilyTreeRepository],
})
export class FamilyTreeModule {}
