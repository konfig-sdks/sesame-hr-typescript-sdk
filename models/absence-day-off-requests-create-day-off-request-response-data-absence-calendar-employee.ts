/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployeeCompany } from './absence-day-off-requests-create-day-off-request-response-data-absence-calendar-employee-company';
import { CoreV3EmployeeCustomFieldsInner } from './core-v3-employee-custom-fields-inner';

/**
 * 
 * @export
 * @interface AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployee
 */
export interface AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployee {
    /**
     * The description of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployee
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployee
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployee
     */
    'firstName'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployee
     */
    'lastName'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployee
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployee
     */
    'workStatus'?: AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployeeWorkStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployee
     */
    'imageProfileURL'?: string;
    /**
     * 
     * @type {number}
     * @memberof AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployee
     */
    'code'?: number;
    /**
     * 
     * @type {number}
     * @memberof AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployee
     */
    'pin'?: number;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployee
     */
    'phone'?: string;
    /**
     * 
     * @type {AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployeeCompany}
     * @memberof AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployee
     */
    'company'?: AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployeeCompany;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployee
     */
    'gender'?: AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployeeGenderEnum;
    /**
     * The identifier of your internal employee contract
     * @type {string}
     * @memberof AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployee
     */
    'contractId'?: string;
    /**
     * The National Identity Document of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployee
     */
    'nid'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployee
     */
    'identityNumberType'?: AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployeeIdentityNumberTypeEnum;
    /**
     * The Social Security Number of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployee
     */
    'ssn'?: string;
    /**
     * The Price per hour of the employee
     * @type {number}
     * @memberof AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployee
     */
    'pricePerHour'?: number;
    /**
     * The Account Number of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployee
     */
    'accountNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployee
     */
    'dateOfBirth'?: string;
    /**
     * 
     * @type {Array<CoreV3EmployeeCustomFieldsInner>}
     * @memberof AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployee
     */
    'customFields'?: Array<CoreV3EmployeeCustomFieldsInner>;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployee
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployee
     */
    'updatedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployee
     */
    'status'?: AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployeeStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployee
     */
    'children'?: number;
    /**
     * 
     * @type {number}
     * @memberof AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployee
     */
    'disability'?: number;
    /**
     * The Address of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployee
     */
    'address'?: string;
    /**
     * The postal code of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployee
     */
    'postalCode'?: string;
    /**
     * The city of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployee
     */
    'city'?: string;
    /**
     * The province of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployee
     */
    'province'?: string;
    /**
     * The country of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployee
     */
    'country'?: string;
    /**
     * The nationality of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployee
     */
    'nationality'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployee
     */
    'personalMail'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployee
     */
    'maritalStatus'?: string;
    /**
     * The emergency phone of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployee
     */
    'emergencyPhone'?: string;
    /**
     * The salary range of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployee
     */
    'salaryRange'?: string;
    /**
     * The study level of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployee
     */
    'studyLevel'?: string;
    /**
     * The professional category code of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployee
     */
    'professionalCategoryCode'?: string;
    /**
     * The professional category description of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployee
     */
    'professionalCategoryDescription'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployee
     */
    'bic'?: string;
}

type AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployeeWorkStatusEnum = 'online' | 'offline' | 'paused' | 'remote'
type AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployeeGenderEnum = 'female' | 'male' | 'no_response'
type AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployeeIdentityNumberTypeEnum = 'dni' | 'nie' | 'rut' | 'other'
type AbsenceDayOffRequestsCreateDayOffRequestResponseDataAbsenceCalendarEmployeeStatusEnum = 'active' | 'inactive'

