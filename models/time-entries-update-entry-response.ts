/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TimeEntriesUpdateEntryResponseData } from './time-entries-update-entry-response-data';
import { TimeEntriesUpdateEntryResponseMeta } from './time-entries-update-entry-response-meta';

/**
 * 
 * @export
 * @interface TimeEntriesUpdateEntryResponse
 */
export interface TimeEntriesUpdateEntryResponse {
    /**
     * 
     * @type {TimeEntriesUpdateEntryResponseData}
     * @memberof TimeEntriesUpdateEntryResponse
     */
    'data'?: TimeEntriesUpdateEntryResponseData;
    /**
     * 
     * @type {TimeEntriesUpdateEntryResponseMeta}
     * @memberof TimeEntriesUpdateEntryResponse
     */
    'meta'?: TimeEntriesUpdateEntryResponseMeta;
}

