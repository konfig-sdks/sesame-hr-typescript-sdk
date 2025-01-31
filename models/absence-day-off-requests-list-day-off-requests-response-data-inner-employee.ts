/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployeeCompany } from './absence-day-off-requests-list-day-off-requests-response-data-inner-employee-company';
import { CoreV3EmployeeCustomFieldsInner } from './core-v3-employee-custom-fields-inner';

/**
 * 
 * @export
 * @interface AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee
 */
export interface AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee {
    /**
     * The description of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee
     */
    'firstName'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee
     */
    'lastName'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee
     */
    'workStatus'?: AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployeeWorkStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee
     */
    'imageProfileURL'?: string;
    /**
     * 
     * @type {number}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee
     */
    'code'?: number;
    /**
     * 
     * @type {number}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee
     */
    'pin'?: number;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee
     */
    'phone'?: string;
    /**
     * 
     * @type {AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployeeCompany}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee
     */
    'company'?: AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployeeCompany;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee
     */
    'gender'?: AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployeeGenderEnum;
    /**
     * The identifier of your internal employee contract
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee
     */
    'contractId'?: string;
    /**
     * The National Identity Document of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee
     */
    'nid'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee
     */
    'identityNumberType'?: AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployeeIdentityNumberTypeEnum;
    /**
     * The Social Security Number of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee
     */
    'ssn'?: string;
    /**
     * The Price per hour of the employee
     * @type {number}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee
     */
    'pricePerHour'?: number;
    /**
     * The Account Number of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee
     */
    'accountNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee
     */
    'dateOfBirth'?: string;
    /**
     * 
     * @type {Array<CoreV3EmployeeCustomFieldsInner>}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee
     */
    'customFields'?: Array<CoreV3EmployeeCustomFieldsInner>;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee
     */
    'updatedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee
     */
    'status'?: AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployeeStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee
     */
    'children'?: number;
    /**
     * 
     * @type {number}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee
     */
    'disability'?: number;
    /**
     * The Address of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee
     */
    'address'?: string;
    /**
     * The postal code of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee
     */
    'postalCode'?: string;
    /**
     * The city of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee
     */
    'city'?: string;
    /**
     * The province of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee
     */
    'province'?: string;
    /**
     * The country of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee
     */
    'country'?: string;
    /**
     * The nationality of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee
     */
    'nationality'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee
     */
    'personalMail'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee
     */
    'maritalStatus'?: string;
    /**
     * The emergency phone of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee
     */
    'emergencyPhone'?: string;
    /**
     * The salary range of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee
     */
    'salaryRange'?: string;
    /**
     * The study level of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee
     */
    'studyLevel'?: string;
    /**
     * The professional category code of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee
     */
    'professionalCategoryCode'?: string;
    /**
     * The professional category description of the employee
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee
     */
    'professionalCategoryDescription'?: string;
    /**
     * 
     * @type {string}
     * @memberof AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployee
     */
    'bic'?: string;
}

type AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployeeWorkStatusEnum = 'online' | 'offline' | 'paused' | 'remote'
type AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployeeGenderEnum = 'female' | 'male' | 'no_response'
type AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployeeIdentityNumberTypeEnum = 'dni' | 'nie' | 'rut' | 'other'
type AbsenceDayOffRequestsListDayOffRequestsResponseDataInnerEmployeeStatusEnum = 'active' | 'inactive'


