import { PersonEntity } from '@family-tree/01_entities/person.entity';

export interface ICreatePersonEntity
    extends Pick<PersonEntity, 'lastName' | 'firstName' | 'birthday'>,
        Partial<Pick<PersonEntity, 'avatar' | 'middleName'>> {}

export interface IPersonListFilter {
    readonly ids: PersonEntity['id'][];
}

export abstract class IPersonRepository {
    abstract createPerson(payload: ICreatePersonEntity): Promise<PersonEntity>;
    abstract getPerson(id: PersonEntity['id']): Promise<PersonEntity>;
    abstract getPersonList(filter?: IPersonListFilter): Promise<PersonEntity[]>;
}
