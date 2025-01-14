/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AbsenceCalendarsListResponseDataInnerDaysOffInner } from './absence-calendars-list-response-data-inner-days-off-inner';
import { AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarAbsenceType } from './absence-day-off-requests-list-day-off-requests-response-data-inner-absence-calendar-absence-type';
import { AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee } from './absence-day-off-requests-list-day-off-requests-response-data-inner-absence-calendar-employee';

/**
 * 
 * @export
 * @interface AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendar
 */
export interface AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendar {
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendar
     */
    'id'?: string;
    /**
     * 
     * @type {AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendar
     */
    'employee'?: AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee;
    /**
     * 
     * @type {Array<AbsenceCalendarsListResponseDataInnerDaysOffInner>}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendar
     */
    'daysOff'?: Array<AbsenceCalendarsListResponseDataInnerDaysOffInner>;
    /**
     * 
     * @type {number}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendar
     */
    'maxDaysOff'?: number;
    /**
     * 
     * @type {number}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendar
     */
    'year'?: number;
    /**
     * 
     * @type {AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarAbsenceType}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendar
     */
    'absenceType'?: AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarAbsenceType;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendar
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendar
     */
    'updatedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendar
     */
    'deletedAt'?: string | null;
}

