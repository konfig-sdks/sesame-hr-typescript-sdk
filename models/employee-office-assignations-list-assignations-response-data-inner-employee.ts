/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CoreV3EmployeeCustomFieldsInner } from './core-v3-employee-custom-fields-inner';
import { EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployeeCompany } from './employee-office-assignations-list-assignations-response-data-inner-employee-company';

/**
 * 
 * @export
 * @interface EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee
 */
export interface EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee {
    /**
     * The description of the employee
     * @type {string}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee
     */
    'firstName'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee
     */
    'lastName'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee
     */
    'workStatus'?: EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployeeWorkStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee
     */
    'imageProfileURL'?: string;
    /**
     * 
     * @type {number}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee
     */
    'code'?: number;
    /**
     * 
     * @type {number}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee
     */
    'pin'?: number;
    /**
     * 
     * @type {string}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee
     */
    'phone'?: string;
    /**
     * 
     * @type {EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployeeCompany}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee
     */
    'company'?: EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployeeCompany;
    /**
     * 
     * @type {string}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee
     */
    'gender'?: EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployeeGenderEnum;
    /**
     * The identifier of your internal employee contract
     * @type {string}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee
     */
    'contractId'?: string;
    /**
     * The National Identity Document of the employee
     * @type {string}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee
     */
    'nid'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee
     */
    'identityNumberType'?: EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployeeIdentityNumberTypeEnum;
    /**
     * The Social Security Number of the employee
     * @type {string}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee
     */
    'ssn'?: string;
    /**
     * The Price per hour of the employee
     * @type {number}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee
     */
    'pricePerHour'?: number;
    /**
     * The Account Number of the employee
     * @type {string}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee
     */
    'accountNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee
     */
    'dateOfBirth'?: string;
    /**
     * 
     * @type {Array<CoreV3EmployeeCustomFieldsInner>}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee
     */
    'customFields'?: Array<CoreV3EmployeeCustomFieldsInner>;
    /**
     * 
     * @type {string}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee
     */
    'updatedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee
     */
    'status'?: EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployeeStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee
     */
    'children'?: number;
    /**
     * 
     * @type {number}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee
     */
    'disability'?: number;
    /**
     * The Address of the employee
     * @type {string}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee
     */
    'address'?: string;
    /**
     * The postal code of the employee
     * @type {string}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee
     */
    'postalCode'?: string;
    /**
     * The city of the employee
     * @type {string}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee
     */
    'city'?: string;
    /**
     * The province of the employee
     * @type {string}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee
     */
    'province'?: string;
    /**
     * The country of the employee
     * @type {string}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee
     */
    'country'?: string;
    /**
     * The nationality of the employee
     * @type {string}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee
     */
    'nationality'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee
     */
    'personalMail'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee
     */
    'maritalStatus'?: string;
    /**
     * The emergency phone of the employee
     * @type {string}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee
     */
    'emergencyPhone'?: string;
    /**
     * The salary range of the employee
     * @type {string}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee
     */
    'salaryRange'?: string;
    /**
     * The study level of the employee
     * @type {string}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee
     */
    'studyLevel'?: string;
    /**
     * The professional category code of the employee
     * @type {string}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee
     */
    'professionalCategoryCode'?: string;
    /**
     * The professional category description of the employee
     * @type {string}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee
     */
    'professionalCategoryDescription'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee
     */
    'bic'?: string;
}

type EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployeeWorkStatusEnum = 'online' | 'offline' | 'paused' | 'remote'
type EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployeeGenderEnum = 'female' | 'male' | 'no_response'
type EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployeeIdentityNumberTypeEnum = 'dni' | 'nie' | 'rut' | 'other'
type EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployeeStatusEnum = 'active' | 'inactive'

