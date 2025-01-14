/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { HolidaysListResponseDataInnerDayOff } from './holidays-list-response-data-inner-day-off';
import { HolidaysListResponseDataInnerEmployee } from './holidays-list-response-data-inner-employee';

/**
 * 
 * @export
 * @interface HolidaysListResponseDataInner
 */
export interface HolidaysListResponseDataInner {
    /**
     * 
     * @type {HolidaysListResponseDataInnerEmployee}
     * @memberof HolidaysListResponseDataInner
     */
    'employee'?: HolidaysListResponseDataInnerEmployee;
    /**
     * 
     * @type {HolidaysListResponseDataInnerDayOff}
     * @memberof HolidaysListResponseDataInner
     */
    'dayOff'?: HolidaysListResponseDataInnerDayOff;
}

