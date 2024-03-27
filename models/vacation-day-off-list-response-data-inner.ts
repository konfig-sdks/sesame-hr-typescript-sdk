/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { VacationDayOffListResponseDataInnerCalendar } from './vacation-day-off-list-response-data-inner-calendar';
import { VacationDayOffListResponseDataInnerEmployee } from './vacation-day-off-list-response-data-inner-employee';

/**
 * 
 * @export
 * @interface VacationDayOffListResponseDataInner
 */
export interface VacationDayOffListResponseDataInner {
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffListResponseDataInner
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffListResponseDataInner
     */
    'date'?: string;
    /**
     * 
     * @type {number}
     * @memberof VacationDayOffListResponseDataInner
     */
    'seconds'?: number;
    /**
     * 
     * @type {VacationDayOffListResponseDataInnerCalendar}
     * @memberof VacationDayOffListResponseDataInner
     */
    'calendar'?: VacationDayOffListResponseDataInnerCalendar;
    /**
     * 
     * @type {VacationDayOffListResponseDataInnerEmployee}
     * @memberof VacationDayOffListResponseDataInner
     */
    'employee'?: VacationDayOffListResponseDataInnerEmployee;
}
