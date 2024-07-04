import { TreeItemEntity } from '@family-tree/01_entities/tree-item.entity';

export interface ICreateTreeItemEntity extends Pick<TreeItemEntity, 'children' | 'person'> {}

export abstract class IFamilyTreeRepository {
    abstract addElement(element: ICreateTreeItemEntity): Promise<TreeItemEntity>;
    abstract removeElement(id: TreeItemEntity['id']): Promise<TreeItemEntity>;
    abstract getElement(id: TreeItemEntity['id']): Promise<TreeItemEntity>;
    abstract getElementList(): Promise<TreeItemEntity[]>;
}
