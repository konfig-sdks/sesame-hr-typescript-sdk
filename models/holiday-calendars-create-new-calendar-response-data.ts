/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { HolidayCalendarsCreateNewCalendarResponseDataDayOffInner } from './holiday-calendars-create-new-calendar-response-data-day-off-inner';

/**
 * 
 * @export
 * @interface HolidayCalendarsCreateNewCalendarResponseData
 */
export interface HolidayCalendarsCreateNewCalendarResponseData {
    /**
     * 
     * @type {string}
     * @memberof HolidayCalendarsCreateNewCalendarResponseData
     */
    'id'?: string;
    /**
     * The name of the holidays
     * @type {string}
     * @memberof HolidayCalendarsCreateNewCalendarResponseData
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof HolidayCalendarsCreateNewCalendarResponseData
     */
    'companyId'?: string;
    /**
     * 
     * @type {Array<HolidayCalendarsCreateNewCalendarResponseDataDayOffInner>}
     * @memberof HolidayCalendarsCreateNewCalendarResponseData
     */
    'dayOff'?: Array<HolidayCalendarsCreateNewCalendarResponseDataDayOffInner>;
    /**
     * 
     * @type {string}
     * @memberof HolidayCalendarsCreateNewCalendarResponseData
     */
    'typeId'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof HolidayCalendarsCreateNewCalendarResponseData
     */
    'default'?: boolean;
}

