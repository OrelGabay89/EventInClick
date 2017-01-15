import { Hall } from './model/hall';
//
// ===== File globals.ts    
//
var $ = require("jquery");

var moment = require('moment');

'use strict';

// Celebration Type
export var selectedclebrationType;

// Area Code
export var selectedAreaCode;
export var selectedAreaCodeItems;
export var selectedSubAreaCodeItems;

//More Details

export var dateFrom = moment().format("DD/MM/YYYY")

export var dateTo = moment().add(3, 'days').format("DD/MM/YYYY")

export var invitedFrom = '100';
export var invitedTo = '1000'
export var fullName = 'ישראל ישראלי';
export var phoneAreaCode = '050';
export var phoneNumber = '9999999';

export var priceFrom  = '100';
export var priceTo = '200';
export var kosherLevel= 'kosher';
export var dayOfTheWeek = 'sunday';
export var dayTime = 'morning';

export var halls;

export var contactMePriority='asap';

export var extraServices = new Array<string>();

