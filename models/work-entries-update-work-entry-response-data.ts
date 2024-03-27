/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { WorkEntriesUpdateWorkEntryResponseDataEmployee } from './work-entries-update-work-entry-response-data-employee';
import { WorkEntriesUpdateWorkEntryResponseDataWorkEntryIn } from './work-entries-update-work-entry-response-data-work-entry-in';
import { WorkEntriesUpdateWorkEntryResponseDataWorkEntryOut } from './work-entries-update-work-entry-response-data-work-entry-out';

/**
 * 
 * @export
 * @interface WorkEntriesUpdateWorkEntryResponseData
 */
export interface WorkEntriesUpdateWorkEntryResponseData {
    /**
     * 
     * @type {string}
     * @memberof WorkEntriesUpdateWorkEntryResponseData
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkEntriesUpdateWorkEntryResponseData
     */
    'workCheckTypeId'?: string;
    /**
     * 
     * @type {WorkEntriesUpdateWorkEntryResponseDataEmployee}
     * @memberof WorkEntriesUpdateWorkEntryResponseData
     */
    'employee'?: WorkEntriesUpdateWorkEntryResponseDataEmployee;
    /**
     * 
     * @type {string}
     * @memberof WorkEntriesUpdateWorkEntryResponseData
     */
    'workEntryType'?: string;
    /**
     * 
     * @type {WorkEntriesUpdateWorkEntryResponseDataWorkEntryIn}
     * @memberof WorkEntriesUpdateWorkEntryResponseData
     */
    'workEntryIn'?: WorkEntriesUpdateWorkEntryResponseDataWorkEntryIn;
    /**
     * 
     * @type {WorkEntriesUpdateWorkEntryResponseDataWorkEntryOut}
     * @memberof WorkEntriesUpdateWorkEntryResponseData
     */
    'workEntryOut'?: WorkEntriesUpdateWorkEntryResponseDataWorkEntryOut;
    /**
     * 
     * @type {number}
     * @memberof WorkEntriesUpdateWorkEntryResponseData
     */
    'workedSeconds'?: number;
    /**
     * 
     * @type {string}
     * @memberof WorkEntriesUpdateWorkEntryResponseData
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkEntriesUpdateWorkEntryResponseData
     */
    'updatedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkEntriesUpdateWorkEntryResponseData
     */
    'deletedAt'?: string;
}

