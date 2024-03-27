/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EmployeeManagersAssignResponseData } from './employee-managers-assign-response-data';
import { EmployeeManagersAssignResponseMeta } from './employee-managers-assign-response-meta';

/**
 * 
 * @export
 * @interface EmployeeManagersAssignResponse
 */
export interface EmployeeManagersAssignResponse {
    /**
     * 
     * @type {EmployeeManagersAssignResponseData}
     * @memberof EmployeeManagersAssignResponse
     */
    'data'?: EmployeeManagersAssignResponseData;
    /**
     * 
     * @type {EmployeeManagersAssignResponseMeta}
     * @memberof EmployeeManagersAssignResponse
     */
    'meta'?: EmployeeManagersAssignResponseMeta;
}
