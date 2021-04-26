import { LightningElement, wire } from 'lwc';
import getEmployeeList from '@salesforce/apex/EmployeeController.getEmployeeList';
import findEmployee from '@salesforce/apex/EmployeeController.findEmployee';


export default class EmployeeListCmp extends LightningElement {
    searchKey = '';
    employees;
    error;

    @wire(getEmployeeList)
    wiredEmployees({ error, data }) {
        if (data) {
            this.employees = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.employees = undefined;
        }
    }

    handleKeyChange(event) {
        this.searchKey = event.target.value;
    }

    handleSearch() {
        findEmployee({ searchKey: this.searchKey })
            .then((result) => {
                this.employees = result;
                this.error = undefined;
            })
            .catch((error) => {
                this.error = error;
                this.employees = undefined;
            });
    }

    value = '';

    get options() {
        return this.value;
    }
}
