/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AbsenceCalendarsUpdateByIdRequestDaysOffInner } from './absence-calendars-update-by-id-request-days-off-inner';

/**
 * 
 * @export
 * @interface AbsenceCalendarsUpdateByIdRequest
 */
export interface AbsenceCalendarsUpdateByIdRequest {
    /**
     * array of AbsenceCalendarDayOff
     * @type {Array<AbsenceCalendarsUpdateByIdRequestDaysOffInner>}
     * @memberof AbsenceCalendarsUpdateByIdRequest
     */
    'daysOff': Array<AbsenceCalendarsUpdateByIdRequestDaysOffInner>;
}

