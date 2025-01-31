/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CoreV3EmployeeCustomFieldsInner } from './core-v3-employee-custom-fields-inner';
import { VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployeeCompany } from './vacation-day-off-requests-list-response-data-inner-vacation-calendar-employee-company';

/**
 * 
 * @export
 * @interface VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployee
 */
export interface VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployee {
    /**
     * The description of the employee
     * @type {string}
     * @memberof VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployee
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployee
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployee
     */
    'firstName'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployee
     */
    'lastName'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployee
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployee
     */
    'workStatus'?: VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployeeWorkStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployee
     */
    'imageProfileURL'?: string;
    /**
     * 
     * @type {number}
     * @memberof VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployee
     */
    'code'?: number;
    /**
     * 
     * @type {number}
     * @memberof VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployee
     */
    'pin'?: number;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployee
     */
    'phone'?: string;
    /**
     * 
     * @type {VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployeeCompany}
     * @memberof VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployee
     */
    'company'?: VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployeeCompany;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployee
     */
    'gender'?: VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployeeGenderEnum;
    /**
     * The identifier of your internal employee contract
     * @type {string}
     * @memberof VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployee
     */
    'contractId'?: string;
    /**
     * The National Identity Document of the employee
     * @type {string}
     * @memberof VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployee
     */
    'nid'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployee
     */
    'identityNumberType'?: VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployeeIdentityNumberTypeEnum;
    /**
     * The Social Security Number of the employee
     * @type {string}
     * @memberof VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployee
     */
    'ssn'?: string;
    /**
     * The Price per hour of the employee
     * @type {number}
     * @memberof VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployee
     */
    'pricePerHour'?: number;
    /**
     * The Account Number of the employee
     * @type {string}
     * @memberof VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployee
     */
    'accountNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployee
     */
    'dateOfBirth'?: string;
    /**
     * 
     * @type {Array<CoreV3EmployeeCustomFieldsInner>}
     * @memberof VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployee
     */
    'customFields'?: Array<CoreV3EmployeeCustomFieldsInner>;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployee
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployee
     */
    'updatedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployee
     */
    'status'?: VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployeeStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployee
     */
    'children'?: number;
    /**
     * 
     * @type {number}
     * @memberof VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployee
     */
    'disability'?: number;
    /**
     * The Address of the employee
     * @type {string}
     * @memberof VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployee
     */
    'address'?: string;
    /**
     * The postal code of the employee
     * @type {string}
     * @memberof VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployee
     */
    'postalCode'?: string;
    /**
     * The city of the employee
     * @type {string}
     * @memberof VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployee
     */
    'city'?: string;
    /**
     * The province of the employee
     * @type {string}
     * @memberof VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployee
     */
    'province'?: string;
    /**
     * The country of the employee
     * @type {string}
     * @memberof VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployee
     */
    'country'?: string;
    /**
     * The nationality of the employee
     * @type {string}
     * @memberof VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployee
     */
    'nationality'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployee
     */
    'personalMail'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployee
     */
    'maritalStatus'?: string;
    /**
     * The emergency phone of the employee
     * @type {string}
     * @memberof VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployee
     */
    'emergencyPhone'?: string;
    /**
     * The salary range of the employee
     * @type {string}
     * @memberof VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployee
     */
    'salaryRange'?: string;
    /**
     * The study level of the employee
     * @type {string}
     * @memberof VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployee
     */
    'studyLevel'?: string;
    /**
     * The professional category code of the employee
     * @type {string}
     * @memberof VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployee
     */
    'professionalCategoryCode'?: string;
    /**
     * The professional category description of the employee
     * @type {string}
     * @memberof VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployee
     */
    'professionalCategoryDescription'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployee
     */
    'bic'?: string;
}

type VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployeeWorkStatusEnum = 'online' | 'offline' | 'paused' | 'remote'
type VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployeeGenderEnum = 'female' | 'male' | 'no_response'
type VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployeeIdentityNumberTypeEnum = 'dni' | 'nie' | 'rut' | 'other'
type VacationDayOffRequestsListResponseDataInnerVacationCalendarEmployeeStatusEnum = 'active' | 'inactive'


