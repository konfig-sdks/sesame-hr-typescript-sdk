/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { StatisticsListWorkedHoursByWeekDayResponseDataInner } from './statistics-list-worked-hours-by-week-day-response-data-inner';
import { StatisticsListWorkedHoursByWeekDayResponseMeta } from './statistics-list-worked-hours-by-week-day-response-meta';

/**
 * 
 * @export
 * @interface StatisticsListWorkedHoursByWeekDayResponse
 */
export interface StatisticsListWorkedHoursByWeekDayResponse {
    /**
     * 
     * @type {Array<StatisticsListWorkedHoursByWeekDayResponseDataInner>}
     * @memberof StatisticsListWorkedHoursByWeekDayResponse
     */
    'data'?: Array<StatisticsListWorkedHoursByWeekDayResponseDataInner>;
    /**
     * 
     * @type {StatisticsListWorkedHoursByWeekDayResponseMeta}
     * @memberof StatisticsListWorkedHoursByWeekDayResponse
     */
    'meta'?: StatisticsListWorkedHoursByWeekDayResponseMeta;
}

