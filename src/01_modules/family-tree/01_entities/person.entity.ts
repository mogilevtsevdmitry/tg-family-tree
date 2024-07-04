import { differenceInCalendarYears } from 'date-fns';

export class PersonEntity {
    id: number;
    firstName: string;
    lastName: string;
    middleName: string | null = null;
    birthday: Date;
    avatar: string;

    constructor(payload: PersonEntity) {
        Object.assign(this, payload);
    }

    get age() {
        return differenceInCalendarYears(new Date(), this.birthday);
    }
}
