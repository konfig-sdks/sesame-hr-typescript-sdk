/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface ContractsUpdateContractRequest
 */
export interface ContractsUpdateContractRequest {
    /**
     * Start date of contract
     * @type {string}
     * @memberof ContractsUpdateContractRequest
     */
    'startAt': string;
    /**
     * end date of contract
     * @type {string}
     * @memberof ContractsUpdateContractRequest
     */
    'endAt'?: string;
    /**
     * Code of the contract
     * @type {string}
     * @memberof ContractsUpdateContractRequest
     */
    'code': string;
    /**
     * Comments
     * @type {string}
     * @memberof ContractsUpdateContractRequest
     */
    'comment'?: string;
}
