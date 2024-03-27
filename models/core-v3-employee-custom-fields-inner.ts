/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CoreV3EmployeeCustomFieldsInnerValue } from './core-v3-employee-custom-fields-inner-value';

/**
 * 
 * @export
 * @interface CoreV3EmployeeCustomFieldsInner
 */
export interface CoreV3EmployeeCustomFieldsInner {
    /**
     * 
     * @type {string}
     * @memberof CoreV3EmployeeCustomFieldsInner
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof CoreV3EmployeeCustomFieldsInner
     */
    'companyId'?: string;
    /**
     * 
     * @type {string}
     * @memberof CoreV3EmployeeCustomFieldsInner
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof CoreV3EmployeeCustomFieldsInner
     */
    'slug'?: string;
    /**
     * 
     * @type {string}
     * @memberof CoreV3EmployeeCustomFieldsInner
     */
    'type'?: string;
    /**
     * 
     * @type {CoreV3EmployeeCustomFieldsInnerValue}
     * @memberof CoreV3EmployeeCustomFieldsInner
     */
    'value'?: CoreV3EmployeeCustomFieldsInnerValue;
}

