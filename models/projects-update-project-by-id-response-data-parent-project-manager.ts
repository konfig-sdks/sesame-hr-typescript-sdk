/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CoreV3EmployeeCustomFieldsInner } from './core-v3-employee-custom-fields-inner';
import { ProjectsUpdateProjectByIdResponseDataParentProjectManagerCompany } from './projects-update-project-by-id-response-data-parent-project-manager-company';

/**
 * 
 * @export
 * @interface ProjectsUpdateProjectByIdResponseDataParentProjectManager
 */
export interface ProjectsUpdateProjectByIdResponseDataParentProjectManager {
    /**
     * The description of the employee
     * @type {string}
     * @memberof ProjectsUpdateProjectByIdResponseDataParentProjectManager
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsUpdateProjectByIdResponseDataParentProjectManager
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsUpdateProjectByIdResponseDataParentProjectManager
     */
    'firstName'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsUpdateProjectByIdResponseDataParentProjectManager
     */
    'lastName'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsUpdateProjectByIdResponseDataParentProjectManager
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsUpdateProjectByIdResponseDataParentProjectManager
     */
    'workStatus'?: ProjectsUpdateProjectByIdResponseDataParentProjectManagerWorkStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof ProjectsUpdateProjectByIdResponseDataParentProjectManager
     */
    'imageProfileURL'?: string;
    /**
     * 
     * @type {number}
     * @memberof ProjectsUpdateProjectByIdResponseDataParentProjectManager
     */
    'code'?: number;
    /**
     * 
     * @type {number}
     * @memberof ProjectsUpdateProjectByIdResponseDataParentProjectManager
     */
    'pin'?: number;
    /**
     * 
     * @type {string}
     * @memberof ProjectsUpdateProjectByIdResponseDataParentProjectManager
     */
    'phone'?: string;
    /**
     * 
     * @type {ProjectsUpdateProjectByIdResponseDataParentProjectManagerCompany}
     * @memberof ProjectsUpdateProjectByIdResponseDataParentProjectManager
     */
    'company'?: ProjectsUpdateProjectByIdResponseDataParentProjectManagerCompany;
    /**
     * 
     * @type {string}
     * @memberof ProjectsUpdateProjectByIdResponseDataParentProjectManager
     */
    'gender'?: ProjectsUpdateProjectByIdResponseDataParentProjectManagerGenderEnum;
    /**
     * The identifier of your internal employee contract
     * @type {string}
     * @memberof ProjectsUpdateProjectByIdResponseDataParentProjectManager
     */
    'contractId'?: string;
    /**
     * The National Identity Document of the employee
     * @type {string}
     * @memberof ProjectsUpdateProjectByIdResponseDataParentProjectManager
     */
    'nid'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsUpdateProjectByIdResponseDataParentProjectManager
     */
    'identityNumberType'?: ProjectsUpdateProjectByIdResponseDataParentProjectManagerIdentityNumberTypeEnum;
    /**
     * The Social Security Number of the employee
     * @type {string}
     * @memberof ProjectsUpdateProjectByIdResponseDataParentProjectManager
     */
    'ssn'?: string;
    /**
     * The Price per hour of the employee
     * @type {number}
     * @memberof ProjectsUpdateProjectByIdResponseDataParentProjectManager
     */
    'pricePerHour'?: number;
    /**
     * The Account Number of the employee
     * @type {string}
     * @memberof ProjectsUpdateProjectByIdResponseDataParentProjectManager
     */
    'accountNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsUpdateProjectByIdResponseDataParentProjectManager
     */
    'dateOfBirth'?: string;
    /**
     * 
     * @type {Array<CoreV3EmployeeCustomFieldsInner>}
     * @memberof ProjectsUpdateProjectByIdResponseDataParentProjectManager
     */
    'customFields'?: Array<CoreV3EmployeeCustomFieldsInner>;
    /**
     * 
     * @type {string}
     * @memberof ProjectsUpdateProjectByIdResponseDataParentProjectManager
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsUpdateProjectByIdResponseDataParentProjectManager
     */
    'updatedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsUpdateProjectByIdResponseDataParentProjectManager
     */
    'status'?: ProjectsUpdateProjectByIdResponseDataParentProjectManagerStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof ProjectsUpdateProjectByIdResponseDataParentProjectManager
     */
    'children'?: number;
    /**
     * 
     * @type {number}
     * @memberof ProjectsUpdateProjectByIdResponseDataParentProjectManager
     */
    'disability'?: number;
    /**
     * The Address of the employee
     * @type {string}
     * @memberof ProjectsUpdateProjectByIdResponseDataParentProjectManager
     */
    'address'?: string;
    /**
     * The postal code of the employee
     * @type {string}
     * @memberof ProjectsUpdateProjectByIdResponseDataParentProjectManager
     */
    'postalCode'?: string;
    /**
     * The city of the employee
     * @type {string}
     * @memberof ProjectsUpdateProjectByIdResponseDataParentProjectManager
     */
    'city'?: string;
    /**
     * The province of the employee
     * @type {string}
     * @memberof ProjectsUpdateProjectByIdResponseDataParentProjectManager
     */
    'province'?: string;
    /**
     * The country of the employee
     * @type {string}
     * @memberof ProjectsUpdateProjectByIdResponseDataParentProjectManager
     */
    'country'?: string;
    /**
     * The nationality of the employee
     * @type {string}
     * @memberof ProjectsUpdateProjectByIdResponseDataParentProjectManager
     */
    'nationality'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsUpdateProjectByIdResponseDataParentProjectManager
     */
    'personalMail'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ProjectsUpdateProjectByIdResponseDataParentProjectManager
     */
    'maritalStatus'?: string;
    /**
     * The emergency phone of the employee
     * @type {string}
     * @memberof ProjectsUpdateProjectByIdResponseDataParentProjectManager
     */
    'emergencyPhone'?: string;
    /**
     * The salary range of the employee
     * @type {string}
     * @memberof ProjectsUpdateProjectByIdResponseDataParentProjectManager
     */
    'salaryRange'?: string;
    /**
     * The study level of the employee
     * @type {string}
     * @memberof ProjectsUpdateProjectByIdResponseDataParentProjectManager
     */
    'studyLevel'?: string;
    /**
     * The professional category code of the employee
     * @type {string}
     * @memberof ProjectsUpdateProjectByIdResponseDataParentProjectManager
     */
    'professionalCategoryCode'?: string;
    /**
     * The professional category description of the employee
     * @type {string}
     * @memberof ProjectsUpdateProjectByIdResponseDataParentProjectManager
     */
    'professionalCategoryDescription'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsUpdateProjectByIdResponseDataParentProjectManager
     */
    'bic'?: string;
}

type ProjectsUpdateProjectByIdResponseDataParentProjectManagerWorkStatusEnum = 'online' | 'offline' | 'paused' | 'remote'
type ProjectsUpdateProjectByIdResponseDataParentProjectManagerGenderEnum = 'female' | 'male' | 'no_response'
type ProjectsUpdateProjectByIdResponseDataParentProjectManagerIdentityNumberTypeEnum = 'dni' | 'nie' | 'rut' | 'other'
type ProjectsUpdateProjectByIdResponseDataParentProjectManagerStatusEnum = 'active' | 'inactive'

