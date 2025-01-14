/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CustomersCreateNewCustomerResponseData } from './customers-create-new-customer-response-data';
import { CustomersCreateNewCustomerResponseMeta } from './customers-create-new-customer-response-meta';

/**
 * 
 * @export
 * @interface CustomersCreateNewCustomerResponse
 */
export interface CustomersCreateNewCustomerResponse {
    /**
     * 
     * @type {CustomersCreateNewCustomerResponseData}
     * @memberof CustomersCreateNewCustomerResponse
     */
    'data'?: CustomersCreateNewCustomerResponseData;
    /**
     * 
     * @type {CustomersCreateNewCustomerResponseMeta}
     * @memberof CustomersCreateNewCustomerResponse
     */
    'meta'?: CustomersCreateNewCustomerResponseMeta;
}

