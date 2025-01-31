/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EmployeesCreateNewEmployeeRequestCustomFieldsInner } from './employees-create-new-employee-request-custom-fields-inner';

/**
 * 
 * @export
 * @interface EmployeesCreateNewEmployeeRequest
 */
export interface EmployeesCreateNewEmployeeRequest {
    /**
     * 
     * @type {string}
     * @memberof EmployeesCreateNewEmployeeRequest
     */
    'description'?: string;
    /**
     * The identifier of the company where the employee will belong to
     * @type {string}
     * @memberof EmployeesCreateNewEmployeeRequest
     */
    'companyId': string;
    /**
     * The first name of the employee
     * @type {string}
     * @memberof EmployeesCreateNewEmployeeRequest
     */
    'firstName': string;
    /**
     * The last name of the employee
     * @type {string}
     * @memberof EmployeesCreateNewEmployeeRequest
     */
    'lastName': string;
    /**
     * If true, an invitation email will be send to the email from the email field
     * @type {boolean}
     * @memberof EmployeesCreateNewEmployeeRequest
     */
    'invitation': boolean;
    /**
     * default: active
     * @type {string}
     * @memberof EmployeesCreateNewEmployeeRequest
     */
    'status': EmployeesCreateNewEmployeeRequestStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof EmployeesCreateNewEmployeeRequest
     */
    'gender'?: EmployeesCreateNewEmployeeRequestGenderEnum;
    /**
     * The email for the employee access and notifications (required if invitation is true)
     * @type {string}
     * @memberof EmployeesCreateNewEmployeeRequest
     */
    'email'?: string;
    /**
     * The identifier of your internal employee contract
     * @type {string}
     * @memberof EmployeesCreateNewEmployeeRequest
     */
    'contractId'?: string;
    /**
     * The code of the employee
     * @type {number}
     * @memberof EmployeesCreateNewEmployeeRequest
     */
    'code'?: number;
    /**
     * The pin of the employee
     * @type {number}
     * @memberof EmployeesCreateNewEmployeeRequest
     */
    'pin'?: number;
    /**
     * The National Identity Document of the employee
     * @type {string}
     * @memberof EmployeesCreateNewEmployeeRequest
     */
    'nid'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeesCreateNewEmployeeRequest
     */
    'identityNumberType'?: EmployeesCreateNewEmployeeRequestIdentityNumberTypeEnum;
    /**
     * The Social Security Number of the employee
     * @type {string}
     * @memberof EmployeesCreateNewEmployeeRequest
     */
    'ssn'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeesCreateNewEmployeeRequest
     */
    'phone'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeesCreateNewEmployeeRequest
     */
    'dateOfBirth'?: string;
    /**
     * Custom Fields to fill
     * @type {Array<EmployeesCreateNewEmployeeRequestCustomFieldsInner>}
     * @memberof EmployeesCreateNewEmployeeRequest
     */
    'customFields'?: Array<EmployeesCreateNewEmployeeRequestCustomFieldsInner>;
    /**
     * 
     * @type {string}
     * @memberof EmployeesCreateNewEmployeeRequest
     */
    'nationality'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeesCreateNewEmployeeRequest
     */
    'maritalStatus'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeesCreateNewEmployeeRequest
     */
    'address'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeesCreateNewEmployeeRequest
     */
    'postalCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeesCreateNewEmployeeRequest
     */
    'emergencyPhone'?: string;
    /**
     * 
     * @type {number}
     * @memberof EmployeesCreateNewEmployeeRequest
     */
    'childrenCount'?: number;
    /**
     * 
     * @type {number}
     * @memberof EmployeesCreateNewEmployeeRequest
     */
    'disability'?: number;
    /**
     * 
     * @type {string}
     * @memberof EmployeesCreateNewEmployeeRequest
     */
    'personalEmail'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeesCreateNewEmployeeRequest
     */
    'city'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeesCreateNewEmployeeRequest
     */
    'province'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeesCreateNewEmployeeRequest
     */
    'country'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeesCreateNewEmployeeRequest
     */
    'salaryRange'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeesCreateNewEmployeeRequest
     */
    'studyLevel'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeesCreateNewEmployeeRequest
     */
    'professionalCategoryCode'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeesCreateNewEmployeeRequest
     */
    'professionalCategoryDescription'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeesCreateNewEmployeeRequest
     */
    'bic'?: string;
}

type EmployeesCreateNewEmployeeRequestStatusEnum = 'active' | 'inactive'
type EmployeesCreateNewEmployeeRequestGenderEnum = 'female' | 'male' | 'no_response'
type EmployeesCreateNewEmployeeRequestIdentityNumberTypeEnum = 'dni' | 'nie' | 'rut' | 'other'


