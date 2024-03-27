/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TimeEntriesCreateNewEntryRequestTimeEntryIn } from './time-entries-create-new-entry-request-time-entry-in';
import { TimeEntriesCreateNewEntryRequestTimeEntryOut } from './time-entries-create-new-entry-request-time-entry-out';

/**
 * 
 * @export
 * @interface TimeEntriesCreateNewEntryRequest
 */
export interface TimeEntriesCreateNewEntryRequest {
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesCreateNewEntryRequest
     */
    'employeeId': string;
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesCreateNewEntryRequest
     */
    'projectId'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof TimeEntriesCreateNewEntryRequest
     */
    'tagIds'?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesCreateNewEntryRequest
     */
    'comment'?: string;
    /**
     * 
     * @type {TimeEntriesCreateNewEntryRequestTimeEntryIn}
     * @memberof TimeEntriesCreateNewEntryRequest
     */
    'timeEntryIn': TimeEntriesCreateNewEntryRequestTimeEntryIn;
    /**
     * 
     * @type {TimeEntriesCreateNewEntryRequestTimeEntryOut}
     * @memberof TimeEntriesCreateNewEntryRequest
     */
    'timeEntryOut'?: TimeEntriesCreateNewEntryRequestTimeEntryOut;
}

