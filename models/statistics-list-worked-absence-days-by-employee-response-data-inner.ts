/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { StatisticsListWorkedAbsenceDaysByEmployeeResponseDataInnerDaysInner } from './statistics-list-worked-absence-days-by-employee-response-data-inner-days-inner';

/**
 * 
 * @export
 * @interface StatisticsListWorkedAbsenceDaysByEmployeeResponseDataInner
 */
export interface StatisticsListWorkedAbsenceDaysByEmployeeResponseDataInner {
    /**
     * 
     * @type {string}
     * @memberof StatisticsListWorkedAbsenceDaysByEmployeeResponseDataInner
     */
    'employeeId'?: string;
    /**
     * 
     * @type {Array<StatisticsListWorkedAbsenceDaysByEmployeeResponseDataInnerDaysInner>}
     * @memberof StatisticsListWorkedAbsenceDaysByEmployeeResponseDataInner
     */
    'days'?: Array<StatisticsListWorkedAbsenceDaysByEmployeeResponseDataInnerDaysInner>;
}

