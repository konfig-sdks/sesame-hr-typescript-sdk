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
import { EmployeeManagersAssignRequest } from '../models';
// @ts-ignore
import { EmployeeManagersAssignResponse } from '../models';
// @ts-ignore
import { EmployeeManagersListResponse } from '../models';
// @ts-ignore
import { EmployeeManagersRemoveByIdResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * EmployeeManagersApi - axios parameter creator
 * @export
 */
export const EmployeeManagersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Assign an employee manager
         * @param {EmployeeManagersAssignRequest} employeeManagersAssignRequest Employee manager object that needs to be created
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assign: async (employeeManagersAssignRequest: EmployeeManagersAssignRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'employeeManagersAssignRequest' is not null or undefined
            assertParamExists('assign', 'employeeManagersAssignRequest', employeeManagersAssignRequest)
            const localVarPath = `/core/v3/employee-managers`;
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
                requestBody: employeeManagersAssignRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/core/v3/employee-managers',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(employeeManagersAssignRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary List employee managers
         * @param {string} [employeeId] Find employee managers by employeeId
         * @param {string} [managerId] Find employee managers by managerId
         * @param {'check' | 'vacation'} [permission] &lt;b&gt;Supported operators:&lt;/b&gt; in
         * @param {number} [limit] Limit departments
         * @param {number} [page] Request a specific page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list: async (employeeId?: string, managerId?: string, permission?: 'check' | 'vacation', limit?: number, page?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/core/v3/employee-managers`;
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

            if (managerId !== undefined) {
                localVarQueryParameter['managerId'] = managerId;
            }

            if (permission !== undefined) {
                localVarQueryParameter['permission'] = permission;
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
                pathTemplate: '/core/v3/employee-managers',
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
         * @summary Delete an employee manager
         * @param {string} id Employee manager ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeById: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('removeById', 'id', id)
            const localVarPath = `/core/v3/employee-managers/{id}`
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
                pathTemplate: '/core/v3/employee-managers/{id}',
                httpMethod: 'DELETE'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EmployeeManagersApi - functional programming interface
 * @export
 */
export const EmployeeManagersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EmployeeManagersApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Assign an employee manager
         * @param {EmployeeManagersApiAssignRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async assign(requestParameters: EmployeeManagersApiAssignRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeManagersAssignResponse>> {
            const employeeManagersAssignRequest: EmployeeManagersAssignRequest = {
                employeeId: requestParameters.employeeId,
                managerId: requestParameters.managerId,
                permission: requestParameters.permission,
                order: requestParameters.order
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.assign(employeeManagersAssignRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary List employee managers
         * @param {EmployeeManagersApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async list(requestParameters: EmployeeManagersApiListRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeManagersListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.list(requestParameters.employeeId, requestParameters.managerId, requestParameters.permission, requestParameters.limit, requestParameters.page, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete an employee manager
         * @param {EmployeeManagersApiRemoveByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeById(requestParameters: EmployeeManagersApiRemoveByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeManagersRemoveByIdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeById(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EmployeeManagersApi - factory interface
 * @export
 */
export const EmployeeManagersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EmployeeManagersApiFp(configuration)
    return {
        /**
         * 
         * @summary Assign an employee manager
         * @param {EmployeeManagersApiAssignRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assign(requestParameters: EmployeeManagersApiAssignRequest, options?: AxiosRequestConfig): AxiosPromise<EmployeeManagersAssignResponse> {
            return localVarFp.assign(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List employee managers
         * @param {EmployeeManagersApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list(requestParameters: EmployeeManagersApiListRequest = {}, options?: AxiosRequestConfig): AxiosPromise<EmployeeManagersListResponse> {
            return localVarFp.list(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete an employee manager
         * @param {EmployeeManagersApiRemoveByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeById(requestParameters: EmployeeManagersApiRemoveByIdRequest, options?: AxiosRequestConfig): AxiosPromise<EmployeeManagersRemoveByIdResponse> {
            return localVarFp.removeById(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for assign operation in EmployeeManagersApi.
 * @export
 * @interface EmployeeManagersApiAssignRequest
 */
export type EmployeeManagersApiAssignRequest = {
    
} & EmployeeManagersAssignRequest

/**
 * Request parameters for list operation in EmployeeManagersApi.
 * @export
 * @interface EmployeeManagersApiListRequest
 */
export type EmployeeManagersApiListRequest = {
    
    /**
    * Find employee managers by employeeId
    * @type {string}
    * @memberof EmployeeManagersApiList
    */
    readonly employeeId?: string
    
    /**
    * Find employee managers by managerId
    * @type {string}
    * @memberof EmployeeManagersApiList
    */
    readonly managerId?: string
    
    /**
    * <b>Supported operators:</b> in
    * @type {'check' | 'vacation'}
    * @memberof EmployeeManagersApiList
    */
    readonly permission?: 'check' | 'vacation'
    
    /**
    * Limit departments
    * @type {number}
    * @memberof EmployeeManagersApiList
    */
    readonly limit?: number
    
    /**
    * Request a specific page
    * @type {number}
    * @memberof EmployeeManagersApiList
    */
    readonly page?: number
    
}

/**
 * Request parameters for removeById operation in EmployeeManagersApi.
 * @export
 * @interface EmployeeManagersApiRemoveByIdRequest
 */
export type EmployeeManagersApiRemoveByIdRequest = {
    
    /**
    * Employee manager ID
    * @type {string}
    * @memberof EmployeeManagersApiRemoveById
    */
    readonly id: string
    
}

/**
 * EmployeeManagersApiGenerated - object-oriented interface
 * @export
 * @class EmployeeManagersApiGenerated
 * @extends {BaseAPI}
 */
export class EmployeeManagersApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Assign an employee manager
     * @param {EmployeeManagersApiAssignRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeManagersApiGenerated
     */
    public assign(requestParameters: EmployeeManagersApiAssignRequest, options?: AxiosRequestConfig) {
        return EmployeeManagersApiFp(this.configuration).assign(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List employee managers
     * @param {EmployeeManagersApiListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeManagersApiGenerated
     */
    public list(requestParameters: EmployeeManagersApiListRequest = {}, options?: AxiosRequestConfig) {
        return EmployeeManagersApiFp(this.configuration).list(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete an employee manager
     * @param {EmployeeManagersApiRemoveByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeManagersApiGenerated
     */
    public removeById(requestParameters: EmployeeManagersApiRemoveByIdRequest, options?: AxiosRequestConfig) {
        return EmployeeManagersApiFp(this.configuration).removeById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}