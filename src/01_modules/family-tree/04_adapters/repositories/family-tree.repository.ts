import { TreeItemEntity } from '@family-tree/01_entities/tree-item.entity';
import { IFamilyTreeRepository } from '@family-tree/02_interfaces/i-family-tree.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FamilyTreeRepository implements IFamilyTreeRepository {
    addElement(element: TreeItemEntity): Promise<TreeItemEntity> {
        throw new Error('Method not implemented.');
    }
    removeElement(id: number): Promise<TreeItemEntity> {
        throw new Error('Method not implemented.');
    }
}
