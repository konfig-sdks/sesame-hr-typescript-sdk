/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AbsenceCalendarsCreateCalendarResponseDataAbsenceType } from './absence-calendars-create-calendar-response-data-absence-type';
import { AbsenceCalendarsCreateCalendarResponseDataEmployee } from './absence-calendars-create-calendar-response-data-employee';
import { AbsenceCalendarsListResponseDataInnerDaysOffInner } from './absence-calendars-list-response-data-inner-days-off-inner';

/**
 * 
 * @export
 * @interface AbsenceCalendarsCreateCalendarResponseData
 */
export interface AbsenceCalendarsCreateCalendarResponseData {
    /**
     * 
     * @type {string}
     * @memberof AbsenceCalendarsCreateCalendarResponseData
     */
    'id'?: string;
    /**
     * 
     * @type {AbsenceCalendarsCreateCalendarResponseDataEmployee}
     * @memberof AbsenceCalendarsCreateCalendarResponseData
     */
    'employee'?: AbsenceCalendarsCreateCalendarResponseDataEmployee;
    /**
     * 
     * @type {Array<AbsenceCalendarsListResponseDataInnerDaysOffInner>}
     * @memberof AbsenceCalendarsCreateCalendarResponseData
     */
    'daysOff'?: Array<AbsenceCalendarsListResponseDataInnerDaysOffInner>;
    /**
     * 
     * @type {number}
     * @memberof AbsenceCalendarsCreateCalendarResponseData
     */
    'maxDaysOff'?: number;
    /**
     * 
     * @type {number}
     * @memberof AbsenceCalendarsCreateCalendarResponseData
     */
    'year'?: number;
    /**
     * 
     * @type {AbsenceCalendarsCreateCalendarResponseDataAbsenceType}
     * @memberof AbsenceCalendarsCreateCalendarResponseData
     */
    'absenceType'?: AbsenceCalendarsCreateCalendarResponseDataAbsenceType;
    /**
     * 
     * @type {string}
     * @memberof AbsenceCalendarsCreateCalendarResponseData
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceCalendarsCreateCalendarResponseData
     */
    'updatedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceCalendarsCreateCalendarResponseData
     */
    'deletedAt'?: string | null;
}

