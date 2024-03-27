/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployeeCompany } from './absence-day-off-requests-list-day-off-requests-response-data-inner-absence-calendar-employee-company';
import { CoreV3EmployeeCustomFieldsInner } from './core-v3-employee-custom-fields-inner';

/**
 * 
 * @export
 * @interface AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee
 */
export interface AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee {
    /**
     * The description of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee
     */
    'firstName'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee
     */
    'lastName'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee
     */
    'workStatus'?: AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployeeWorkStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee
     */
    'imageProfileURL'?: string;
    /**
     * 
     * @type {number}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee
     */
    'code'?: number;
    /**
     * 
     * @type {number}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee
     */
    'pin'?: number;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee
     */
    'phone'?: string;
    /**
     * 
     * @type {AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployeeCompany}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee
     */
    'company'?: AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployeeCompany;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee
     */
    'gender'?: AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployeeGenderEnum;
    /**
     * The identifier of your internal employee contract
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee
     */
    'contractId'?: string;
    /**
     * The National Identity Document of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee
     */
    'nid'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee
     */
    'identityNumberType'?: AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployeeIdentityNumberTypeEnum;
    /**
     * The Social Security Number of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee
     */
    'ssn'?: string;
    /**
     * The Price per hour of the employee
     * @type {number}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee
     */
    'pricePerHour'?: number;
    /**
     * The Account Number of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee
     */
    'accountNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee
     */
    'dateOfBirth'?: string;
    /**
     * 
     * @type {Array<CoreV3EmployeeCustomFieldsInner>}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee
     */
    'customFields'?: Array<CoreV3EmployeeCustomFieldsInner>;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee
     */
    'updatedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee
     */
    'status'?: AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployeeStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee
     */
    'children'?: number;
    /**
     * 
     * @type {number}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee
     */
    'disability'?: number;
    /**
     * The Address of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee
     */
    'address'?: string;
    /**
     * The postal code of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee
     */
    'postalCode'?: string;
    /**
     * The city of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee
     */
    'city'?: string;
    /**
     * The province of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee
     */
    'province'?: string;
    /**
     * The country of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee
     */
    'country'?: string;
    /**
     * The nationality of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee
     */
    'nationality'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee
     */
    'personalMail'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee
     */
    'maritalStatus'?: string;
    /**
     * The emergency phone of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee
     */
    'emergencyPhone'?: string;
    /**
     * The salary range of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee
     */
    'salaryRange'?: string;
    /**
     * The study level of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee
     */
    'studyLevel'?: string;
    /**
     * The professional category code of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee
     */
    'professionalCategoryCode'?: string;
    /**
     * The professional category description of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee
     */
    'professionalCategoryDescription'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployee
     */
    'bic'?: string;
}

type AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployeeWorkStatusEnum = 'online' | 'offline' | 'paused' | 'remote'
type AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployeeGenderEnum = 'female' | 'male' | 'no_response'
type AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployeeIdentityNumberTypeEnum = 'dni' | 'nie' | 'rut' | 'other'
type AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerAbsenceCalendarEmployeeStatusEnum = 'active' | 'inactive'

