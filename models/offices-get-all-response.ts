/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OfficesGetAllResponseDataInner } from './offices-get-all-response-data-inner';
import { OfficesGetAllResponseMeta } from './offices-get-all-response-meta';

/**
 * 
 * @export
 * @interface OfficesGetAllResponse
 */
export interface OfficesGetAllResponse {
    /**
     * 
     * @type {Array<OfficesGetAllResponseDataInner>}
     * @memberof OfficesGetAllResponse
     */
    'data'?: Array<OfficesGetAllResponseDataInner>;
    /**
     * 
     * @type {OfficesGetAllResponseMeta}
     * @memberof OfficesGetAllResponse
     */
    'meta'?: OfficesGetAllResponseMeta;
}

