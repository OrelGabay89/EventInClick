import { Component } from '@angular/core';
var $ = require("jquery");

@Component({
    selector: 'my-app',
    templateUrl: './templates/welcome.html',
    styles: [
        require('./css/welcomePage.less').toString()]

})

export class WelcomePageComponent {

    bodyClasses: string = "welcomePageBg";


    ngOnInit(): void {
        $('body').addClass(this.bodyClasses);
    }

    ngOnDestroy() {
        $('body').removeClass(this.bodyClasses);
    }
}
