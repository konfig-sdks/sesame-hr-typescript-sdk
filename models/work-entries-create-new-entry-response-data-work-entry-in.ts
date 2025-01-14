/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { OfficesGetAllResponseDataInnerCoordinates } from './offices-get-all-response-data-inner-coordinates';

/**
 * 
 * @export
 * @interface WorkEntriesCreateNewEntryResponseDataWorkEntryIn
 */
export interface WorkEntriesCreateNewEntryResponseDataWorkEntryIn {
    /**
     * 
     * @type {string}
     * @memberof WorkEntriesCreateNewEntryResponseDataWorkEntryIn
     */
    'origin'?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkEntriesCreateNewEntryResponseDataWorkEntryIn
     */
    'date'?: string;
    /**
     * 
     * @type {OfficesGetAllResponseDataInnerCoordinates}
     * @memberof WorkEntriesCreateNewEntryResponseDataWorkEntryIn
     */
    'coordinates'?: OfficesGetAllResponseDataInnerCoordinates;
    /**
     * 
     * @type {string}
     * @memberof WorkEntriesCreateNewEntryResponseDataWorkEntryIn
     */
    'officeId'?: string;
}

