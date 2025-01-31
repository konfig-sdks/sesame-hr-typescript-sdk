/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { WorkEntriesCreateNewEntryResponseDataEmployee } from './work-entries-create-new-entry-response-data-employee';
import { WorkEntriesCreateNewEntryResponseDataWorkEntryIn } from './work-entries-create-new-entry-response-data-work-entry-in';
import { WorkEntriesCreateNewEntryResponseDataWorkEntryOut } from './work-entries-create-new-entry-response-data-work-entry-out';

/**
 * 
 * @export
 * @interface WorkEntriesCreateNewEntryResponseData
 */
export interface WorkEntriesCreateNewEntryResponseData {
    /**
     * 
     * @type {string}
     * @memberof WorkEntriesCreateNewEntryResponseData
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkEntriesCreateNewEntryResponseData
     */
    'workCheckTypeId'?: string;
    /**
     * 
     * @type {WorkEntriesCreateNewEntryResponseDataEmployee}
     * @memberof WorkEntriesCreateNewEntryResponseData
     */
    'employee'?: WorkEntriesCreateNewEntryResponseDataEmployee;
    /**
     * 
     * @type {string}
     * @memberof WorkEntriesCreateNewEntryResponseData
     */
    'workEntryType'?: string;
    /**
     * 
     * @type {WorkEntriesCreateNewEntryResponseDataWorkEntryIn}
     * @memberof WorkEntriesCreateNewEntryResponseData
     */
    'workEntryIn'?: WorkEntriesCreateNewEntryResponseDataWorkEntryIn;
    /**
     * 
     * @type {WorkEntriesCreateNewEntryResponseDataWorkEntryOut}
     * @memberof WorkEntriesCreateNewEntryResponseData
     */
    'workEntryOut'?: WorkEntriesCreateNewEntryResponseDataWorkEntryOut;
    /**
     * 
     * @type {number}
     * @memberof WorkEntriesCreateNewEntryResponseData
     */
    'workedSeconds'?: number;
    /**
     * 
     * @type {string}
     * @memberof WorkEntriesCreateNewEntryResponseData
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkEntriesCreateNewEntryResponseData
     */
    'updatedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkEntriesCreateNewEntryResponseData
     */
    'deletedAt'?: string;
}

