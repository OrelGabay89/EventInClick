import { Component, OnInit, SimpleChanges, OnChanges, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Hall } from './model/hall';
import { fullName, phoneNumber, dateTo, dateFrom, priceFrom, priceTo, kosherLevel } from './globals';
import myGlobals = require('./globals');

var moment = require('moment');

var $ = require("jquery");
require("jquery-datetimepicker");

@Component({
    selector: 'my-app',
    templateUrl: './templates/moreDetails.html',
    styles: [
        require('./css/moreDetails.less').toString()],
})
export class MoreDetailsComponent {
    public myForm: FormGroup;
    public submitted: boolean;
    public events: any[] = [];

    constructor(private _fb: FormBuilder) { }

    bodyClasses: string = "confetyBg";

    ngOnInit(): void {
        debugger;
        $('body').addClass(this.bodyClasses);

        $.datetimepicker.setLocale('he');
        $('#datetimepickerFrom').datetimepicker(
            {
                format: 'd/m/20y',
                timepicker: false,
                defaultTime: myGlobals.dateFrom
            }
        );

        $('#datetimepickerTo').datetimepicker(
            {
                format: 'd/m/20y',
                timepicker: false,
                defaultTime: myGlobals.dateTo
            }

        );
     


        $('select[name=priceFrom]').val(myGlobals.priceFrom);
        $('select[name=priceTo]').val(myGlobals.priceTo);
        $('select[name=kosherLevel]').val(myGlobals.kosherLevel);
        $('select[name=dayOfTheWeek]').val(myGlobals.dayOfTheWeek);
        $('select[name=dayTime]').val(myGlobals.dayTime);

        // the short way
        this.myForm = this._fb.group({
            InvitedFrom: [myGlobals.invitedFrom, [<any>Validators.required, <any>Validators.minLength(3), <any>Validators.maxLength(5)]],
            InvitedTo: [myGlobals.invitedTo, [<any>Validators.required, <any>Validators.minLength(3), <any>Validators.maxLength(5)]],
            FullName: [myGlobals.fullName, [<any>Validators.required, <any>Validators.minLength(2), <any>Validators.maxLength(20)]],
            PhoneNumber: [myGlobals.phoneNumber, [<any>Validators.required, <any>Validators.minLength(7), <any>Validators.maxLength(7)]],
            datetimepickerFrom: [myGlobals.dateFrom, [<any>Validators.required, <any>Validators.minLength(10), <any>Validators.maxLength(11)]],
            datetimepickerTo: [myGlobals.dateTo, [<any>Validators.required, <any>Validators.minLength(10), <any>Validators.maxLength(11)]],
        });

        // subscribe to form changes  
        this.subcribeToFormChanges();

    }

    subcribeToFormChanges() {

        const myFormStatusChanges$ = this.myForm.statusChanges;
        const myFormValueChanges$ = this.myForm.valueChanges;

        myFormStatusChanges$.subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
        myFormValueChanges$.subscribe(x => this.events.push({ event: 'VALUE_CHANGED', object: x }));
    }

    save(model: Hall, isValid: boolean) {
        this.submitted = true;
        console.log(model, isValid);
    }

    ngOnDestroy() {

    }
    onchange(t: any) {
        debugger;

        myGlobals.invitedFrom = $('#InvitedFrom').val();
        myGlobals.invitedTo = $('#InvitedTo').val();
        myGlobals.fullName = $('#FullName').val();

        myGlobals.phoneAreaCode = $('#areaCode').val();
        myGlobals.phoneNumber = $('#PhoneNumber').val();

        myGlobals.priceFrom = $('#priceFrom').val();
        myGlobals.priceTo = $('#priceTo').val();

        myGlobals.kosherLevel = $('#kosherLevel').val();

        myGlobals.dayOfTheWeek = $('#dayOfTheWeek').val();

        myGlobals.dayTime = $('#dayTime').val();
    }
}
