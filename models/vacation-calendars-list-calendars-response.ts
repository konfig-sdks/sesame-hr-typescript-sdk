/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { VacationCalendarsListCalendarsResponseDataInner } from './vacation-calendars-list-calendars-response-data-inner';
import { VacationCalendarsListCalendarsResponseMeta } from './vacation-calendars-list-calendars-response-meta';

/**
 * 
 * @export
 * @interface VacationCalendarsListCalendarsResponse
 */
export interface VacationCalendarsListCalendarsResponse {
    /**
     * 
     * @type {Array<VacationCalendarsListCalendarsResponseDataInner>}
     * @memberof VacationCalendarsListCalendarsResponse
     */
    'data'?: Array<VacationCalendarsListCalendarsResponseDataInner>;
    /**
     * 
     * @type {VacationCalendarsListCalendarsResponseMeta}
     * @memberof VacationCalendarsListCalendarsResponse
     */
    'meta'?: VacationCalendarsListCalendarsResponseMeta;
}

