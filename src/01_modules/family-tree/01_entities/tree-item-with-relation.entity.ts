import { PersonRelationEnum } from './interfaces';
import { TreeItemEntity } from './tree-item.entity';

export class TreeItemWithRelation {
    type: PersonRelationEnum;
    person: TreeItemEntity;
}
