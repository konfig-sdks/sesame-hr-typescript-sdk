/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { WorkBreaksListResponseDataInner } from './work-breaks-list-response-data-inner';
import { WorkBreaksListResponseMeta } from './work-breaks-list-response-meta';

/**
 * 
 * @export
 * @interface WorkBreaksListResponse
 */
export interface WorkBreaksListResponse {
    /**
     * 
     * @type {Array<WorkBreaksListResponseDataInner>}
     * @memberof WorkBreaksListResponse
     */
    'data'?: Array<WorkBreaksListResponseDataInner>;
    /**
     * 
     * @type {WorkBreaksListResponseMeta}
     * @memberof WorkBreaksListResponse
     */
    'meta'?: WorkBreaksListResponseMeta;
}

