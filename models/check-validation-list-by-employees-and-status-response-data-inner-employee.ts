/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CheckValidationListByEmployeesAndStatusResponseDataInnerEmployeeCompany } from './check-validation-list-by-employees-and-status-response-data-inner-employee-company';
import { CoreV3EmployeeCustomFieldsInner } from './core-v3-employee-custom-fields-inner';

/**
 * 
 * @export
 * @interface CheckValidationListByEmployeesAndStatusResponseDataInnerEmployee
 */
export interface CheckValidationListByEmployeesAndStatusResponseDataInnerEmployee {
    /**
     * The description of the employee
     * @type {string}
     * @memberof CheckValidationListByEmployeesAndStatusResponseDataInnerEmployee
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof CheckValidationListByEmployeesAndStatusResponseDataInnerEmployee
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof CheckValidationListByEmployeesAndStatusResponseDataInnerEmployee
     */
    'firstName'?: string;
    /**
     * 
     * @type {string}
     * @memberof CheckValidationListByEmployeesAndStatusResponseDataInnerEmployee
     */
    'lastName'?: string;
    /**
     * 
     * @type {string}
     * @memberof CheckValidationListByEmployeesAndStatusResponseDataInnerEmployee
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof CheckValidationListByEmployeesAndStatusResponseDataInnerEmployee
     */
    'workStatus'?: CheckValidationListByEmployeesAndStatusResponseDataInnerEmployeeWorkStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof CheckValidationListByEmployeesAndStatusResponseDataInnerEmployee
     */
    'imageProfileURL'?: string;
    /**
     * 
     * @type {number}
     * @memberof CheckValidationListByEmployeesAndStatusResponseDataInnerEmployee
     */
    'code'?: number;
    /**
     * 
     * @type {number}
     * @memberof CheckValidationListByEmployeesAndStatusResponseDataInnerEmployee
     */
    'pin'?: number;
    /**
     * 
     * @type {string}
     * @memberof CheckValidationListByEmployeesAndStatusResponseDataInnerEmployee
     */
    'phone'?: string;
    /**
     * 
     * @type {CheckValidationListByEmployeesAndStatusResponseDataInnerEmployeeCompany}
     * @memberof CheckValidationListByEmployeesAndStatusResponseDataInnerEmployee
     */
    'company'?: CheckValidationListByEmployeesAndStatusResponseDataInnerEmployeeCompany;
    /**
     * 
     * @type {string}
     * @memberof CheckValidationListByEmployeesAndStatusResponseDataInnerEmployee
     */
    'gender'?: CheckValidationListByEmployeesAndStatusResponseDataInnerEmployeeGenderEnum;
    /**
     * The identifier of your internal employee contract
     * @type {string}
     * @memberof CheckValidationListByEmployeesAndStatusResponseDataInnerEmployee
     */
    'contractId'?: string;
    /**
     * The National Identity Document of the employee
     * @type {string}
     * @memberof CheckValidationListByEmployeesAndStatusResponseDataInnerEmployee
     */
    'nid'?: string;
    /**
     * 
     * @type {string}
     * @memberof CheckValidationListByEmployeesAndStatusResponseDataInnerEmployee
     */
    'identityNumberType'?: CheckValidationListByEmployeesAndStatusResponseDataInnerEmployeeIdentityNumberTypeEnum;
    /**
     * The Social Security Number of the employee
     * @type {string}
     * @memberof CheckValidationListByEmployeesAndStatusResponseDataInnerEmployee
     */
    'ssn'?: string;
    /**
     * The Price per hour of the employee
     * @type {number}
     * @memberof CheckValidationListByEmployeesAndStatusResponseDataInnerEmployee
     */
    'pricePerHour'?: number;
    /**
     * The Account Number of the employee
     * @type {string}
     * @memberof CheckValidationListByEmployeesAndStatusResponseDataInnerEmployee
     */
    'accountNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof CheckValidationListByEmployeesAndStatusResponseDataInnerEmployee
     */
    'dateOfBirth'?: string;
    /**
     * 
     * @type {Array<CoreV3EmployeeCustomFieldsInner>}
     * @memberof CheckValidationListByEmployeesAndStatusResponseDataInnerEmployee
     */
    'customFields'?: Array<CoreV3EmployeeCustomFieldsInner>;
    /**
     * 
     * @type {string}
     * @memberof CheckValidationListByEmployeesAndStatusResponseDataInnerEmployee
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof CheckValidationListByEmployeesAndStatusResponseDataInnerEmployee
     */
    'updatedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof CheckValidationListByEmployeesAndStatusResponseDataInnerEmployee
     */
    'status'?: CheckValidationListByEmployeesAndStatusResponseDataInnerEmployeeStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof CheckValidationListByEmployeesAndStatusResponseDataInnerEmployee
     */
    'children'?: number;
    /**
     * 
     * @type {number}
     * @memberof CheckValidationListByEmployeesAndStatusResponseDataInnerEmployee
     */
    'disability'?: number;
    /**
     * The Address of the employee
     * @type {string}
     * @memberof CheckValidationListByEmployeesAndStatusResponseDataInnerEmployee
     */
    'address'?: string;
    /**
     * The postal code of the employee
     * @type {string}
     * @memberof CheckValidationListByEmployeesAndStatusResponseDataInnerEmployee
     */
    'postalCode'?: string;
    /**
     * The city of the employee
     * @type {string}
     * @memberof CheckValidationListByEmployeesAndStatusResponseDataInnerEmployee
     */
    'city'?: string;
    /**
     * The province of the employee
     * @type {string}
     * @memberof CheckValidationListByEmployeesAndStatusResponseDataInnerEmployee
     */
    'province'?: string;
    /**
     * The country of the employee
     * @type {string}
     * @memberof CheckValidationListByEmployeesAndStatusResponseDataInnerEmployee
     */
    'country'?: string;
    /**
     * The nationality of the employee
     * @type {string}
     * @memberof CheckValidationListByEmployeesAndStatusResponseDataInnerEmployee
     */
    'nationality'?: string;
    /**
     * 
     * @type {string}
     * @memberof CheckValidationListByEmployeesAndStatusResponseDataInnerEmployee
     */
    'personalMail'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CheckValidationListByEmployeesAndStatusResponseDataInnerEmployee
     */
    'maritalStatus'?: string;
    /**
     * The emergency phone of the employee
     * @type {string}
     * @memberof CheckValidationListByEmployeesAndStatusResponseDataInnerEmployee
     */
    'emergencyPhone'?: string;
    /**
     * The salary range of the employee
     * @type {string}
     * @memberof CheckValidationListByEmployeesAndStatusResponseDataInnerEmployee
     */
    'salaryRange'?: string;
    /**
     * The study level of the employee
     * @type {string}
     * @memberof CheckValidationListByEmployeesAndStatusResponseDataInnerEmployee
     */
    'studyLevel'?: string;
    /**
     * The professional category code of the employee
     * @type {string}
     * @memberof CheckValidationListByEmployeesAndStatusResponseDataInnerEmployee
     */
    'professionalCategoryCode'?: string;
    /**
     * The professional category description of the employee
     * @type {string}
     * @memberof CheckValidationListByEmployeesAndStatusResponseDataInnerEmployee
     */
    'professionalCategoryDescription'?: string;
    /**
     * 
     * @type {string}
     * @memberof CheckValidationListByEmployeesAndStatusResponseDataInnerEmployee
     */
    'bic'?: string;
}

type CheckValidationListByEmployeesAndStatusResponseDataInnerEmployeeWorkStatusEnum = 'online' | 'offline' | 'paused' | 'remote'
type CheckValidationListByEmployeesAndStatusResponseDataInnerEmployeeGenderEnum = 'female' | 'male' | 'no_response'
type CheckValidationListByEmployeesAndStatusResponseDataInnerEmployeeIdentityNumberTypeEnum = 'dni' | 'nie' | 'rut' | 'other'
type CheckValidationListByEmployeesAndStatusResponseDataInnerEmployeeStatusEnum = 'active' | 'inactive'


