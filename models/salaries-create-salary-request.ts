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
 * @interface SalariesCreateSalaryRequest
 */
export interface SalariesCreateSalaryRequest {
    /**
     * The ID of the employee
     * @type {string}
     * @memberof SalariesCreateSalaryRequest
     */
    'employeeId': string;
    /**
     * Payment period of contract
     * @type {string}
     * @memberof SalariesCreateSalaryRequest
     */
    'payPeriod': SalariesCreateSalaryRequestPayPeriodEnum;
    /**
     * Currency of contract
     * @type {string}
     * @memberof SalariesCreateSalaryRequest
     */
    'currency': string;
    /**
     * Salary amount
     * @type {number}
     * @memberof SalariesCreateSalaryRequest
     */
    'grossSalary': number;
    /**
     * Number of payments
     * @type {number}
     * @memberof SalariesCreateSalaryRequest
     */
    'payments': number;
    /**
     * Contribution group id
     * @type {string}
     * @memberof SalariesCreateSalaryRequest
     */
    'contributionGroupId': string;
    /**
     * Salary start date
     * @type {string}
     * @memberof SalariesCreateSalaryRequest
     */
    'startDate': string;
    /**
     * Salary end date
     * @type {string}
     * @memberof SalariesCreateSalaryRequest
     */
    'endDate'?: string;
    /**
     * Comments
     * @type {string}
     * @memberof SalariesCreateSalaryRequest
     */
    'comments'?: string;
}

type SalariesCreateSalaryRequestPayPeriodEnum = 'daily' | 'weekly' | 'biweekly' | 'monthly' | 'yearly'

