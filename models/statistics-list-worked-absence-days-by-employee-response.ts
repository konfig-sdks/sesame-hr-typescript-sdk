/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { StatisticsListWorkedAbsenceDaysByEmployeeResponseDataInner } from './statistics-list-worked-absence-days-by-employee-response-data-inner';
import { StatisticsListWorkedAbsenceDaysByEmployeeResponseMeta } from './statistics-list-worked-absence-days-by-employee-response-meta';

/**
 * 
 * @export
 * @interface StatisticsListWorkedAbsenceDaysByEmployeeResponse
 */
export interface StatisticsListWorkedAbsenceDaysByEmployeeResponse {
    /**
     * 
     * @type {Array<StatisticsListWorkedAbsenceDaysByEmployeeResponseDataInner>}
     * @memberof StatisticsListWorkedAbsenceDaysByEmployeeResponse
     */
    'data'?: Array<StatisticsListWorkedAbsenceDaysByEmployeeResponseDataInner>;
    /**
     * 
     * @type {StatisticsListWorkedAbsenceDaysByEmployeeResponseMeta}
     * @memberof StatisticsListWorkedAbsenceDaysByEmployeeResponse
     */
    'meta'?: StatisticsListWorkedAbsenceDaysByEmployeeResponseMeta;
}

