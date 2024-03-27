/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EmployeesUpdateByIdResponseData } from './employees-update-by-id-response-data';
import { EmployeesUpdateByIdResponseMeta } from './employees-update-by-id-response-meta';

/**
 * 
 * @export
 * @interface EmployeesUpdateByIdResponse
 */
export interface EmployeesUpdateByIdResponse {
    /**
     * 
     * @type {EmployeesUpdateByIdResponseData}
     * @memberof EmployeesUpdateByIdResponse
     */
    'data'?: EmployeesUpdateByIdResponseData;
    /**
     * 
     * @type {EmployeesUpdateByIdResponseMeta}
     * @memberof EmployeesUpdateByIdResponse
     */
    'meta'?: EmployeesUpdateByIdResponseMeta;
}
