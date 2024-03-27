/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { VacationConfigurationsListConfigurationsResponseDataInnerNotAllowedDateRangesInner } from './vacation-configurations-list-configurations-response-data-inner-not-allowed-date-ranges-inner';
import { VacationDayOffRequestsCreateRequestResponseDataVacationCalendarVacationConfigurationCompany } from './vacation-day-off-requests-create-request-response-data-vacation-calendar-vacation-configuration-company';

/**
 * 
 * @export
 * @interface VacationDayOffRequestsCreateRequestResponseDataVacationCalendarVacationConfiguration
 */
export interface VacationDayOffRequestsCreateRequestResponseDataVacationCalendarVacationConfiguration {
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataVacationCalendarVacationConfiguration
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataVacationCalendarVacationConfiguration
     */
    'name'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataVacationCalendarVacationConfiguration
     */
    'employeeRequestEnabled'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataVacationCalendarVacationConfiguration
     */
    'needsValidation'?: boolean;
    /**
     * 
     * @type {VacationDayOffRequestsCreateRequestResponseDataVacationCalendarVacationConfigurationCompany}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataVacationCalendarVacationConfiguration
     */
    'company'?: VacationDayOffRequestsCreateRequestResponseDataVacationCalendarVacationConfigurationCompany;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataVacationCalendarVacationConfiguration
     */
    'dayType'?: VacationDayOffRequestsCreateRequestResponseDataVacationCalendarVacationConfigurationDayTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataVacationCalendarVacationConfiguration
     */
    'maxDaysOff'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataVacationCalendarVacationConfiguration
     */
    'isDefault'?: boolean;
    /**
     * 
     * @type {Array<VacationConfigurationsListConfigurationsResponseDataInnerNotAllowedDateRangesInner>}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataVacationCalendarVacationConfiguration
     */
    'notAllowedDateRanges'?: Array<VacationConfigurationsListConfigurationsResponseDataInnerNotAllowedDateRangesInner>;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataVacationCalendarVacationConfiguration
     */
    'creationDateNextYear'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataVacationCalendarVacationConfiguration
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataVacationCalendarVacationConfiguration
     */
    'updatedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsCreateRequestResponseDataVacationCalendarVacationConfiguration
     */
    'deletedAt'?: string | null;
}

type VacationDayOffRequestsCreateRequestResponseDataVacationCalendarVacationConfigurationDayTypeEnum = 'business_day' | 'calendar_day'

