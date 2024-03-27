/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { VacationCalendarsUpdateCalendarResponseData } from './vacation-calendars-update-calendar-response-data';
import { VacationCalendarsUpdateCalendarResponseMeta } from './vacation-calendars-update-calendar-response-meta';

/**
 * 
 * @export
 * @interface VacationCalendarsUpdateCalendarResponse
 */
export interface VacationCalendarsUpdateCalendarResponse {
    /**
     * 
     * @type {VacationCalendarsUpdateCalendarResponseData}
     * @memberof VacationCalendarsUpdateCalendarResponse
     */
    'data'?: VacationCalendarsUpdateCalendarResponseData;
    /**
     * 
     * @type {VacationCalendarsUpdateCalendarResponseMeta}
     * @memberof VacationCalendarsUpdateCalendarResponse
     */
    'meta'?: VacationCalendarsUpdateCalendarResponseMeta;
}

