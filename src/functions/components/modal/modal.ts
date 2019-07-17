import { autoinject } from 'aurelia-framework';

@autoinject()
export class Modal {
    public toggleModal(id: string): void {
        const modal = document.getElementById(id); // Get the modal by ID

        // Check modalclasslist and update when clicked
        if (modal.classList.contains('active')) modal.classList.remove('active');
        else modal.classList.add('active');
    }

    public togglePopOver(id: string): void {
        const modal = document.getElementById(id); // Get the modal by ID

        // Check modalclasslist and update when clicked
        if (modal.classList.contains('visible')) modal.classList.remove('visible');
        else modal.classList.add('visible');
    }
}
