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
 * @interface TimeEntriesUpdateEntryResponseDataTimeEntryIn
 */
export interface TimeEntriesUpdateEntryResponseDataTimeEntryIn {
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesUpdateEntryResponseDataTimeEntryIn
     */
    'date'?: string;
    /**
     * 
     * @type {OfficesGetAllResponseDataInnerCoordinates}
     * @memberof TimeEntriesUpdateEntryResponseDataTimeEntryIn
     */
    'coordinates'?: OfficesGetAllResponseDataInnerCoordinates;
}

