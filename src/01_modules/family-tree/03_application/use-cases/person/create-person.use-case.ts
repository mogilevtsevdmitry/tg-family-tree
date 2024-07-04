import { PersonEntity } from '@family-tree/01_entities/person.entity';
import { ICreatePersonEntity, IPersonRepository } from '@family-tree/02_interfaces/i-person.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreatePersonUseCase {
    constructor(private readonly personRepo: IPersonRepository) {}

    async execute(payload: ICreatePersonEntity): Promise<PersonEntity> {}
}
