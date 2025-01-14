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
import { EmployeeAgreementsAssignEmployeeRequest } from '../models';
// @ts-ignore
import { EmployeeAgreementsAssignEmployeeResponse } from '../models';
// @ts-ignore
import { EmployeeAgreementsUnassignEmployeeResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * EmployeeAgreementsApi - axios parameter creator
 * @export
 */
export const EmployeeAgreementsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Assign employee to agreement
         * @summary Create employee agreement
         * @param {EmployeeAgreementsAssignEmployeeRequest} employeeAgreementsAssignEmployeeRequest Data to create an agreement
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assignEmployee: async (employeeAgreementsAssignEmployeeRequest: EmployeeAgreementsAssignEmployeeRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'employeeAgreementsAssignEmployeeRequest' is not null or undefined
            assertParamExists('assignEmployee', 'employeeAgreementsAssignEmployeeRequest', employeeAgreementsAssignEmployeeRequest)
            const localVarPath = `/schedule/v1/agreement-employees`;
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
                requestBody: employeeAgreementsAssignEmployeeRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/schedule/v1/agreement-employees',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(employeeAgreementsAssignEmployeeRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Unassign employee to agreement
         * @summary Delete employee agreement
         * @param {string} agreementEmployeeId Employee agreement UUID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unassignEmployee: async (agreementEmployeeId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'agreementEmployeeId' is not null or undefined
            assertParamExists('unassignEmployee', 'agreementEmployeeId', agreementEmployeeId)
            const localVarPath = `/schedule/v1/agreement-employees/{agreementEmployeeId}`
                .replace(`{${"agreementEmployeeId"}}`, encodeURIComponent(String(agreementEmployeeId !== undefined ? agreementEmployeeId : `-agreementEmployeeId-`)));
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
                pathTemplate: '/schedule/v1/agreement-employees/{agreementEmployeeId}',
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
 * EmployeeAgreementsApi - functional programming interface
 * @export
 */
export const EmployeeAgreementsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EmployeeAgreementsApiAxiosParamCreator(configuration)
    return {
        /**
         * Assign employee to agreement
         * @summary Create employee agreement
         * @param {EmployeeAgreementsApiAssignEmployeeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async assignEmployee(requestParameters: EmployeeAgreementsApiAssignEmployeeRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeAgreementsAssignEmployeeResponse>> {
            const employeeAgreementsAssignEmployeeRequest: EmployeeAgreementsAssignEmployeeRequest = {
                agreementId: requestParameters.agreementId,
                employeeId: requestParameters.employeeId,
                startDate: requestParameters.startDate
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.assignEmployee(employeeAgreementsAssignEmployeeRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Unassign employee to agreement
         * @summary Delete employee agreement
         * @param {EmployeeAgreementsApiUnassignEmployeeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async unassignEmployee(requestParameters: EmployeeAgreementsApiUnassignEmployeeRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeeAgreementsUnassignEmployeeResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.unassignEmployee(requestParameters.agreementEmployeeId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EmployeeAgreementsApi - factory interface
 * @export
 */
export const EmployeeAgreementsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EmployeeAgreementsApiFp(configuration)
    return {
        /**
         * Assign employee to agreement
         * @summary Create employee agreement
         * @param {EmployeeAgreementsApiAssignEmployeeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        assignEmployee(requestParameters: EmployeeAgreementsApiAssignEmployeeRequest, options?: AxiosRequestConfig): AxiosPromise<EmployeeAgreementsAssignEmployeeResponse> {
            return localVarFp.assignEmployee(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Unassign employee to agreement
         * @summary Delete employee agreement
         * @param {EmployeeAgreementsApiUnassignEmployeeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        unassignEmployee(requestParameters: EmployeeAgreementsApiUnassignEmployeeRequest, options?: AxiosRequestConfig): AxiosPromise<EmployeeAgreementsUnassignEmployeeResponse> {
            return localVarFp.unassignEmployee(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for assignEmployee operation in EmployeeAgreementsApi.
 * @export
 * @interface EmployeeAgreementsApiAssignEmployeeRequest
 */
export type EmployeeAgreementsApiAssignEmployeeRequest = {
    
} & EmployeeAgreementsAssignEmployeeRequest

/**
 * Request parameters for unassignEmployee operation in EmployeeAgreementsApi.
 * @export
 * @interface EmployeeAgreementsApiUnassignEmployeeRequest
 */
export type EmployeeAgreementsApiUnassignEmployeeRequest = {
    
    /**
    * Employee agreement UUID
    * @type {string}
    * @memberof EmployeeAgreementsApiUnassignEmployee
    */
    readonly agreementEmployeeId: string
    
}

/**
 * EmployeeAgreementsApiGenerated - object-oriented interface
 * @export
 * @class EmployeeAgreementsApiGenerated
 * @extends {BaseAPI}
 */
export class EmployeeAgreementsApiGenerated extends BaseAPI {
    /**
     * Assign employee to agreement
     * @summary Create employee agreement
     * @param {EmployeeAgreementsApiAssignEmployeeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeAgreementsApiGenerated
     */
    public assignEmployee(requestParameters: EmployeeAgreementsApiAssignEmployeeRequest, options?: AxiosRequestConfig) {
        return EmployeeAgreementsApiFp(this.configuration).assignEmployee(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Unassign employee to agreement
     * @summary Delete employee agreement
     * @param {EmployeeAgreementsApiUnassignEmployeeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeeAgreementsApiGenerated
     */
    public unassignEmployee(requestParameters: EmployeeAgreementsApiUnassignEmployeeRequest, options?: AxiosRequestConfig) {
        return EmployeeAgreementsApiFp(this.configuration).unassignEmployee(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
