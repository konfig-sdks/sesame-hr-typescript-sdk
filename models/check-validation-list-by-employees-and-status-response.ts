/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CheckValidationListByEmployeesAndStatusResponseDataInner } from './check-validation-list-by-employees-and-status-response-data-inner';
import { CheckValidationListByEmployeesAndStatusResponseMeta } from './check-validation-list-by-employees-and-status-response-meta';

/**
 * 
 * @export
 * @interface CheckValidationListByEmployeesAndStatusResponse
 */
export interface CheckValidationListByEmployeesAndStatusResponse {
    /**
     * 
     * @type {Array<CheckValidationListByEmployeesAndStatusResponseDataInner>}
     * @memberof CheckValidationListByEmployeesAndStatusResponse
     */
    'data'?: Array<CheckValidationListByEmployeesAndStatusResponseDataInner>;
    /**
     * 
     * @type {CheckValidationListByEmployeesAndStatusResponseMeta}
     * @memberof CheckValidationListByEmployeesAndStatusResponse
     */
    'meta'?: CheckValidationListByEmployeesAndStatusResponseMeta;
}

