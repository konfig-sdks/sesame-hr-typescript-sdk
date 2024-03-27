/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { VacationCalendarsListCalendarsResponseDataInnerDaysOffInner } from './vacation-calendars-list-calendars-response-data-inner-days-off-inner';
import { VacationDayOffRequestsCreateRequestResponseDataEmployee } from './vacation-day-off-requests-create-request-response-data-employee';
import { VacationDayOffRequestsCreateRequestResponseDataVacationCalendar } from './vacation-day-off-requests-create-request-response-data-vacation-calendar';

/**
 * 
 * @export
 * @interface VacationDayOffRequestsCreateRequestResponseData
 */
export interface VacationDayOffRequestsCreateRequestResponseData {
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseData
     */
    'id'?: string;
    /**
     * 
     * @type {VacationDayOffRequestsCreateRequestResponseDataVacationCalendar}
     * @memberof VacationDayOffRequestsCreateRequestResponseData
     */
    'vacationCalendar'?: VacationDayOffRequestsCreateRequestResponseDataVacationCalendar;
    /**
     * 
     * @type {VacationDayOffRequestsCreateRequestResponseDataEmployee}
     * @memberof VacationDayOffRequestsCreateRequestResponseData
     */
    'employee'?: VacationDayOffRequestsCreateRequestResponseDataEmployee;
    /**
     * 
     * @type {Array<VacationCalendarsListCalendarsResponseDataInnerDaysOffInner>}
     * @memberof VacationDayOffRequestsCreateRequestResponseData
     */
    'daysOff'?: Array<VacationCalendarsListCalendarsResponseDataInnerDaysOffInner>;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseData
     */
    'status'?: VacationDayOffRequestsCreateRequestResponseDataStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseData
     */
    'type'?: VacationDayOffRequestsCreateRequestResponseDataTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseData
     */
    'comment'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseData
     */
    'resolutionComment'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseData
     */
    'resolvedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseData
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseData
     */
    'updatedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseData
     */
    'deletedAt'?: string;
}

type VacationDayOffRequestsCreateRequestResponseDataStatusEnum = 'accepted' | 'rejected' | 'pending'
type VacationDayOffRequestsCreateRequestResponseDataTypeEnum = 'create' | 'delete'

