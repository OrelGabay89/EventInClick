import { Component, OnInit, SimpleChanges, OnChanges, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import myGlobals = require('./globals');


var $ = require("jquery");
require("jquery-datetimepicker");


@Component({
    selector: 'my-app',
    templateUrl: './templates/summery.html',
    styles: [
        require('./css/summery.less').toString()],
})

export class SummeryComponent implements OnInit {
    public myForm: FormGroup;
    public submitted: boolean;
    public events: any[] = [];

    selectedSubAreaCodeItems: items[] = [];
    fullName: string;
    clebrationType: string;
    phone: string;

    constructor(private _fb: FormBuilder) { }

    ngOnInit() {

        $.datetimepicker.setLocale('he');
        $('#datetimepickerFrom').datetimepicker(
            {
                format: 'd/m/20y',
                timepicker: false,
                //defaultTime: mDateFrom
            }
        );

        $('#datetimepickerTo').datetimepicker(
            {
                format: 'd/m/20y',
                timepicker: false,
                //defaultTime: mDateTo
            }

        );

        this.fullName = myGlobals.fullName;
        this.clebrationType = myGlobals.selectedclebrationType.name;
        this.phone = myGlobals.phoneAreaCode + "-" + myGlobals.phoneNumber

        this.selectedSubAreaCodeItems = myGlobals.selectedSubAreaCodeItems;

        $('select[name=priceFrom]').val(myGlobals.priceFrom);
        $('select[name=priceTo]').val(myGlobals.priceTo);
        $('select[name=kosherLevel]').val(myGlobals.kosherLevel);
        $('select[name=dayOfTheWeek]').val(myGlobals.dayOfTheWeek);
        $('select[name=dayTime]').val(myGlobals.dayTime);


        this.myForm = this._fb.group({
            InvitedFrom: [myGlobals.invitedFrom, [<any>Validators.required, <any>Validators.minLength(3), <any>Validators.maxLength(5)]],
            InvitedTo: [myGlobals.invitedTo, [<any>Validators.required, <any>Validators.minLength(3), <any>Validators.maxLength(5)]],
            datetimepickerFrom: [myGlobals.dateFrom, [<any>Validators.required, <any>Validators.minLength(5), <any>Validators.maxLength(10)]],
            datetimepickerTo: [myGlobals.dateTo, [<any>Validators.required, <any>Validators.minLength(5), <any>Validators.maxLength(10)]],
        });

    }
}