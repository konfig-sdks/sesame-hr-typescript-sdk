/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TimeEntriesStartEntryResponseDataEmployee } from './time-entries-start-entry-response-data-employee';
import { TimeEntriesStartEntryResponseDataTimeEntryIn } from './time-entries-start-entry-response-data-time-entry-in';

/**
 * 
 * @export
 * @interface TimeEntriesStartEntryResponseData
 */
export interface TimeEntriesStartEntryResponseData {
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesStartEntryResponseData
     */
    'id'?: string;
    /**
     * 
     * @type {TimeEntriesStartEntryResponseDataEmployee}
     * @memberof TimeEntriesStartEntryResponseData
     */
    'employee'?: TimeEntriesStartEntryResponseDataEmployee;
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesStartEntryResponseData
     */
    'projectId'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof TimeEntriesStartEntryResponseData
     */
    'tagIds'?: Array<string>;
    /**
     * 
     * @type {TimeEntriesStartEntryResponseDataTimeEntryIn}
     * @memberof TimeEntriesStartEntryResponseData
     */
    'timeEntryIn'?: TimeEntriesStartEntryResponseDataTimeEntryIn;
    /**
     * 
     * @type {object}
     * @memberof TimeEntriesStartEntryResponseData
     */
    'timeEntryOut'?: object;
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesStartEntryResponseData
     */
    'comment'?: string;
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesStartEntryResponseData
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesStartEntryResponseData
     */
    'updatedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof TimeEntriesStartEntryResponseData
     */
    'deletedAt'?: string | null;
}
