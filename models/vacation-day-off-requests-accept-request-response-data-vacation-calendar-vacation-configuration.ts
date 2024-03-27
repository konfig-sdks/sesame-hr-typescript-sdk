/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { VacationConfigurationsListConfigurationsResponseDataInnerNotAllowedDateRangesInner } from './vacation-configurations-list-configurations-response-data-inner-not-allowed-date-ranges-inner';
import { VacationDayOffRequestsAcceptRequestResponseDataVacationCalendarVacationConfigurationCompany } from './vacation-day-off-requests-accept-request-response-data-vacation-calendar-vacation-configuration-company';

/**
 * 
 * @export
 * @interface VacationDayOffRequestsAcceptRequestResponseDataVacationCalendarVacationConfiguration
 */
export interface VacationDayOffRequestsAcceptRequestResponseDataVacationCalendarVacationConfiguration {
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsAcceptRequestResponseDataVacationCalendarVacationConfiguration
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsAcceptRequestResponseDataVacationCalendarVacationConfiguration
     */
    'name'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof VacationDayOffRequestsAcceptRequestResponseDataVacationCalendarVacationConfiguration
     */
    'employeeRequestEnabled'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof VacationDayOffRequestsAcceptRequestResponseDataVacationCalendarVacationConfiguration
     */
    'needsValidation'?: boolean;
    /**
     * 
     * @type {VacationDayOffRequestsAcceptRequestResponseDataVacationCalendarVacationConfigurationCompany}
     * @memberof VacationDayOffRequestsAcceptRequestResponseDataVacationCalendarVacationConfiguration
     */
    'company'?: VacationDayOffRequestsAcceptRequestResponseDataVacationCalendarVacationConfigurationCompany;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsAcceptRequestResponseDataVacationCalendarVacationConfiguration
     */
    'dayType'?: VacationDayOffRequestsAcceptRequestResponseDataVacationCalendarVacationConfigurationDayTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof VacationDayOffRequestsAcceptRequestResponseDataVacationCalendarVacationConfiguration
     */
    'maxDaysOff'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof VacationDayOffRequestsAcceptRequestResponseDataVacationCalendarVacationConfiguration
     */
    'isDefault'?: boolean;
    /**
     * 
     * @type {Array<VacationConfigurationsListConfigurationsResponseDataInnerNotAllowedDateRangesInner>}
     * @memberof VacationDayOffRequestsAcceptRequestResponseDataVacationCalendarVacationConfiguration
     */
    'notAllowedDateRanges'?: Array<VacationConfigurationsListConfigurationsResponseDataInnerNotAllowedDateRangesInner>;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsAcceptRequestResponseDataVacationCalendarVacationConfiguration
     */
    'creationDateNextYear'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsAcceptRequestResponseDataVacationCalendarVacationConfiguration
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsAcceptRequestResponseDataVacationCalendarVacationConfiguration
     */
    'updatedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationDayOffRequestsAcceptRequestResponseDataVacationCalendarVacationConfiguration
     */
    'deletedAt'?: string | null;
}

type VacationDayOffRequestsAcceptRequestResponseDataVacationCalendarVacationConfigurationDayTypeEnum = 'business_day' | 'calendar_day'


