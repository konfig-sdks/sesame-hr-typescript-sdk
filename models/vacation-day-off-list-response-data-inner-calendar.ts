/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { VacationDayOffListResponseDataInnerCalendarVacationConfiguration } from './vacation-day-off-list-response-data-inner-calendar-vacation-configuration';

/**
 * 
 * @export
 * @interface VacationDayOffListResponseDataInnerCalendar
 */
export interface VacationDayOffListResponseDataInnerCalendar {
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffListResponseDataInnerCalendar
     */
    'id'?: string;
    /**
     * 
     * @type {number}
     * @memberof VacationDayOffListResponseDataInnerCalendar
     */
    'maxDaysOff'?: number;
    /**
     * 
     * @type {number}
     * @memberof VacationDayOffListResponseDataInnerCalendar
     */
    'year'?: number;
    /**
     * 
     * @type {VacationDayOffListResponseDataInnerCalendarVacationConfiguration}
     * @memberof VacationDayOffListResponseDataInnerCalendar
     */
    'vacationConfiguration'?: VacationDayOffListResponseDataInnerCalendarVacationConfiguration;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffListResponseDataInnerCalendar
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffListResponseDataInnerCalendar
     */
    'updatedAt'?: string;
}
