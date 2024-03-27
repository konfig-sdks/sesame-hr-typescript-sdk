/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CoreV3EmployeeCustomFieldsInner } from './core-v3-employee-custom-fields-inner';
import { TimeEntriesCreateNewEntryResponseDataEmployeeCompany } from './time-entries-create-new-entry-response-data-employee-company';

/**
 * 
 * @export
 * @interface TimeEntriesCreateNewEntryResponseDataEmployee
 */
export interface TimeEntriesCreateNewEntryResponseDataEmployee {
    /**
     * The description of the employee
     * @type {string}
     * @memberof TimeEntriesCreateNewEntryResponseDataEmployee
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesCreateNewEntryResponseDataEmployee
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesCreateNewEntryResponseDataEmployee
     */
    'firstName'?: string;
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesCreateNewEntryResponseDataEmployee
     */
    'lastName'?: string;
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesCreateNewEntryResponseDataEmployee
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesCreateNewEntryResponseDataEmployee
     */
    'workStatus'?: TimeEntriesCreateNewEntryResponseDataEmployeeWorkStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesCreateNewEntryResponseDataEmployee
     */
    'imageProfileURL'?: string;
    /**
     * 
     * @type {number}
     * @memberof TimeEntriesCreateNewEntryResponseDataEmployee
     */
    'code'?: number;
    /**
     * 
     * @type {number}
     * @memberof TimeEntriesCreateNewEntryResponseDataEmployee
     */
    'pin'?: number;
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesCreateNewEntryResponseDataEmployee
     */
    'phone'?: string;
    /**
     * 
     * @type {TimeEntriesCreateNewEntryResponseDataEmployeeCompany}
     * @memberof TimeEntriesCreateNewEntryResponseDataEmployee
     */
    'company'?: TimeEntriesCreateNewEntryResponseDataEmployeeCompany;
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesCreateNewEntryResponseDataEmployee
     */
    'gender'?: TimeEntriesCreateNewEntryResponseDataEmployeeGenderEnum;
    /**
     * The identifier of your internal employee contract
     * @type {string}
     * @memberof TimeEntriesCreateNewEntryResponseDataEmployee
     */
    'contractId'?: string;
    /**
     * The National Identity Document of the employee
     * @type {string}
     * @memberof TimeEntriesCreateNewEntryResponseDataEmployee
     */
    'nid'?: string;
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesCreateNewEntryResponseDataEmployee
     */
    'identityNumberType'?: TimeEntriesCreateNewEntryResponseDataEmployeeIdentityNumberTypeEnum;
    /**
     * The Social Security Number of the employee
     * @type {string}
     * @memberof TimeEntriesCreateNewEntryResponseDataEmployee
     */
    'ssn'?: string;
    /**
     * The Price per hour of the employee
     * @type {number}
     * @memberof TimeEntriesCreateNewEntryResponseDataEmployee
     */
    'pricePerHour'?: number;
    /**
     * The Account Number of the employee
     * @type {string}
     * @memberof TimeEntriesCreateNewEntryResponseDataEmployee
     */
    'accountNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesCreateNewEntryResponseDataEmployee
     */
    'dateOfBirth'?: string;
    /**
     * 
     * @type {Array<CoreV3EmployeeCustomFieldsInner>}
     * @memberof TimeEntriesCreateNewEntryResponseDataEmployee
     */
    'customFields'?: Array<CoreV3EmployeeCustomFieldsInner>;
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesCreateNewEntryResponseDataEmployee
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesCreateNewEntryResponseDataEmployee
     */
    'updatedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesCreateNewEntryResponseDataEmployee
     */
    'status'?: TimeEntriesCreateNewEntryResponseDataEmployeeStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof TimeEntriesCreateNewEntryResponseDataEmployee
     */
    'children'?: number;
    /**
     * 
     * @type {number}
     * @memberof TimeEntriesCreateNewEntryResponseDataEmployee
     */
    'disability'?: number;
    /**
     * The Address of the employee
     * @type {string}
     * @memberof TimeEntriesCreateNewEntryResponseDataEmployee
     */
    'address'?: string;
    /**
     * The postal code of the employee
     * @type {string}
     * @memberof TimeEntriesCreateNewEntryResponseDataEmployee
     */
    'postalCode'?: string;
    /**
     * The city of the employee
     * @type {string}
     * @memberof TimeEntriesCreateNewEntryResponseDataEmployee
     */
    'city'?: string;
    /**
     * The province of the employee
     * @type {string}
     * @memberof TimeEntriesCreateNewEntryResponseDataEmployee
     */
    'province'?: string;
    /**
     * The country of the employee
     * @type {string}
     * @memberof TimeEntriesCreateNewEntryResponseDataEmployee
     */
    'country'?: string;
    /**
     * The nationality of the employee
     * @type {string}
     * @memberof TimeEntriesCreateNewEntryResponseDataEmployee
     */
    'nationality'?: string;
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesCreateNewEntryResponseDataEmployee
     */
    'personalMail'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesCreateNewEntryResponseDataEmployee
     */
    'maritalStatus'?: string;
    /**
     * The emergency phone of the employee
     * @type {string}
     * @memberof TimeEntriesCreateNewEntryResponseDataEmployee
     */
    'emergencyPhone'?: string;
    /**
     * The salary range of the employee
     * @type {string}
     * @memberof TimeEntriesCreateNewEntryResponseDataEmployee
     */
    'salaryRange'?: string;
    /**
     * The study level of the employee
     * @type {string}
     * @memberof TimeEntriesCreateNewEntryResponseDataEmployee
     */
    'studyLevel'?: string;
    /**
     * The professional category code of the employee
     * @type {string}
     * @memberof TimeEntriesCreateNewEntryResponseDataEmployee
     */
    'professionalCategoryCode'?: string;
    /**
     * The professional category description of the employee
     * @type {string}
     * @memberof TimeEntriesCreateNewEntryResponseDataEmployee
     */
    'professionalCategoryDescription'?: string;
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesCreateNewEntryResponseDataEmployee
     */
    'bic'?: string;
}

type TimeEntriesCreateNewEntryResponseDataEmployeeWorkStatusEnum = 'online' | 'offline' | 'paused' | 'remote'
type TimeEntriesCreateNewEntryResponseDataEmployeeGenderEnum = 'female' | 'male' | 'no_response'
type TimeEntriesCreateNewEntryResponseDataEmployeeIdentityNumberTypeEnum = 'dni' | 'nie' | 'rut' | 'other'
type TimeEntriesCreateNewEntryResponseDataEmployeeStatusEnum = 'active' | 'inactive'


