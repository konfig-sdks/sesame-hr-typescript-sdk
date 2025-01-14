/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { VacationCalendarsUpdateCalendarResponseDataVacationConfigurationCompany } from './vacation-calendars-update-calendar-response-data-vacation-configuration-company';
import { VacationConfigurationsListConfigurationsResponseDataInnerNotAllowedDateRangesInner } from './vacation-configurations-list-configurations-response-data-inner-not-allowed-date-ranges-inner';

/**
 * 
 * @export
 * @interface VacationCalendarsUpdateCalendarResponseDataVacationConfiguration
 */
export interface VacationCalendarsUpdateCalendarResponseDataVacationConfiguration {
    /**
     * 
     * @type {string}
     * @memberof VacationCalendarsUpdateCalendarResponseDataVacationConfiguration
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationCalendarsUpdateCalendarResponseDataVacationConfiguration
     */
    'name'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof VacationCalendarsUpdateCalendarResponseDataVacationConfiguration
     */
    'employeeRequestEnabled'?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof VacationCalendarsUpdateCalendarResponseDataVacationConfiguration
     */
    'needsValidation'?: boolean;
    /**
     * 
     * @type {VacationCalendarsUpdateCalendarResponseDataVacationConfigurationCompany}
     * @memberof VacationCalendarsUpdateCalendarResponseDataVacationConfiguration
     */
    'company'?: VacationCalendarsUpdateCalendarResponseDataVacationConfigurationCompany;
    /**
     * 
     * @type {string}
     * @memberof VacationCalendarsUpdateCalendarResponseDataVacationConfiguration
     */
    'dayType'?: VacationCalendarsUpdateCalendarResponseDataVacationConfigurationDayTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof VacationCalendarsUpdateCalendarResponseDataVacationConfiguration
     */
    'maxDaysOff'?: number;
    /**
     * 
     * @type {boolean}
     * @memberof VacationCalendarsUpdateCalendarResponseDataVacationConfiguration
     */
    'isDefault'?: boolean;
    /**
     * 
     * @type {Array<VacationConfigurationsListConfigurationsResponseDataInnerNotAllowedDateRangesInner>}
     * @memberof VacationCalendarsUpdateCalendarResponseDataVacationConfiguration
     */
    'notAllowedDateRanges'?: Array<VacationConfigurationsListConfigurationsResponseDataInnerNotAllowedDateRangesInner>;
    /**
     * 
     * @type {string}
     * @memberof VacationCalendarsUpdateCalendarResponseDataVacationConfiguration
     */
    'creationDateNextYear'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationCalendarsUpdateCalendarResponseDataVacationConfiguration
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationCalendarsUpdateCalendarResponseDataVacationConfiguration
     */
    'updatedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof VacationCalendarsUpdateCalendarResponseDataVacationConfiguration
     */
    'deletedAt'?: string | null;
}

type VacationCalendarsUpdateCalendarResponseDataVacationConfigurationDayTypeEnum = 'business_day' | 'calendar_day'


