/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CoreV3EmployeeCustomFieldsInner } from './core-v3-employee-custom-fields-inner';
import { EmployeesListResponseDataInnerCompany } from './employees-list-response-data-inner-company';

/**
 * 
 * @export
 * @interface EmployeesListResponseDataInner
 */
export interface EmployeesListResponseDataInner {
    /**
     * The description of the employee
     * @type {string}
     * @memberof EmployeesListResponseDataInner
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeesListResponseDataInner
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeesListResponseDataInner
     */
    'firstName'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeesListResponseDataInner
     */
    'lastName'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeesListResponseDataInner
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeesListResponseDataInner
     */
    'workStatus'?: EmployeesListResponseDataInnerWorkStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof EmployeesListResponseDataInner
     */
    'imageProfileURL'?: string;
    /**
     * 
     * @type {number}
     * @memberof EmployeesListResponseDataInner
     */
    'code'?: number;
    /**
     * 
     * @type {number}
     * @memberof EmployeesListResponseDataInner
     */
    'pin'?: number;
    /**
     * 
     * @type {string}
     * @memberof EmployeesListResponseDataInner
     */
    'phone'?: string;
    /**
     * 
     * @type {EmployeesListResponseDataInnerCompany}
     * @memberof EmployeesListResponseDataInner
     */
    'company'?: EmployeesListResponseDataInnerCompany;
    /**
     * 
     * @type {string}
     * @memberof EmployeesListResponseDataInner
     */
    'gender'?: EmployeesListResponseDataInnerGenderEnum;
    /**
     * The identifier of your internal employee contract
     * @type {string}
     * @memberof EmployeesListResponseDataInner
     */
    'contractId'?: string;
    /**
     * The National Identity Document of the employee
     * @type {string}
     * @memberof EmployeesListResponseDataInner
     */
    'nid'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeesListResponseDataInner
     */
    'identityNumberType'?: EmployeesListResponseDataInnerIdentityNumberTypeEnum;
    /**
     * The Social Security Number of the employee
     * @type {string}
     * @memberof EmployeesListResponseDataInner
     */
    'ssn'?: string;
    /**
     * The Price per hour of the employee
     * @type {number}
     * @memberof EmployeesListResponseDataInner
     */
    'pricePerHour'?: number;
    /**
     * The Account Number of the employee
     * @type {string}
     * @memberof EmployeesListResponseDataInner
     */
    'accountNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeesListResponseDataInner
     */
    'dateOfBirth'?: string;
    /**
     * 
     * @type {Array<CoreV3EmployeeCustomFieldsInner>}
     * @memberof EmployeesListResponseDataInner
     */
    'customFields'?: Array<CoreV3EmployeeCustomFieldsInner>;
    /**
     * 
     * @type {string}
     * @memberof EmployeesListResponseDataInner
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeesListResponseDataInner
     */
    'updatedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeesListResponseDataInner
     */
    'status'?: EmployeesListResponseDataInnerStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof EmployeesListResponseDataInner
     */
    'children'?: number;
    /**
     * 
     * @type {number}
     * @memberof EmployeesListResponseDataInner
     */
    'disability'?: number;
    /**
     * The Address of the employee
     * @type {string}
     * @memberof EmployeesListResponseDataInner
     */
    'address'?: string;
    /**
     * The postal code of the employee
     * @type {string}
     * @memberof EmployeesListResponseDataInner
     */
    'postalCode'?: string;
    /**
     * The city of the employee
     * @type {string}
     * @memberof EmployeesListResponseDataInner
     */
    'city'?: string;
    /**
     * The province of the employee
     * @type {string}
     * @memberof EmployeesListResponseDataInner
     */
    'province'?: string;
    /**
     * The country of the employee
     * @type {string}
     * @memberof EmployeesListResponseDataInner
     */
    'country'?: string;
    /**
     * The nationality of the employee
     * @type {string}
     * @memberof EmployeesListResponseDataInner
     */
    'nationality'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeesListResponseDataInner
     */
    'personalMail'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmployeesListResponseDataInner
     */
    'maritalStatus'?: string;
    /**
     * The emergency phone of the employee
     * @type {string}
     * @memberof EmployeesListResponseDataInner
     */
    'emergencyPhone'?: string;
    /**
     * The salary range of the employee
     * @type {string}
     * @memberof EmployeesListResponseDataInner
     */
    'salaryRange'?: string;
    /**
     * The study level of the employee
     * @type {string}
     * @memberof EmployeesListResponseDataInner
     */
    'studyLevel'?: string;
    /**
     * The professional category code of the employee
     * @type {string}
     * @memberof EmployeesListResponseDataInner
     */
    'professionalCategoryCode'?: string;
    /**
     * The professional category description of the employee
     * @type {string}
     * @memberof EmployeesListResponseDataInner
     */
    'professionalCategoryDescription'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeesListResponseDataInner
     */
    'bic'?: string;
}

type EmployeesListResponseDataInnerWorkStatusEnum = 'online' | 'offline' | 'paused' | 'remote'
type EmployeesListResponseDataInnerGenderEnum = 'female' | 'male' | 'no_response'
type EmployeesListResponseDataInnerIdentityNumberTypeEnum = 'dni' | 'nie' | 'rut' | 'other'
type EmployeesListResponseDataInnerStatusEnum = 'active' | 'inactive'

