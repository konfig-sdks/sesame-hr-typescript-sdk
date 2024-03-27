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
import { CustomFieldsCreateFieldRequest } from '../models';
// @ts-ignore
import { CustomFieldsCreateFieldResponse } from '../models';
// @ts-ignore
import { CustomFieldsDeleteFieldResponse } from '../models';
// @ts-ignore
import { CustomFieldsListResponse } from '../models';
// @ts-ignore
import { CustomFieldsUpdateFieldByIdRequest } from '../models';
// @ts-ignore
import { CustomFieldsUpdateFieldByIdResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * CustomFieldsApi - axios parameter creator
 * @export
 */
export const CustomFieldsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create a custom field
         * @param {CustomFieldsCreateFieldRequest} customFieldsCreateFieldRequest Custom Field object that needs to be created
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createField: async (customFieldsCreateFieldRequest: CustomFieldsCreateFieldRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'customFieldsCreateFieldRequest' is not null or undefined
            assertParamExists('createField', 'customFieldsCreateFieldRequest', customFieldsCreateFieldRequest)
            const localVarPath = `/core/v3/custom-fields`;
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
                requestBody: customFieldsCreateFieldRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/core/v3/custom-fields',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(customFieldsCreateFieldRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete a custom field
         * @param {string} id Custom field ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteField: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('deleteField', 'id', id)
            const localVarPath = `/core/v3/custom-fields/{id}`
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
                pathTemplate: '/core/v3/custom-fields/{id}',
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
         * @summary List custom fields
         * @param {number} [limit] Limit custom fields
         * @param {number} [page] Request a specific page
         * @param {string} [orderBy] field1 asc, field2 desc
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list: async (limit?: number, page?: number, orderBy?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/core/v3/custom-fields`;
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

            if (orderBy !== undefined) {
                localVarQueryParameter['orderBy'] = orderBy;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/core/v3/custom-fields',
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
         * @summary Update a custom field
         * @param {string} id Custom field ID
         * @param {CustomFieldsUpdateFieldByIdRequest} customFieldsUpdateFieldByIdRequest Custom field object that needs to be updated
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateFieldById: async (id: string, customFieldsUpdateFieldByIdRequest: CustomFieldsUpdateFieldByIdRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateFieldById', 'id', id)
            // verify required parameter 'customFieldsUpdateFieldByIdRequest' is not null or undefined
            assertParamExists('updateFieldById', 'customFieldsUpdateFieldByIdRequest', customFieldsUpdateFieldByIdRequest)
            const localVarPath = `/core/v3/custom-fields/{id}`
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
                requestBody: customFieldsUpdateFieldByIdRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/core/v3/custom-fields/{id}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(customFieldsUpdateFieldByIdRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CustomFieldsApi - functional programming interface
 * @export
 */
export const CustomFieldsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CustomFieldsApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create a custom field
         * @param {CustomFieldsApiCreateFieldRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createField(requestParameters: CustomFieldsApiCreateFieldRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomFieldsCreateFieldResponse>> {
            const customFieldsCreateFieldRequest: CustomFieldsCreateFieldRequest = {
                companyId: requestParameters.companyId,
                name: requestParameters.name,
                slug: requestParameters.slug,
                type: requestParameters.type
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createField(customFieldsCreateFieldRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete a custom field
         * @param {CustomFieldsApiDeleteFieldRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteField(requestParameters: CustomFieldsApiDeleteFieldRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomFieldsDeleteFieldResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteField(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary List custom fields
         * @param {CustomFieldsApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async list(requestParameters: CustomFieldsApiListRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomFieldsListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.list(requestParameters.limit, requestParameters.page, requestParameters.orderBy, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update a custom field
         * @param {CustomFieldsApiUpdateFieldByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateFieldById(requestParameters: CustomFieldsApiUpdateFieldByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CustomFieldsUpdateFieldByIdResponse>> {
            const customFieldsUpdateFieldByIdRequest: CustomFieldsUpdateFieldByIdRequest = {
                name: requestParameters.name,
                slug: requestParameters.slug
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateFieldById(requestParameters.id, customFieldsUpdateFieldByIdRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CustomFieldsApi - factory interface
 * @export
 */
export const CustomFieldsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CustomFieldsApiFp(configuration)
    return {
        /**
         * 
         * @summary Create a custom field
         * @param {CustomFieldsApiCreateFieldRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createField(requestParameters: CustomFieldsApiCreateFieldRequest, options?: AxiosRequestConfig): AxiosPromise<CustomFieldsCreateFieldResponse> {
            return localVarFp.createField(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete a custom field
         * @param {CustomFieldsApiDeleteFieldRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteField(requestParameters: CustomFieldsApiDeleteFieldRequest, options?: AxiosRequestConfig): AxiosPromise<CustomFieldsDeleteFieldResponse> {
            return localVarFp.deleteField(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List custom fields
         * @param {CustomFieldsApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list(requestParameters: CustomFieldsApiListRequest = {}, options?: AxiosRequestConfig): AxiosPromise<CustomFieldsListResponse> {
            return localVarFp.list(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update a custom field
         * @param {CustomFieldsApiUpdateFieldByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateFieldById(requestParameters: CustomFieldsApiUpdateFieldByIdRequest, options?: AxiosRequestConfig): AxiosPromise<CustomFieldsUpdateFieldByIdResponse> {
            return localVarFp.updateFieldById(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createField operation in CustomFieldsApi.
 * @export
 * @interface CustomFieldsApiCreateFieldRequest
 */
export type CustomFieldsApiCreateFieldRequest = {
    
} & CustomFieldsCreateFieldRequest

/**
 * Request parameters for deleteField operation in CustomFieldsApi.
 * @export
 * @interface CustomFieldsApiDeleteFieldRequest
 */
export type CustomFieldsApiDeleteFieldRequest = {
    
    /**
    * Custom field ID
    * @type {string}
    * @memberof CustomFieldsApiDeleteField
    */
    readonly id: string
    
}

/**
 * Request parameters for list operation in CustomFieldsApi.
 * @export
 * @interface CustomFieldsApiListRequest
 */
export type CustomFieldsApiListRequest = {
    
    /**
    * Limit custom fields
    * @type {number}
    * @memberof CustomFieldsApiList
    */
    readonly limit?: number
    
    /**
    * Request a specific page
    * @type {number}
    * @memberof CustomFieldsApiList
    */
    readonly page?: number
    
    /**
    * field1 asc, field2 desc
    * @type {string}
    * @memberof CustomFieldsApiList
    */
    readonly orderBy?: string
    
}

/**
 * Request parameters for updateFieldById operation in CustomFieldsApi.
 * @export
 * @interface CustomFieldsApiUpdateFieldByIdRequest
 */
export type CustomFieldsApiUpdateFieldByIdRequest = {
    
    /**
    * Custom field ID
    * @type {string}
    * @memberof CustomFieldsApiUpdateFieldById
    */
    readonly id: string
    
} & CustomFieldsUpdateFieldByIdRequest

/**
 * CustomFieldsApiGenerated - object-oriented interface
 * @export
 * @class CustomFieldsApiGenerated
 * @extends {BaseAPI}
 */
export class CustomFieldsApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Create a custom field
     * @param {CustomFieldsApiCreateFieldRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomFieldsApiGenerated
     */
    public createField(requestParameters: CustomFieldsApiCreateFieldRequest, options?: AxiosRequestConfig) {
        return CustomFieldsApiFp(this.configuration).createField(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete a custom field
     * @param {CustomFieldsApiDeleteFieldRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomFieldsApiGenerated
     */
    public deleteField(requestParameters: CustomFieldsApiDeleteFieldRequest, options?: AxiosRequestConfig) {
        return CustomFieldsApiFp(this.configuration).deleteField(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List custom fields
     * @param {CustomFieldsApiListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomFieldsApiGenerated
     */
    public list(requestParameters: CustomFieldsApiListRequest = {}, options?: AxiosRequestConfig) {
        return CustomFieldsApiFp(this.configuration).list(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update a custom field
     * @param {CustomFieldsApiUpdateFieldByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CustomFieldsApiGenerated
     */
    public updateFieldById(requestParameters: CustomFieldsApiUpdateFieldByIdRequest, options?: AxiosRequestConfig) {
        return CustomFieldsApiFp(this.configuration).updateFieldById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
