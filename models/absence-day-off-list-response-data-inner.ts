/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AbsenceDayOffListResponseDataInnerCalendar } from './absence-day-off-list-response-data-inner-calendar';
import { AbsenceDayOffListResponseDataInnerEmployee } from './absence-day-off-list-response-data-inner-employee';

/**
 * 
 * @export
 * @interface AbsenceDayOffListResponseDataInner
 */
export interface AbsenceDayOffListResponseDataInner {
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffListResponseDataInner
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffListResponseDataInner
     */
    'date'?: string;
    /**
     * 
     * @type {number}
     * @memberof AbsenceDayOffListResponseDataInner
     */
    'seconds'?: number;
    /**
     * 
     * @type {AbsenceDayOffListResponseDataInnerCalendar}
     * @memberof AbsenceDayOffListResponseDataInner
     */
    'calendar'?: AbsenceDayOffListResponseDataInnerCalendar;
    /**
     * 
     * @type {AbsenceDayOffListResponseDataInnerEmployee}
     * @memberof AbsenceDayOffListResponseDataInner
     */
    'employee'?: AbsenceDayOffListResponseDataInnerEmployee;
}

