/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OfficesGetAllResponseDataInner } from './offices-get-all-response-data-inner';
import { OfficesUpdateByIdResponseMeta } from './offices-update-by-id-response-meta';

/**
 * 
 * @export
 * @interface OfficesUpdateByIdResponse
 */
export interface OfficesUpdateByIdResponse {
    /**
     * 
     * @type {OfficesGetAllResponseDataInner}
     * @memberof OfficesUpdateByIdResponse
     */
    'data'?: OfficesGetAllResponseDataInner;
    /**
     * 
     * @type {OfficesUpdateByIdResponseMeta}
     * @memberof OfficesUpdateByIdResponse
     */
    'meta'?: OfficesUpdateByIdResponseMeta;
}

