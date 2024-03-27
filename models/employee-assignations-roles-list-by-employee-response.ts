/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EmployeeAssignationsRolesListByEmployeeResponseDataInner } from './employee-assignations-roles-list-by-employee-response-data-inner';
import { EmployeeAssignationsRolesListByEmployeeResponseMeta } from './employee-assignations-roles-list-by-employee-response-meta';

/**
 * 
 * @export
 * @interface EmployeeAssignationsRolesListByEmployeeResponse
 */
export interface EmployeeAssignationsRolesListByEmployeeResponse {
    /**
     * 
     * @type {Array<EmployeeAssignationsRolesListByEmployeeResponseDataInner>}
     * @memberof EmployeeAssignationsRolesListByEmployeeResponse
     */
    'data'?: Array<EmployeeAssignationsRolesListByEmployeeResponseDataInner>;
    /**
     * 
     * @type {EmployeeAssignationsRolesListByEmployeeResponseMeta}
     * @memberof EmployeeAssignationsRolesListByEmployeeResponse
     */
    'meta'?: EmployeeAssignationsRolesListByEmployeeResponseMeta;
}

