import ElementCreate from './utilities/ElementCreate.js';
export class License {
    constructor(licenses) {
        this.licenses = licenses;
    }
    getLicense() {
        const section = new ElementCreate('SECTION');
        section.setClass('row');
        const ul = new ElementCreate('UL');
        this.licenses.forEach(element => {
            const li = new ElementCreate('LI');
            li.setElementText(`<b>${element.body},</b> ${element.title}`);
            ul.setChild(li.getElement());
        });
        const h2 = new ElementCreate('H2');
        h2.setElementText('<u>Licenses & Certifications</u>');
        h2.setClass('col-12');
        ul.setClass('ml-md-5');
        section.setChildren([
            h2.getElement(),
            ul.getElement()
        ]);
        return section.getElement();
    }
}
