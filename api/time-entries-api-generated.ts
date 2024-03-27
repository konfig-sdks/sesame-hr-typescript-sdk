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
import { TimeEntriesCreateNewEntryRequest } from '../models';
// @ts-ignore
import { TimeEntriesCreateNewEntryRequestTimeEntryIn } from '../models';
// @ts-ignore
import { TimeEntriesCreateNewEntryRequestTimeEntryOut } from '../models';
// @ts-ignore
import { TimeEntriesCreateNewEntryResponse } from '../models';
// @ts-ignore
import { TimeEntriesDeleteByIdResponse } from '../models';
// @ts-ignore
import { TimeEntriesListResponse } from '../models';
// @ts-ignore
import { TimeEntriesStartEntryRequest } from '../models';
// @ts-ignore
import { TimeEntriesStartEntryResponse } from '../models';
// @ts-ignore
import { TimeEntriesStopTimeEntryOutRequest } from '../models';
// @ts-ignore
import { TimeEntriesStopTimeEntryOutRequestCoordinates } from '../models';
// @ts-ignore
import { TimeEntriesStopTimeEntryOutResponse } from '../models';
// @ts-ignore
import { TimeEntriesUpdateEntryRequest } from '../models';
// @ts-ignore
import { TimeEntriesUpdateEntryRequestTimeEntryIn } from '../models';
// @ts-ignore
import { TimeEntriesUpdateEntryRequestTimeEntryOut } from '../models';
// @ts-ignore
import { TimeEntriesUpdateEntryResponse } from '../models';
// @ts-ignore
import { WorkEntriesStartNewEntryRequestWorkEntryInCoordinates } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * TimeEntriesApi - axios parameter creator
 * @export
 */
export const TimeEntriesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create Time Entry
         * @param {TimeEntriesCreateNewEntryRequest} timeEntriesCreateNewEntryRequest Create a Time Entry
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewEntry: async (timeEntriesCreateNewEntryRequest: TimeEntriesCreateNewEntryRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'timeEntriesCreateNewEntryRequest' is not null or undefined
            assertParamExists('createNewEntry', 'timeEntriesCreateNewEntryRequest', timeEntriesCreateNewEntryRequest)
            const localVarPath = `/project/v1/time-entries`;
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
                requestBody: timeEntriesCreateNewEntryRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/project/v1/time-entries',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(timeEntriesCreateNewEntryRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete a Time Entry
         * @param {string} id Time Entry ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteById: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteById', 'id', id)
            const localVarPath = `/project/v1/time-entries/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
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

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/project/v1/time-entries/{id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary List Time Entries
         * @param {string} [employeeId] 
         * @param {string | Date} [from] 
         * @param {string | Date} [to] 
         * @param {'active' | 'inactive'} [employeeStatus] 
         * @param {number} [limit] Limit results
         * @param {number} [page] Request a specific page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list: async (employeeId?: string, from?: string | Date, to?: string | Date, employeeStatus?: 'active' | 'inactive', limit?: number, page?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/project/v1/time-entries`;
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

            if (from !== undefined) {
                localVarQueryParameter['from'] = (from as any instanceof Date) ?
                    (from as any).toISOString().substr(0,10) :
                    from;
            }

            if (to !== undefined) {
                localVarQueryParameter['to'] = (to as any instanceof Date) ?
                    (to as any).toISOString().substr(0,10) :
                    to;
            }

            if (employeeStatus !== undefined) {
                localVarQueryParameter['employeeStatus'] = employeeStatus;
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
                pathTemplate: '/project/v1/time-entries',
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
         * @summary Time Entry In
         * @param {TimeEntriesStartEntryRequest} timeEntriesStartEntryRequest Starts a Time Entry
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        startEntry: async (timeEntriesStartEntryRequest: TimeEntriesStartEntryRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'timeEntriesStartEntryRequest' is not null or undefined
            assertParamExists('startEntry', 'timeEntriesStartEntryRequest', timeEntriesStartEntryRequest)
            const localVarPath = `/project/v1/time-entries/start`;
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
                requestBody: timeEntriesStartEntryRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/project/v1/time-entries/start',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(timeEntriesStartEntryRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Time Entry Out
         * @param {TimeEntriesStopTimeEntryOutRequest} timeEntriesStopTimeEntryOutRequest Close a Time Entry
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stopTimeEntryOut: async (timeEntriesStopTimeEntryOutRequest: TimeEntriesStopTimeEntryOutRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'timeEntriesStopTimeEntryOutRequest' is not null or undefined
            assertParamExists('stopTimeEntryOut', 'timeEntriesStopTimeEntryOutRequest', timeEntriesStopTimeEntryOutRequest)
            const localVarPath = `/project/v1/time-entries/stop`;
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
                requestBody: timeEntriesStopTimeEntryOutRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/project/v1/time-entries/stop',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(timeEntriesStopTimeEntryOutRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Update Time Entry
         * @param {string} id Time Entry ID
         * @param {TimeEntriesUpdateEntryRequest} timeEntriesUpdateEntryRequest Update a Time Entry
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateEntry: async (id: string, timeEntriesUpdateEntryRequest: TimeEntriesUpdateEntryRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateEntry', 'id', id)
            // verify required parameter 'timeEntriesUpdateEntryRequest' is not null or undefined
            assertParamExists('updateEntry', 'timeEntriesUpdateEntryRequest', timeEntriesUpdateEntryRequest)
            const localVarPath = `/project/v1/time-entries/{id}`
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
                requestBody: timeEntriesUpdateEntryRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/project/v1/time-entries/{id}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(timeEntriesUpdateEntryRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TimeEntriesApi - functional programming interface
 * @export
 */
export const TimeEntriesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TimeEntriesApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create Time Entry
         * @param {TimeEntriesApiCreateNewEntryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewEntry(requestParameters: TimeEntriesApiCreateNewEntryRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TimeEntriesCreateNewEntryResponse>> {
            const timeEntriesCreateNewEntryRequest: TimeEntriesCreateNewEntryRequest = {
                employeeId: requestParameters.employeeId,
                projectId: requestParameters.projectId,
                tagIds: requestParameters.tagIds,
                comment: requestParameters.comment,
                timeEntryIn: requestParameters.timeEntryIn,
                timeEntryOut: requestParameters.timeEntryOut
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewEntry(timeEntriesCreateNewEntryRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete a Time Entry
         * @param {TimeEntriesApiDeleteByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteById(requestParameters: TimeEntriesApiDeleteByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TimeEntriesDeleteByIdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteById(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary List Time Entries
         * @param {TimeEntriesApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async list(requestParameters: TimeEntriesApiListRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TimeEntriesListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.list(requestParameters.employeeId, requestParameters.from, requestParameters.to, requestParameters.employeeStatus, requestParameters.limit, requestParameters.page, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Time Entry In
         * @param {TimeEntriesApiStartEntryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async startEntry(requestParameters: TimeEntriesApiStartEntryRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TimeEntriesStartEntryResponse>> {
            const timeEntriesStartEntryRequest: TimeEntriesStartEntryRequest = {
                employeeId: requestParameters.employeeId,
                projectId: requestParameters.projectId,
                tagIds: requestParameters.tagIds,
                comment: requestParameters.comment,
                coordinates: requestParameters.coordinates
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.startEntry(timeEntriesStartEntryRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Time Entry Out
         * @param {TimeEntriesApiStopTimeEntryOutRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async stopTimeEntryOut(requestParameters: TimeEntriesApiStopTimeEntryOutRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TimeEntriesStopTimeEntryOutResponse>> {
            const timeEntriesStopTimeEntryOutRequest: TimeEntriesStopTimeEntryOutRequest = {
                coordinates: requestParameters.coordinates
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.stopTimeEntryOut(timeEntriesStopTimeEntryOutRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update Time Entry
         * @param {TimeEntriesApiUpdateEntryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateEntry(requestParameters: TimeEntriesApiUpdateEntryRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TimeEntriesUpdateEntryResponse>> {
            const timeEntriesUpdateEntryRequest: TimeEntriesUpdateEntryRequest = {
                projectId: requestParameters.projectId,
                tagIds: requestParameters.tagIds,
                comment: requestParameters.comment,
                timeEntryIn: requestParameters.timeEntryIn,
                timeEntryOut: requestParameters.timeEntryOut
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateEntry(requestParameters.id, timeEntriesUpdateEntryRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TimeEntriesApi - factory interface
 * @export
 */
export const TimeEntriesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TimeEntriesApiFp(configuration)
    return {
        /**
         * 
         * @summary Create Time Entry
         * @param {TimeEntriesApiCreateNewEntryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewEntry(requestParameters: TimeEntriesApiCreateNewEntryRequest, options?: AxiosRequestConfig): AxiosPromise<TimeEntriesCreateNewEntryResponse> {
            return localVarFp.createNewEntry(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete a Time Entry
         * @param {TimeEntriesApiDeleteByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteById(requestParameters: TimeEntriesApiDeleteByIdRequest, options?: AxiosRequestConfig): AxiosPromise<TimeEntriesDeleteByIdResponse> {
            return localVarFp.deleteById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List Time Entries
         * @param {TimeEntriesApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list(requestParameters: TimeEntriesApiListRequest = {}, options?: AxiosRequestConfig): AxiosPromise<TimeEntriesListResponse> {
            return localVarFp.list(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Time Entry In
         * @param {TimeEntriesApiStartEntryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        startEntry(requestParameters: TimeEntriesApiStartEntryRequest, options?: AxiosRequestConfig): AxiosPromise<TimeEntriesStartEntryResponse> {
            return localVarFp.startEntry(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Time Entry Out
         * @param {TimeEntriesApiStopTimeEntryOutRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stopTimeEntryOut(requestParameters: TimeEntriesApiStopTimeEntryOutRequest, options?: AxiosRequestConfig): AxiosPromise<TimeEntriesStopTimeEntryOutResponse> {
            return localVarFp.stopTimeEntryOut(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update Time Entry
         * @param {TimeEntriesApiUpdateEntryRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateEntry(requestParameters: TimeEntriesApiUpdateEntryRequest, options?: AxiosRequestConfig): AxiosPromise<TimeEntriesUpdateEntryResponse> {
            return localVarFp.updateEntry(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createNewEntry operation in TimeEntriesApi.
 * @export
 * @interface TimeEntriesApiCreateNewEntryRequest
 */
export type TimeEntriesApiCreateNewEntryRequest = {
    
} & TimeEntriesCreateNewEntryRequest

/**
 * Request parameters for deleteById operation in TimeEntriesApi.
 * @export
 * @interface TimeEntriesApiDeleteByIdRequest
 */
export type TimeEntriesApiDeleteByIdRequest = {
    
    /**
    * Time Entry ID
    * @type {string}
    * @memberof TimeEntriesApiDeleteById
    */
    readonly id: string
    
}

/**
 * Request parameters for list operation in TimeEntriesApi.
 * @export
 * @interface TimeEntriesApiListRequest
 */
export type TimeEntriesApiListRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof TimeEntriesApiList
    */
    readonly employeeId?: string
    
    /**
    * 
    * @type {string | Date}
    * @memberof TimeEntriesApiList
    */
    readonly from?: string | Date
    
    /**
    * 
    * @type {string | Date}
    * @memberof TimeEntriesApiList
    */
    readonly to?: string | Date
    
    /**
    * 
    * @type {'active' | 'inactive'}
    * @memberof TimeEntriesApiList
    */
    readonly employeeStatus?: 'active' | 'inactive'
    
    /**
    * Limit results
    * @type {number}
    * @memberof TimeEntriesApiList
    */
    readonly limit?: number
    
    /**
    * Request a specific page
    * @type {number}
    * @memberof TimeEntriesApiList
    */
    readonly page?: number
    
}

/**
 * Request parameters for startEntry operation in TimeEntriesApi.
 * @export
 * @interface TimeEntriesApiStartEntryRequest
 */
export type TimeEntriesApiStartEntryRequest = {
    
} & TimeEntriesStartEntryRequest

/**
 * Request parameters for stopTimeEntryOut operation in TimeEntriesApi.
 * @export
 * @interface TimeEntriesApiStopTimeEntryOutRequest
 */
export type TimeEntriesApiStopTimeEntryOutRequest = {
    
} & TimeEntriesStopTimeEntryOutRequest

/**
 * Request parameters for updateEntry operation in TimeEntriesApi.
 * @export
 * @interface TimeEntriesApiUpdateEntryRequest
 */
export type TimeEntriesApiUpdateEntryRequest = {
    
    /**
    * Time Entry ID
    * @type {string}
    * @memberof TimeEntriesApiUpdateEntry
    */
    readonly id: string
    
} & TimeEntriesUpdateEntryRequest

/**
 * TimeEntriesApiGenerated - object-oriented interface
 * @export
 * @class TimeEntriesApiGenerated
 * @extends {BaseAPI}
 */
export class TimeEntriesApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Create Time Entry
     * @param {TimeEntriesApiCreateNewEntryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimeEntriesApiGenerated
     */
    public createNewEntry(requestParameters: TimeEntriesApiCreateNewEntryRequest, options?: AxiosRequestConfig) {
        return TimeEntriesApiFp(this.configuration).createNewEntry(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete a Time Entry
     * @param {TimeEntriesApiDeleteByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimeEntriesApiGenerated
     */
    public deleteById(requestParameters: TimeEntriesApiDeleteByIdRequest, options?: AxiosRequestConfig) {
        return TimeEntriesApiFp(this.configuration).deleteById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List Time Entries
     * @param {TimeEntriesApiListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimeEntriesApiGenerated
     */
    public list(requestParameters: TimeEntriesApiListRequest = {}, options?: AxiosRequestConfig) {
        return TimeEntriesApiFp(this.configuration).list(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Time Entry In
     * @param {TimeEntriesApiStartEntryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimeEntriesApiGenerated
     */
    public startEntry(requestParameters: TimeEntriesApiStartEntryRequest, options?: AxiosRequestConfig) {
        return TimeEntriesApiFp(this.configuration).startEntry(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Time Entry Out
     * @param {TimeEntriesApiStopTimeEntryOutRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimeEntriesApiGenerated
     */
    public stopTimeEntryOut(requestParameters: TimeEntriesApiStopTimeEntryOutRequest, options?: AxiosRequestConfig) {
        return TimeEntriesApiFp(this.configuration).stopTimeEntryOut(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update Time Entry
     * @param {TimeEntriesApiUpdateEntryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimeEntriesApiGenerated
     */
    public updateEntry(requestParameters: TimeEntriesApiUpdateEntryRequest, options?: AxiosRequestConfig) {
        return TimeEntriesApiFp(this.configuration).updateEntry(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}