/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CoreV3EmployeeCustomFieldsInner } from './core-v3-employee-custom-fields-inner';
import { VacationDayOffRequestsCreateRequestResponseDataEmployeeCompany } from './vacation-day-off-requests-create-request-response-data-employee-company';

/**
 * 
 * @export
 * @interface VacationDayOffRequestsCreateRequestResponseDataEmployee
 */
export interface VacationDayOffRequestsCreateRequestResponseDataEmployee {
    /**
     * The description of the employee
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataEmployee
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataEmployee
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataEmployee
     */
    'firstName'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataEmployee
     */
    'lastName'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataEmployee
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataEmployee
     */
    'workStatus'?: VacationDayOffRequestsCreateRequestResponseDataEmployeeWorkStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataEmployee
     */
    'imageProfileURL'?: string;
    /**
     * 
     * @type {number}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataEmployee
     */
    'code'?: number;
    /**
     * 
     * @type {number}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataEmployee
     */
    'pin'?: number;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataEmployee
     */
    'phone'?: string;
    /**
     * 
     * @type {VacationDayOffRequestsCreateRequestResponseDataEmployeeCompany}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataEmployee
     */
    'company'?: VacationDayOffRequestsCreateRequestResponseDataEmployeeCompany;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataEmployee
     */
    'gender'?: VacationDayOffRequestsCreateRequestResponseDataEmployeeGenderEnum;
    /**
     * The identifier of your internal employee contract
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataEmployee
     */
    'contractId'?: string;
    /**
     * The National Identity Document of the employee
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataEmployee
     */
    'nid'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataEmployee
     */
    'identityNumberType'?: VacationDayOffRequestsCreateRequestResponseDataEmployeeIdentityNumberTypeEnum;
    /**
     * The Social Security Number of the employee
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataEmployee
     */
    'ssn'?: string;
    /**
     * The Price per hour of the employee
     * @type {number}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataEmployee
     */
    'pricePerHour'?: number;
    /**
     * The Account Number of the employee
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataEmployee
     */
    'accountNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataEmployee
     */
    'dateOfBirth'?: string;
    /**
     * 
     * @type {Array<CoreV3EmployeeCustomFieldsInner>}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataEmployee
     */
    'customFields'?: Array<CoreV3EmployeeCustomFieldsInner>;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataEmployee
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataEmployee
     */
    'updatedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataEmployee
     */
    'status'?: VacationDayOffRequestsCreateRequestResponseDataEmployeeStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataEmployee
     */
    'children'?: number;
    /**
     * 
     * @type {number}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataEmployee
     */
    'disability'?: number;
    /**
     * The Address of the employee
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataEmployee
     */
    'address'?: string;
    /**
     * The postal code of the employee
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataEmployee
     */
    'postalCode'?: string;
    /**
     * The city of the employee
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataEmployee
     */
    'city'?: string;
    /**
     * The province of the employee
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataEmployee
     */
    'province'?: string;
    /**
     * The country of the employee
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataEmployee
     */
    'country'?: string;
    /**
     * The nationality of the employee
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataEmployee
     */
    'nationality'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataEmployee
     */
    'personalMail'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataEmployee
     */
    'maritalStatus'?: string;
    /**
     * The emergency phone of the employee
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataEmployee
     */
    'emergencyPhone'?: string;
    /**
     * The salary range of the employee
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataEmployee
     */
    'salaryRange'?: string;
    /**
     * The study level of the employee
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataEmployee
     */
    'studyLevel'?: string;
    /**
     * The professional category code of the employee
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataEmployee
     */
    'professionalCategoryCode'?: string;
    /**
     * The professional category description of the employee
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataEmployee
     */
    'professionalCategoryDescription'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataEmployee
     */
    'bic'?: string;
}

type VacationDayOffRequestsCreateRequestResponseDataEmployeeWorkStatusEnum = 'online' | 'offline' | 'paused' | 'remote'
type VacationDayOffRequestsCreateRequestResponseDataEmployeeGenderEnum = 'female' | 'male' | 'no_response'
type VacationDayOffRequestsCreateRequestResponseDataEmployeeIdentityNumberTypeEnum = 'dni' | 'nie' | 'rut' | 'other'
type VacationDayOffRequestsCreateRequestResponseDataEmployeeStatusEnum = 'active' | 'inactive'


