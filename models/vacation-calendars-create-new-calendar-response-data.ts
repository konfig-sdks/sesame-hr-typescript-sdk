/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { VacationCalendarsCreateNewCalendarResponseDataEmployee } from './vacation-calendars-create-new-calendar-response-data-employee';
import { VacationCalendarsCreateNewCalendarResponseDataVacationConfiguration } from './vacation-calendars-create-new-calendar-response-data-vacation-configuration';
import { VacationCalendarsListCalendarsResponseDataInnerDaysOffInner } from './vacation-calendars-list-calendars-response-data-inner-days-off-inner';

/**
 * 
 * @export
 * @interface VacationCalendarsCreateNewCalendarResponseData
 */
export interface VacationCalendarsCreateNewCalendarResponseData {
    /**
     * 
     * @type {string}
     * @memberof VacationCalendarsCreateNewCalendarResponseData
     */
    'id'?: string;
    /**
     * 
     * @type {VacationCalendarsCreateNewCalendarResponseDataEmployee}
     * @memberof VacationCalendarsCreateNewCalendarResponseData
     */
    'employee'?: VacationCalendarsCreateNewCalendarResponseDataEmployee;
    /**
     * 
     * @type {Array<VacationCalendarsListCalendarsResponseDataInnerDaysOffInner>}
     * @memberof VacationCalendarsCreateNewCalendarResponseData
     */
    'daysOff'?: Array<VacationCalendarsListCalendarsResponseDataInnerDaysOffInner>;
    /**
     * 
     * @type {number}
     * @memberof VacationCalendarsCreateNewCalendarResponseData
     */
    'maxDaysOff'?: number;
    /**
     * 
     * @type {number}
     * @memberof VacationCalendarsCreateNewCalendarResponseData
     */
    'year'?: number;
    /**
     * 
     * @type {VacationCalendarsCreateNewCalendarResponseDataVacationConfiguration}
     * @memberof VacationCalendarsCreateNewCalendarResponseData
     */
    'vacationConfiguration'?: VacationCalendarsCreateNewCalendarResponseDataVacationConfiguration;
    /**
     * 
     * @type {string}
     * @memberof VacationCalendarsCreateNewCalendarResponseData
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationCalendarsCreateNewCalendarResponseData
     */
    'updatedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationCalendarsCreateNewCalendarResponseData
     */
    'deletedAt'?: string;
}
