import { LightningElement } from 'lwc';

export default class EmployeePage extends LightningElement {
    isShowModalEdit = true;

    showModalEdit() {
        this.isShowModalEdit = true;
    }
}