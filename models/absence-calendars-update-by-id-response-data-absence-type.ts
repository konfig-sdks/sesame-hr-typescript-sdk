/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AbsenceCalendarsUpdateByIdResponseDataAbsenceTypeCompany } from './absence-calendars-update-by-id-response-data-absence-type-company';

/**
 * 
 * @export
 * @interface AbsenceCalendarsUpdateByIdResponseDataAbsenceType
 */
export interface AbsenceCalendarsUpdateByIdResponseDataAbsenceType {
    /**
     * 
     * @type {string}
     * @memberof AbsenceCalendarsUpdateByIdResponseDataAbsenceType
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceCalendarsUpdateByIdResponseDataAbsenceType
     */
    'name'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof AbsenceCalendarsUpdateByIdResponseDataAbsenceType
     */
    'needsValidation'?: boolean;
    /**
     * 
     * @type {AbsenceCalendarsUpdateByIdResponseDataAbsenceTypeCompany}
     * @memberof AbsenceCalendarsUpdateByIdResponseDataAbsenceType
     */
    'company'?: AbsenceCalendarsUpdateByIdResponseDataAbsenceTypeCompany;
    /**
     * 
     * @type {string}
     * @memberof AbsenceCalendarsUpdateByIdResponseDataAbsenceType
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceCalendarsUpdateByIdResponseDataAbsenceType
     */
    'updatedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceCalendarsUpdateByIdResponseDataAbsenceType
     */
    'deletedAt'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AbsenceCalendarsUpdateByIdResponseDataAbsenceType
     */
    'type'?: AbsenceCalendarsUpdateByIdResponseDataAbsenceTypeTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof AbsenceCalendarsUpdateByIdResponseDataAbsenceType
     */
    'pickMode'?: AbsenceCalendarsUpdateByIdResponseDataAbsenceTypePickModeEnum;
}

type AbsenceCalendarsUpdateByIdResponseDataAbsenceTypeTypeEnum = 'normal' | 'private'
type AbsenceCalendarsUpdateByIdResponseDataAbsenceTypePickModeEnum = 'by_days' | 'by_time_range'


