/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee } from './employee-office-assignations-list-assignations-response-data-inner-employee';
import { OfficesGetAllResponseDataInner } from './offices-get-all-response-data-inner';

/**
 * 
 * @export
 * @interface EmployeeOfficeAssignationsListAssignationsResponseDataInner
 */
export interface EmployeeOfficeAssignationsListAssignationsResponseDataInner {
    /**
     * 
     * @type {string}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInner
     */
    'id'?: string;
    /**
     * 
     * @type {EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInner
     */
    'employee'?: EmployeeOfficeAssignationsListAssignationsResponseDataInnerEmployee;
    /**
     * 
     * @type {OfficesGetAllResponseDataInner}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInner
     */
    'office'?: OfficesGetAllResponseDataInner;
    /**
     * 
     * @type {string}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInner
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmployeeOfficeAssignationsListAssignationsResponseDataInner
     */
    'updatedAt'?: string;
}

