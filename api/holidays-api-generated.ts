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
import { HolidaysAssignToEmployeeRequest } from '../models';
// @ts-ignore
import { HolidaysAssignToEmployeeResponse } from '../models';
// @ts-ignore
import { HolidaysGetByHolidayCalendarEmployeesResponse } from '../models';
// @ts-ignore
import { HolidaysListResponse } from '../models';
// @ts-ignore
import { HolidaysUnassignHolidayCalendarToEmployeeRequest } from '../models';
// @ts-ignore
import { HolidaysUnassignHolidayCalendarToEmployeeResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * HolidaysApi - axios parameter creator
 * @export
 */
export const HolidaysApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Assign Holiday Calendar To Employee
         * @param {string} holidayCalendarId Holiday Calendar Id
         * @param {HolidaysAssignToEmployeeRequest} [holidaysAssignToEmployeeRequest] Assign Holiday Calendar To Employee
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assignToEmployee: async (holidayCalendarId: string, holidaysAssignToEmployeeRequest?: HolidaysAssignToEmployeeRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'holidayCalendarId' is not null or undefined
            assertParamExists('assignToEmployee', 'holidayCalendarId', holidayCalendarId)
            const localVarPath = `/schedule/v1/holidays/{holidayCalendarId}/employees`
                .replace(`{${"holidayCalendarId"}}`, encodeURIComponent(String(holidayCalendarId !== undefined ? holidayCalendarId : `-holidayCalendarId-`)));
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
                requestBody: holidaysAssignToEmployeeRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/schedule/v1/holidays/{holidayCalendarId}/employees',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(holidaysAssignToEmployeeRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get Employees By Holiday Calendar
         * @param {string} holidayCalendarId Holiday Calendar Id
         * @param {number} [limit] Limit results
         * @param {number} [page] Request a specific page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getByHolidayCalendarEmployees: async (holidayCalendarId: string, limit?: number, page?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'holidayCalendarId' is not null or undefined
            assertParamExists('getByHolidayCalendarEmployees', 'holidayCalendarId', holidayCalendarId)
            const localVarPath = `/schedule/v1/holidays/{holidayCalendarId}/employees`
                .replace(`{${"holidayCalendarId"}}`, encodeURIComponent(String(holidayCalendarId !== undefined ? holidayCalendarId : `-holidayCalendarId-`)));
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
                pathTemplate: '/schedule/v1/holidays/{holidayCalendarId}/employees',
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
         * @summary List Holidays
         * @param {string} employeeId Employee ID
         * @param {number} year 
         * @param {number} [limit] Limit results
         * @param {number} [page] Request a specific page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list: async (employeeId: string, year: number, limit?: number, page?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'employeeId' is not null or undefined
            assertParamExists('list', 'employeeId', employeeId)
            // verify required parameter 'year' is not null or undefined
            assertParamExists('list', 'year', year)
            const localVarPath = `/schedule/v1/holidays`;
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

            if (year !== undefined) {
                localVarQueryParameter['year'] = year;
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
                pathTemplate: '/schedule/v1/holidays',
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
         * @summary Unassign Holiday Calendar To Employee
         * @param {string} holidayCalendarId Holiday Calendar Id
         * @param {HolidaysUnassignHolidayCalendarToEmployeeRequest} [holidaysUnassignHolidayCalendarToEmployeeRequest] Assign Holiday Calendar To Employee
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unassignHolidayCalendarToEmployee: async (holidayCalendarId: string, holidaysUnassignHolidayCalendarToEmployeeRequest?: HolidaysUnassignHolidayCalendarToEmployeeRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'holidayCalendarId' is not null or undefined
            assertParamExists('unassignHolidayCalendarToEmployee', 'holidayCalendarId', holidayCalendarId)
            const localVarPath = `/schedule/v1/holidays/{holidayCalendarId}/employees`
                .replace(`{${"holidayCalendarId"}}`, encodeURIComponent(String(holidayCalendarId !== undefined ? holidayCalendarId : `-holidayCalendarId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: holidaysUnassignHolidayCalendarToEmployeeRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/schedule/v1/holidays/{holidayCalendarId}/employees',
                httpMethod: 'DELETE'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(holidaysUnassignHolidayCalendarToEmployeeRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * HolidaysApi - functional programming interface
 * @export
 */
export const HolidaysApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = HolidaysApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Assign Holiday Calendar To Employee
         * @param {HolidaysApiAssignToEmployeeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async assignToEmployee(requestParameters: HolidaysApiAssignToEmployeeRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HolidaysAssignToEmployeeResponse>> {
            const holidaysAssignToEmployeeRequest: HolidaysAssignToEmployeeRequest = {
                employees: requestParameters.employees,
                startDate: requestParameters.startDate
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.assignToEmployee(requestParameters.holidayCalendarId, holidaysAssignToEmployeeRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get Employees By Holiday Calendar
         * @param {HolidaysApiGetByHolidayCalendarEmployeesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getByHolidayCalendarEmployees(requestParameters: HolidaysApiGetByHolidayCalendarEmployeesRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HolidaysGetByHolidayCalendarEmployeesResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getByHolidayCalendarEmployees(requestParameters.holidayCalendarId, requestParameters.limit, requestParameters.page, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary List Holidays
         * @param {HolidaysApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async list(requestParameters: HolidaysApiListRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HolidaysListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.list(requestParameters.employeeId, requestParameters.year, requestParameters.limit, requestParameters.page, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Unassign Holiday Calendar To Employee
         * @param {HolidaysApiUnassignHolidayCalendarToEmployeeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async unassignHolidayCalendarToEmployee(requestParameters: HolidaysApiUnassignHolidayCalendarToEmployeeRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HolidaysUnassignHolidayCalendarToEmployeeResponse>> {
            const holidaysUnassignHolidayCalendarToEmployeeRequest: HolidaysUnassignHolidayCalendarToEmployeeRequest = {
                employees: requestParameters.employees
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.unassignHolidayCalendarToEmployee(requestParameters.holidayCalendarId, holidaysUnassignHolidayCalendarToEmployeeRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * HolidaysApi - factory interface
 * @export
 */
export const HolidaysApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = HolidaysApiFp(configuration)
    return {
        /**
         * 
         * @summary Assign Holiday Calendar To Employee
         * @param {HolidaysApiAssignToEmployeeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assignToEmployee(requestParameters: HolidaysApiAssignToEmployeeRequest, options?: AxiosRequestConfig): AxiosPromise<HolidaysAssignToEmployeeResponse> {
            return localVarFp.assignToEmployee(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Employees By Holiday Calendar
         * @param {HolidaysApiGetByHolidayCalendarEmployeesRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getByHolidayCalendarEmployees(requestParameters: HolidaysApiGetByHolidayCalendarEmployeesRequest, options?: AxiosRequestConfig): AxiosPromise<HolidaysGetByHolidayCalendarEmployeesResponse> {
            return localVarFp.getByHolidayCalendarEmployees(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List Holidays
         * @param {HolidaysApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list(requestParameters: HolidaysApiListRequest, options?: AxiosRequestConfig): AxiosPromise<HolidaysListResponse> {
            return localVarFp.list(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Unassign Holiday Calendar To Employee
         * @param {HolidaysApiUnassignHolidayCalendarToEmployeeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unassignHolidayCalendarToEmployee(requestParameters: HolidaysApiUnassignHolidayCalendarToEmployeeRequest, options?: AxiosRequestConfig): AxiosPromise<HolidaysUnassignHolidayCalendarToEmployeeResponse> {
            return localVarFp.unassignHolidayCalendarToEmployee(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for assignToEmployee operation in HolidaysApi.
 * @export
 * @interface HolidaysApiAssignToEmployeeRequest
 */
export type HolidaysApiAssignToEmployeeRequest = {
    
    /**
    * Holiday Calendar Id
    * @type {string}
    * @memberof HolidaysApiAssignToEmployee
    */
    readonly holidayCalendarId: string
    
} & HolidaysAssignToEmployeeRequest

/**
 * Request parameters for getByHolidayCalendarEmployees operation in HolidaysApi.
 * @export
 * @interface HolidaysApiGetByHolidayCalendarEmployeesRequest
 */
export type HolidaysApiGetByHolidayCalendarEmployeesRequest = {
    
    /**
    * Holiday Calendar Id
    * @type {string}
    * @memberof HolidaysApiGetByHolidayCalendarEmployees
    */
    readonly holidayCalendarId: string
    
    /**
    * Limit results
    * @type {number}
    * @memberof HolidaysApiGetByHolidayCalendarEmployees
    */
    readonly limit?: number
    
    /**
    * Request a specific page
    * @type {number}
    * @memberof HolidaysApiGetByHolidayCalendarEmployees
    */
    readonly page?: number
    
}

/**
 * Request parameters for list operation in HolidaysApi.
 * @export
 * @interface HolidaysApiListRequest
 */
export type HolidaysApiListRequest = {
    
    /**
    * Employee ID
    * @type {string}
    * @memberof HolidaysApiList
    */
    readonly employeeId: string
    
    /**
    * 
    * @type {number}
    * @memberof HolidaysApiList
    */
    readonly year: number
    
    /**
    * Limit results
    * @type {number}
    * @memberof HolidaysApiList
    */
    readonly limit?: number
    
    /**
    * Request a specific page
    * @type {number}
    * @memberof HolidaysApiList
    */
    readonly page?: number
    
}

/**
 * Request parameters for unassignHolidayCalendarToEmployee operation in HolidaysApi.
 * @export
 * @interface HolidaysApiUnassignHolidayCalendarToEmployeeRequest
 */
export type HolidaysApiUnassignHolidayCalendarToEmployeeRequest = {
    
    /**
    * Holiday Calendar Id
    * @type {string}
    * @memberof HolidaysApiUnassignHolidayCalendarToEmployee
    */
    readonly holidayCalendarId: string
    
} & HolidaysUnassignHolidayCalendarToEmployeeRequest

/**
 * HolidaysApiGenerated - object-oriented interface
 * @export
 * @class HolidaysApiGenerated
 * @extends {BaseAPI}
 */
export class HolidaysApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Assign Holiday Calendar To Employee
     * @param {HolidaysApiAssignToEmployeeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HolidaysApiGenerated
     */
    public assignToEmployee(requestParameters: HolidaysApiAssignToEmployeeRequest, options?: AxiosRequestConfig) {
        return HolidaysApiFp(this.configuration).assignToEmployee(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get Employees By Holiday Calendar
     * @param {HolidaysApiGetByHolidayCalendarEmployeesRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HolidaysApiGenerated
     */
    public getByHolidayCalendarEmployees(requestParameters: HolidaysApiGetByHolidayCalendarEmployeesRequest, options?: AxiosRequestConfig) {
        return HolidaysApiFp(this.configuration).getByHolidayCalendarEmployees(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List Holidays
     * @param {HolidaysApiListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HolidaysApiGenerated
     */
    public list(requestParameters: HolidaysApiListRequest, options?: AxiosRequestConfig) {
        return HolidaysApiFp(this.configuration).list(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Unassign Holiday Calendar To Employee
     * @param {HolidaysApiUnassignHolidayCalendarToEmployeeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HolidaysApiGenerated
     */
    public unassignHolidayCalendarToEmployee(requestParameters: HolidaysApiUnassignHolidayCalendarToEmployeeRequest, options?: AxiosRequestConfig) {
        return HolidaysApiFp(this.configuration).unassignHolidayCalendarToEmployee(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}