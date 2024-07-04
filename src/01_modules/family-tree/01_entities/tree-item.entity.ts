import { PersonEntity } from './person.entity';
import { TreeItemWithRelation } from './tree-item-with-relation.entity';

export class TreeItemEntity {
    id: number;
    person: PersonEntity;
    children: TreeItemWithRelation[];
}
