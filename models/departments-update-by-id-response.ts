/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DepartmentsUpdateByIdResponseMeta } from './departments-update-by-id-response-meta';
import { RolesGetAllResponseDataInner } from './roles-get-all-response-data-inner';

/**
 * 
 * @export
 * @interface DepartmentsUpdateByIdResponse
 */
export interface DepartmentsUpdateByIdResponse {
    /**
     * 
     * @type {RolesGetAllResponseDataInner}
     * @memberof DepartmentsUpdateByIdResponse
     */
    'data'?: RolesGetAllResponseDataInner;
    /**
     * 
     * @type {DepartmentsUpdateByIdResponseMeta}
     * @memberof DepartmentsUpdateByIdResponse
     */
    'meta'?: DepartmentsUpdateByIdResponseMeta;
}

