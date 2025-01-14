/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { VacationCalendarsListCalendarsResponseDataInnerDaysOffInner } from './vacation-calendars-list-calendars-response-data-inner-days-off-inner';
import { VacationDayOffRequestsRejectRequestResponseDataVacationCalendarEmployee } from './vacation-day-off-requests-reject-request-response-data-vacation-calendar-employee';
import { VacationDayOffRequestsRejectRequestResponseDataVacationCalendarVacationConfiguration } from './vacation-day-off-requests-reject-request-response-data-vacation-calendar-vacation-configuration';

/**
 * 
 * @export
 * @interface VacationDayOffRequestsRejectRequestResponseDataVacationCalendar
 */
export interface VacationDayOffRequestsRejectRequestResponseDataVacationCalendar {
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsRejectRequestResponseDataVacationCalendar
     */
    'id'?: string;
    /**
     * 
     * @type {VacationDayOffRequestsRejectRequestResponseDataVacationCalendarEmployee}
     * @memberof VacationDayOffRequestsRejectRequestResponseDataVacationCalendar
     */
    'employee'?: VacationDayOffRequestsRejectRequestResponseDataVacationCalendarEmployee;
    /**
     * 
     * @type {Array<VacationCalendarsListCalendarsResponseDataInnerDaysOffInner>}
     * @memberof VacationDayOffRequestsRejectRequestResponseDataVacationCalendar
     */
    'daysOff'?: Array<VacationCalendarsListCalendarsResponseDataInnerDaysOffInner>;
    /**
     * 
     * @type {number}
     * @memberof VacationDayOffRequestsRejectRequestResponseDataVacationCalendar
     */
    'maxDaysOff'?: number;
    /**
     * 
     * @type {number}
     * @memberof VacationDayOffRequestsRejectRequestResponseDataVacationCalendar
     */
    'year'?: number;
    /**
     * 
     * @type {VacationDayOffRequestsRejectRequestResponseDataVacationCalendarVacationConfiguration}
     * @memberof VacationDayOffRequestsRejectRequestResponseDataVacationCalendar
     */
    'vacationConfiguration'?: VacationDayOffRequestsRejectRequestResponseDataVacationCalendarVacationConfiguration;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsRejectRequestResponseDataVacationCalendar
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsRejectRequestResponseDataVacationCalendar
     */
    'updatedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsRejectRequestResponseDataVacationCalendar
     */
    'deletedAt'?: string;
}

