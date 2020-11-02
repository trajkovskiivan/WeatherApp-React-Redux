import {day, month} from './dateCalculations';

let today = new Date();

let dd = today.getUTCDay();
let date = today.getUTCDate()
let mm = today.getUTCMonth();
let year = today.getUTCFullYear();



let outputString = ` ${day(dd)} ${month(mm)} ${date} ${year}`;

export default outputString