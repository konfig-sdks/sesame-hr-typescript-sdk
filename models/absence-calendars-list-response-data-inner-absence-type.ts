/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AbsenceCalendarsListResponseDataInnerAbsenceTypeCompany } from './absence-calendars-list-response-data-inner-absence-type-company';

/**
 * 
 * @export
 * @interface AbsenceCalendarsListResponseDataInnerAbsenceType
 */
export interface AbsenceCalendarsListResponseDataInnerAbsenceType {
    /**
     * 
     * @type {string}
     * @memberof AbsenceCalendarsListResponseDataInnerAbsenceType
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceCalendarsListResponseDataInnerAbsenceType
     */
    'name'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AbsenceCalendarsListResponseDataInnerAbsenceType
     */
    'needsValidation'?: boolean;
    /**
     * 
     * @type {AbsenceCalendarsListResponseDataInnerAbsenceTypeCompany}
     * @memberof AbsenceCalendarsListResponseDataInnerAbsenceType
     */
    'company'?: AbsenceCalendarsListResponseDataInnerAbsenceTypeCompany;
    /**
     * 
     * @type {string}
     * @memberof AbsenceCalendarsListResponseDataInnerAbsenceType
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceCalendarsListResponseDataInnerAbsenceType
     */
    'updatedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceCalendarsListResponseDataInnerAbsenceType
     */
    'deletedAt'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AbsenceCalendarsListResponseDataInnerAbsenceType
     */
    'type'?: AbsenceCalendarsListResponseDataInnerAbsenceTypeTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AbsenceCalendarsListResponseDataInnerAbsenceType
     */
    'pickMode'?: AbsenceCalendarsListResponseDataInnerAbsenceTypePickModeEnum;
}

type AbsenceCalendarsListResponseDataInnerAbsenceTypeTypeEnum = 'normal' | 'private'
type AbsenceCalendarsListResponseDataInnerAbsenceTypePickModeEnum = 'by_days' | 'by_time_range'


