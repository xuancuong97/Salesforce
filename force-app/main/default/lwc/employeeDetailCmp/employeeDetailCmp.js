import { LightningElement } from 'lwc';

export default class EmployeeDetailCmp extends LightningElement {
    greeting = 'world';

    handleChange(eventObj) {
        this.greeting = eventObj.target.value;
    }
}