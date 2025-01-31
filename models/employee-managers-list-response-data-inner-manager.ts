/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CoreV3EmployeeCustomFieldsInner } from './core-v3-employee-custom-fields-inner';
import { EmployeeManagersListResponseDataInnerManagerCompany } from './employee-managers-list-response-data-inner-manager-company';

/**
 * 
 * @export
 * @interface EmployeeManagersListResponseDataInnerManager
 */
export interface EmployeeManagersListResponseDataInnerManager {
    /**
     * The description of the employee
     * @type {string}
     * @memberof EmployeeManagersListResponseDataInnerManager
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeManagersListResponseDataInnerManager
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeManagersListResponseDataInnerManager
     */
    'firstName'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeManagersListResponseDataInnerManager
     */
    'lastName'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeManagersListResponseDataInnerManager
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeManagersListResponseDataInnerManager
     */
    'workStatus'?: EmployeeManagersListResponseDataInnerManagerWorkStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof EmployeeManagersListResponseDataInnerManager
     */
    'imageProfileURL'?: string;
    /**
     * 
     * @type {number}
     * @memberof EmployeeManagersListResponseDataInnerManager
     */
    'code'?: number;
    /**
     * 
     * @type {number}
     * @memberof EmployeeManagersListResponseDataInnerManager
     */
    'pin'?: number;
    /**
     * 
     * @type {string}
     * @memberof EmployeeManagersListResponseDataInnerManager
     */
    'phone'?: string;
    /**
     * 
     * @type {EmployeeManagersListResponseDataInnerManagerCompany}
     * @memberof EmployeeManagersListResponseDataInnerManager
     */
    'company'?: EmployeeManagersListResponseDataInnerManagerCompany;
    /**
     * 
     * @type {string}
     * @memberof EmployeeManagersListResponseDataInnerManager
     */
    'gender'?: EmployeeManagersListResponseDataInnerManagerGenderEnum;
    /**
     * The identifier of your internal employee contract
     * @type {string}
     * @memberof EmployeeManagersListResponseDataInnerManager
     */
    'contractId'?: string;
    /**
     * The National Identity Document of the employee
     * @type {string}
     * @memberof EmployeeManagersListResponseDataInnerManager
     */
    'nid'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeManagersListResponseDataInnerManager
     */
    'identityNumberType'?: EmployeeManagersListResponseDataInnerManagerIdentityNumberTypeEnum;
    /**
     * The Social Security Number of the employee
     * @type {string}
     * @memberof EmployeeManagersListResponseDataInnerManager
     */
    'ssn'?: string;
    /**
     * The Price per hour of the employee
     * @type {number}
     * @memberof EmployeeManagersListResponseDataInnerManager
     */
    'pricePerHour'?: number;
    /**
     * The Account Number of the employee
     * @type {string}
     * @memberof EmployeeManagersListResponseDataInnerManager
     */
    'accountNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeManagersListResponseDataInnerManager
     */
    'dateOfBirth'?: string;
    /**
     * 
     * @type {Array<CoreV3EmployeeCustomFieldsInner>}
     * @memberof EmployeeManagersListResponseDataInnerManager
     */
    'customFields'?: Array<CoreV3EmployeeCustomFieldsInner>;
    /**
     * 
     * @type {string}
     * @memberof EmployeeManagersListResponseDataInnerManager
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeManagersListResponseDataInnerManager
     */
    'updatedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeManagersListResponseDataInnerManager
     */
    'status'?: EmployeeManagersListResponseDataInnerManagerStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof EmployeeManagersListResponseDataInnerManager
     */
    'children'?: number;
    /**
     * 
     * @type {number}
     * @memberof EmployeeManagersListResponseDataInnerManager
     */
    'disability'?: number;
    /**
     * The Address of the employee
     * @type {string}
     * @memberof EmployeeManagersListResponseDataInnerManager
     */
    'address'?: string;
    /**
     * The postal code of the employee
     * @type {string}
     * @memberof EmployeeManagersListResponseDataInnerManager
     */
    'postalCode'?: string;
    /**
     * The city of the employee
     * @type {string}
     * @memberof EmployeeManagersListResponseDataInnerManager
     */
    'city'?: string;
    /**
     * The province of the employee
     * @type {string}
     * @memberof EmployeeManagersListResponseDataInnerManager
     */
    'province'?: string;
    /**
     * The country of the employee
     * @type {string}
     * @memberof EmployeeManagersListResponseDataInnerManager
     */
    'country'?: string;
    /**
     * The nationality of the employee
     * @type {string}
     * @memberof EmployeeManagersListResponseDataInnerManager
     */
    'nationality'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeManagersListResponseDataInnerManager
     */
    'personalMail'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmployeeManagersListResponseDataInnerManager
     */
    'maritalStatus'?: string;
    /**
     * The emergency phone of the employee
     * @type {string}
     * @memberof EmployeeManagersListResponseDataInnerManager
     */
    'emergencyPhone'?: string;
    /**
     * The salary range of the employee
     * @type {string}
     * @memberof EmployeeManagersListResponseDataInnerManager
     */
    'salaryRange'?: string;
    /**
     * The study level of the employee
     * @type {string}
     * @memberof EmployeeManagersListResponseDataInnerManager
     */
    'studyLevel'?: string;
    /**
     * The professional category code of the employee
     * @type {string}
     * @memberof EmployeeManagersListResponseDataInnerManager
     */
    'professionalCategoryCode'?: string;
    /**
     * The professional category description of the employee
     * @type {string}
     * @memberof EmployeeManagersListResponseDataInnerManager
     */
    'professionalCategoryDescription'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeManagersListResponseDataInnerManager
     */
    'bic'?: string;
}

type EmployeeManagersListResponseDataInnerManagerWorkStatusEnum = 'online' | 'offline' | 'paused' | 'remote'
type EmployeeManagersListResponseDataInnerManagerGenderEnum = 'female' | 'male' | 'no_response'
type EmployeeManagersListResponseDataInnerManagerIdentityNumberTypeEnum = 'dni' | 'nie' | 'rut' | 'other'
type EmployeeManagersListResponseDataInnerManagerStatusEnum = 'active' | 'inactive'


