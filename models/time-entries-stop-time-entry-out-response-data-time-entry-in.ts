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
 * @interface TimeEntriesStopTimeEntryOutResponseDataTimeEntryIn
 */
export interface TimeEntriesStopTimeEntryOutResponseDataTimeEntryIn {
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesStopTimeEntryOutResponseDataTimeEntryIn
     */
    'date'?: string;
    /**
     * 
     * @type {OfficesGetAllResponseDataInnerCoordinates}
     * @memberof TimeEntriesStopTimeEntryOutResponseDataTimeEntryIn
     */
    'coordinates'?: OfficesGetAllResponseDataInnerCoordinates;
}

