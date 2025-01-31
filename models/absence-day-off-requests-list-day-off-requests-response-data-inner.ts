/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendar } from './absence-day-off-requests-list-day-off-requests-response-data-inner-absence-calendar';
import { AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerDaysOffInner } from './absence-day-off-requests-list-day-off-requests-response-data-inner-days-off-inner';
import { AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee } from './absence-day-off-requests-list-day-off-requests-response-data-inner-employee';

/**
 * 
 * @export
 * @interface AbsenceDayOffRequestsListDayOffRequestsResponseDataInner
 */
export interface AbsenceDayOffRequestsListDayOffRequestsResponseDataInner {
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInner
     */
    'id'?: string;
    /**
     * 
     * @type {AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendar}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInner
     */
    'absenceCalendar'?: AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendar;
    /**
     * 
     * @type {AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInner
     */
    'employee'?: AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee;
    /**
     * 
     * @type {Array<AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerDaysOffInner>}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInner
     */
    'daysOff'?: Array<AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerDaysOffInner>;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInner
     */
    'status'?: AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInner
     */
    'type'?: AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInner
     */
    'comment'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInner
     */
    'resolutionComment'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInner
     */
    'resolvedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInner
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInner
     */
    'updatedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInner
     */
    'deletedAt'?: string;
}

type AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerStatusEnum = 'accepted' | 'rejected' | 'pending'
type AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerTypeEnum = 'create' | 'delete'


