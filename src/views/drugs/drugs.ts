import { Modal } from '../../functions/components/modal/modal';
import { autoinject } from 'aurelia-framework';

@autoinject()
export class Drugs {
    constructor(
        public modalService: Modal
    ) {
        this.modalService = new Modal();
    }
}
