/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CoreV3EmployeeCustomFieldsInner } from './core-v3-employee-custom-fields-inner';
import { TimeEntriesListResponseDataInnerEmployeeCompany } from './time-entries-list-response-data-inner-employee-company';

/**
 * 
 * @export
 * @interface TimeEntriesListResponseDataInnerEmployee
 */
export interface TimeEntriesListResponseDataInnerEmployee {
    /**
     * The description of the employee
     * @type {string}
     * @memberof TimeEntriesListResponseDataInnerEmployee
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesListResponseDataInnerEmployee
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesListResponseDataInnerEmployee
     */
    'firstName'?: string;
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesListResponseDataInnerEmployee
     */
    'lastName'?: string;
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesListResponseDataInnerEmployee
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesListResponseDataInnerEmployee
     */
    'workStatus'?: TimeEntriesListResponseDataInnerEmployeeWorkStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesListResponseDataInnerEmployee
     */
    'imageProfileURL'?: string;
    /**
     * 
     * @type {number}
     * @memberof TimeEntriesListResponseDataInnerEmployee
     */
    'code'?: number;
    /**
     * 
     * @type {number}
     * @memberof TimeEntriesListResponseDataInnerEmployee
     */
    'pin'?: number;
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesListResponseDataInnerEmployee
     */
    'phone'?: string;
    /**
     * 
     * @type {TimeEntriesListResponseDataInnerEmployeeCompany}
     * @memberof TimeEntriesListResponseDataInnerEmployee
     */
    'company'?: TimeEntriesListResponseDataInnerEmployeeCompany;
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesListResponseDataInnerEmployee
     */
    'gender'?: TimeEntriesListResponseDataInnerEmployeeGenderEnum;
    /**
     * The identifier of your internal employee contract
     * @type {string}
     * @memberof TimeEntriesListResponseDataInnerEmployee
     */
    'contractId'?: string;
    /**
     * The National Identity Document of the employee
     * @type {string}
     * @memberof TimeEntriesListResponseDataInnerEmployee
     */
    'nid'?: string;
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesListResponseDataInnerEmployee
     */
    'identityNumberType'?: TimeEntriesListResponseDataInnerEmployeeIdentityNumberTypeEnum;
    /**
     * The Social Security Number of the employee
     * @type {string}
     * @memberof TimeEntriesListResponseDataInnerEmployee
     */
    'ssn'?: string;
    /**
     * The Price per hour of the employee
     * @type {number}
     * @memberof TimeEntriesListResponseDataInnerEmployee
     */
    'pricePerHour'?: number;
    /**
     * The Account Number of the employee
     * @type {string}
     * @memberof TimeEntriesListResponseDataInnerEmployee
     */
    'accountNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesListResponseDataInnerEmployee
     */
    'dateOfBirth'?: string;
    /**
     * 
     * @type {Array<CoreV3EmployeeCustomFieldsInner>}
     * @memberof TimeEntriesListResponseDataInnerEmployee
     */
    'customFields'?: Array<CoreV3EmployeeCustomFieldsInner>;
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesListResponseDataInnerEmployee
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesListResponseDataInnerEmployee
     */
    'updatedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesListResponseDataInnerEmployee
     */
    'status'?: TimeEntriesListResponseDataInnerEmployeeStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof TimeEntriesListResponseDataInnerEmployee
     */
    'children'?: number;
    /**
     * 
     * @type {number}
     * @memberof TimeEntriesListResponseDataInnerEmployee
     */
    'disability'?: number;
    /**
     * The Address of the employee
     * @type {string}
     * @memberof TimeEntriesListResponseDataInnerEmployee
     */
    'address'?: string;
    /**
     * The postal code of the employee
     * @type {string}
     * @memberof TimeEntriesListResponseDataInnerEmployee
     */
    'postalCode'?: string;
    /**
     * The city of the employee
     * @type {string}
     * @memberof TimeEntriesListResponseDataInnerEmployee
     */
    'city'?: string;
    /**
     * The province of the employee
     * @type {string}
     * @memberof TimeEntriesListResponseDataInnerEmployee
     */
    'province'?: string;
    /**
     * The country of the employee
     * @type {string}
     * @memberof TimeEntriesListResponseDataInnerEmployee
     */
    'country'?: string;
    /**
     * The nationality of the employee
     * @type {string}
     * @memberof TimeEntriesListResponseDataInnerEmployee
     */
    'nationality'?: string;
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesListResponseDataInnerEmployee
     */
    'personalMail'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesListResponseDataInnerEmployee
     */
    'maritalStatus'?: string;
    /**
     * The emergency phone of the employee
     * @type {string}
     * @memberof TimeEntriesListResponseDataInnerEmployee
     */
    'emergencyPhone'?: string;
    /**
     * The salary range of the employee
     * @type {string}
     * @memberof TimeEntriesListResponseDataInnerEmployee
     */
    'salaryRange'?: string;
    /**
     * The study level of the employee
     * @type {string}
     * @memberof TimeEntriesListResponseDataInnerEmployee
     */
    'studyLevel'?: string;
    /**
     * The professional category code of the employee
     * @type {string}
     * @memberof TimeEntriesListResponseDataInnerEmployee
     */
    'professionalCategoryCode'?: string;
    /**
     * The professional category description of the employee
     * @type {string}
     * @memberof TimeEntriesListResponseDataInnerEmployee
     */
    'professionalCategoryDescription'?: string;
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesListResponseDataInnerEmployee
     */
    'bic'?: string;
}

type TimeEntriesListResponseDataInnerEmployeeWorkStatusEnum = 'online' | 'offline' | 'paused' | 'remote'
type TimeEntriesListResponseDataInnerEmployeeGenderEnum = 'female' | 'male' | 'no_response'
type TimeEntriesListResponseDataInnerEmployeeIdentityNumberTypeEnum = 'dni' | 'nie' | 'rut' | 'other'
type TimeEntriesListResponseDataInnerEmployeeStatusEnum = 'active' | 'inactive'


