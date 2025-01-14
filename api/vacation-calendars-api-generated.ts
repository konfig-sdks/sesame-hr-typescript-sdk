/* tslint:disable */
/* eslint-disable */
/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { fromBuffer } from "file-type/browser"
const FormData = require("form-data")
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { VacationCalendarsCreateNewCalendarRequest } from '../models';
// @ts-ignore
import { VacationCalendarsCreateNewCalendarRequestDaysOffInner } from '../models';
// @ts-ignore
import { VacationCalendarsCreateNewCalendarResponse } from '../models';
// @ts-ignore
import { VacationCalendarsListCalendarsResponse } from '../models';
// @ts-ignore
import { VacationCalendarsUpdateCalendarRequest } from '../models';
// @ts-ignore
import { VacationCalendarsUpdateCalendarRequestDaysOffInner } from '../models';
// @ts-ignore
import { VacationCalendarsUpdateCalendarResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * VacationCalendarsApi - axios parameter creator
 * @export
 */
export const VacationCalendarsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create Vacation Calendar
         * @param {VacationCalendarsCreateNewCalendarRequest} [vacationCalendarsCreateNewCalendarRequest] Create a Vacation Calendar
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewCalendar: async (vacationCalendarsCreateNewCalendarRequest?: VacationCalendarsCreateNewCalendarRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/schedule/v1/vacation-calendars`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: vacationCalendarsCreateNewCalendarRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/schedule/v1/vacation-calendars',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(vacationCalendarsCreateNewCalendarRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary List Vacation Calendars
         * @param {string} [employeeId] Employee ID
         * @param {Array<number>} [yearIn] Year calendar
         * @param {number} [limit] Limit results
         * @param {number} [page] Request a specific page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCalendars: async (employeeId?: string, yearIn?: Array<number>, limit?: number, page?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/schedule/v1/vacation-calendars`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)
            if (employeeId !== undefined) {
                localVarQueryParameter['employeeId'] = employeeId;
            }

            if (yearIn) {
                localVarQueryParameter['year[in]'] = yearIn.join(COLLECTION_FORMATS.csv);
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/schedule/v1/vacation-calendars',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update Vacation Calendar
         * @param {string} id Calendar ID
         * @param {VacationCalendarsUpdateCalendarRequest} vacationCalendarsUpdateCalendarRequest Vacation Calendar object that needs to be updated
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCalendar: async (id: string, vacationCalendarsUpdateCalendarRequest: VacationCalendarsUpdateCalendarRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateCalendar', 'id', id)
            // verify required parameter 'vacationCalendarsUpdateCalendarRequest' is not null or undefined
            assertParamExists('updateCalendar', 'vacationCalendarsUpdateCalendarRequest', vacationCalendarsUpdateCalendarRequest)
            const localVarPath = `/schedule/v1/vacation-calendars/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: vacationCalendarsUpdateCalendarRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/schedule/v1/vacation-calendars/{id}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(vacationCalendarsUpdateCalendarRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * VacationCalendarsApi - functional programming interface
 * @export
 */
export const VacationCalendarsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = VacationCalendarsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create Vacation Calendar
         * @param {VacationCalendarsApiCreateNewCalendarRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewCalendar(requestParameters: VacationCalendarsApiCreateNewCalendarRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<VacationCalendarsCreateNewCalendarResponse>> {
            const vacationCalendarsCreateNewCalendarRequest: VacationCalendarsCreateNewCalendarRequest = {
                employeeId: requestParameters.employeeId,
                vacationConfigurationId: requestParameters.vacationConfigurationId,
                year: requestParameters.year,
                daysOff: requestParameters.daysOff
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewCalendar(vacationCalendarsCreateNewCalendarRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary List Vacation Calendars
         * @param {VacationCalendarsApiListCalendarsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listCalendars(requestParameters: VacationCalendarsApiListCalendarsRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<VacationCalendarsListCalendarsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listCalendars(requestParameters.employeeId, requestParameters.yearIn, requestParameters.limit, requestParameters.page, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update Vacation Calendar
         * @param {VacationCalendarsApiUpdateCalendarRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateCalendar(requestParameters: VacationCalendarsApiUpdateCalendarRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<VacationCalendarsUpdateCalendarResponse>> {
            const vacationCalendarsUpdateCalendarRequest: VacationCalendarsUpdateCalendarRequest = {
                daysOff: requestParameters.daysOff,
                maxDaysOff: requestParameters.maxDaysOff
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateCalendar(requestParameters.id, vacationCalendarsUpdateCalendarRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * VacationCalendarsApi - factory interface
 * @export
 */
export const VacationCalendarsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = VacationCalendarsApiFp(configuration)
    return {
        /**
         * 
         * @summary Create Vacation Calendar
         * @param {VacationCalendarsApiCreateNewCalendarRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewCalendar(requestParameters: VacationCalendarsApiCreateNewCalendarRequest, options?: AxiosRequestConfig): AxiosPromise<VacationCalendarsCreateNewCalendarResponse> {
            return localVarFp.createNewCalendar(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List Vacation Calendars
         * @param {VacationCalendarsApiListCalendarsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCalendars(requestParameters: VacationCalendarsApiListCalendarsRequest = {}, options?: AxiosRequestConfig): AxiosPromise<VacationCalendarsListCalendarsResponse> {
            return localVarFp.listCalendars(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update Vacation Calendar
         * @param {VacationCalendarsApiUpdateCalendarRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCalendar(requestParameters: VacationCalendarsApiUpdateCalendarRequest, options?: AxiosRequestConfig): AxiosPromise<VacationCalendarsUpdateCalendarResponse> {
            return localVarFp.updateCalendar(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createNewCalendar operation in VacationCalendarsApi.
 * @export
 * @interface VacationCalendarsApiCreateNewCalendarRequest
 */
export type VacationCalendarsApiCreateNewCalendarRequest = {
    
} & VacationCalendarsCreateNewCalendarRequest

/**
 * Request parameters for listCalendars operation in VacationCalendarsApi.
 * @export
 * @interface VacationCalendarsApiListCalendarsRequest
 */
export type VacationCalendarsApiListCalendarsRequest = {
    
    /**
    * Employee ID
    * @type {string}
    * @memberof VacationCalendarsApiListCalendars
    */
    readonly employeeId?: string
    
    /**
    * Year calendar
    * @type {Array<number>}
    * @memberof VacationCalendarsApiListCalendars
    */
    readonly yearIn?: Array<number>
    
    /**
    * Limit results
    * @type {number}
    * @memberof VacationCalendarsApiListCalendars
    */
    readonly limit?: number
    
    /**
    * Request a specific page
    * @type {number}
    * @memberof VacationCalendarsApiListCalendars
    */
    readonly page?: number
    
}

/**
 * Request parameters for updateCalendar operation in VacationCalendarsApi.
 * @export
 * @interface VacationCalendarsApiUpdateCalendarRequest
 */
export type VacationCalendarsApiUpdateCalendarRequest = {
    
    /**
    * Calendar ID
    * @type {string}
    * @memberof VacationCalendarsApiUpdateCalendar
    */
    readonly id: string
    
} & VacationCalendarsUpdateCalendarRequest

/**
 * VacationCalendarsApiGenerated - object-oriented interface
 * @export
 * @class VacationCalendarsApiGenerated
 * @extends {BaseAPI}
 */
export class VacationCalendarsApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Create Vacation Calendar
     * @param {VacationCalendarsApiCreateNewCalendarRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VacationCalendarsApiGenerated
     */
    public createNewCalendar(requestParameters: VacationCalendarsApiCreateNewCalendarRequest, options?: AxiosRequestConfig) {
        return VacationCalendarsApiFp(this.configuration).createNewCalendar(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List Vacation Calendars
     * @param {VacationCalendarsApiListCalendarsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VacationCalendarsApiGenerated
     */
    public listCalendars(requestParameters: VacationCalendarsApiListCalendarsRequest = {}, options?: AxiosRequestConfig) {
        return VacationCalendarsApiFp(this.configuration).listCalendars(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update Vacation Calendar
     * @param {VacationCalendarsApiUpdateCalendarRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VacationCalendarsApiGenerated
     */
    public updateCalendar(requestParameters: VacationCalendarsApiUpdateCalendarRequest, options?: AxiosRequestConfig) {
        return VacationCalendarsApiFp(this.configuration).updateCalendar(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
