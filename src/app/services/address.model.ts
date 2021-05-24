export class Address {
    id: string = '';
    name: string = '';
    location: string = '';
    office: string = '';
    cellPhone: string = '';
    officePhone: string = '';
    selected: boolean = false;

    constructor() {
        this.selected = false;
    }
}