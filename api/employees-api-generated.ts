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
import { EmployeesCreateNewEmployeeRequest } from '../models';
// @ts-ignore
import { EmployeesCreateNewEmployeeRequestCustomFieldsInner } from '../models';
// @ts-ignore
import { EmployeesCreateNewEmployeeResponse } from '../models';
// @ts-ignore
import { EmployeesGetByIdResponse } from '../models';
// @ts-ignore
import { EmployeesListResponse } from '../models';
// @ts-ignore
import { EmployeesRemoveByIdResponse } from '../models';
// @ts-ignore
import { EmployeesUpdateByIdRequest } from '../models';
// @ts-ignore
import { EmployeesUpdateByIdRequestCustomFieldsInner } from '../models';
// @ts-ignore
import { EmployeesUpdateByIdResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * EmployeesApi - axios parameter creator
 * @export
 */
export const EmployeesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create an employee
         * @param {EmployeesCreateNewEmployeeRequest} employeesCreateNewEmployeeRequest Employee object that needs to be created
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewEmployee: async (employeesCreateNewEmployeeRequest: EmployeesCreateNewEmployeeRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'employeesCreateNewEmployeeRequest' is not null or undefined
            assertParamExists('createNewEmployee', 'employeesCreateNewEmployeeRequest', employeesCreateNewEmployeeRequest)
            const localVarPath = `/core/v3/employees`;
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
                requestBody: employeesCreateNewEmployeeRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/core/v3/employees',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(employeesCreateNewEmployeeRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get an employee
         * @param {string} id Employee ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getById', 'id', id)
            const localVarPath = `/core/v3/employees/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
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

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/core/v3/employees/{id}',
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
         * @summary List employees
         * @param {number} [code] Find Employee by code
         * @param {string} [dni] Find Employee by dni
         * @param {string} [email] Find Employee by email
         * @param {Array<string>} [departmentIds] Find Employee by department Ids
         * @param {Array<string>} [officeIds] Find Employee by office Ids
         * @param {number} [limit] Limit employees
         * @param {number} [page] Request a specific page
         * @param {string} [orderBy] field1 asc, field2 desc
         * @param {'active' | 'inactive'} [status] &lt;b&gt;Supported operators:&lt;/b&gt; in
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list: async (code?: number, dni?: string, email?: string, departmentIds?: Array<string>, officeIds?: Array<string>, limit?: number, page?: number, orderBy?: string, status?: 'active' | 'inactive', options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/core/v3/employees`;
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
            if (code !== undefined) {
                localVarQueryParameter['code'] = code;
            }

            if (dni !== undefined) {
                localVarQueryParameter['dni'] = dni;
            }

            if (email !== undefined) {
                localVarQueryParameter['email'] = email;
            }

            if (departmentIds) {
                localVarQueryParameter['departmentIds'] = departmentIds.join(COLLECTION_FORMATS.csv);
            }

            if (officeIds) {
                localVarQueryParameter['officeIds'] = officeIds.join(COLLECTION_FORMATS.csv);
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (orderBy !== undefined) {
                localVarQueryParameter['orderBy'] = orderBy;
            }

            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/core/v3/employees',
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
         * @summary Delete an employee
         * @param {string} id Employee ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeById: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('removeById', 'id', id)
            const localVarPath = `/core/v3/employees/{id}`
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
                pathTemplate: '/core/v3/employees/{id}',
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
         * @summary Update an employee
         * @param {string} id Employee ID
         * @param {EmployeesUpdateByIdRequest} employeesUpdateByIdRequest Employee object that needs to be updated
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateById: async (id: string, employeesUpdateByIdRequest: EmployeesUpdateByIdRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateById', 'id', id)
            // verify required parameter 'employeesUpdateByIdRequest' is not null or undefined
            assertParamExists('updateById', 'employeesUpdateByIdRequest', employeesUpdateByIdRequest)
            const localVarPath = `/core/v3/employees/{id}`
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
                requestBody: employeesUpdateByIdRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/core/v3/employees/{id}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(employeesUpdateByIdRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EmployeesApi - functional programming interface
 * @export
 */
export const EmployeesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EmployeesApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create an employee
         * @param {EmployeesApiCreateNewEmployeeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNewEmployee(requestParameters: EmployeesApiCreateNewEmployeeRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeesCreateNewEmployeeResponse>> {
            const employeesCreateNewEmployeeRequest: EmployeesCreateNewEmployeeRequest = {
                description: requestParameters.description,
                companyId: requestParameters.companyId,
                firstName: requestParameters.firstName,
                lastName: requestParameters.lastName,
                invitation: requestParameters.invitation,
                status: requestParameters.status,
                gender: requestParameters.gender,
                email: requestParameters.email,
                contractId: requestParameters.contractId,
                code: requestParameters.code,
                pin: requestParameters.pin,
                nid: requestParameters.nid,
                identityNumberType: requestParameters.identityNumberType,
                ssn: requestParameters.ssn,
                phone: requestParameters.phone,
                dateOfBirth: requestParameters.dateOfBirth,
                customFields: requestParameters.customFields,
                nationality: requestParameters.nationality,
                maritalStatus: requestParameters.maritalStatus,
                address: requestParameters.address,
                postalCode: requestParameters.postalCode,
                emergencyPhone: requestParameters.emergencyPhone,
                childrenCount: requestParameters.childrenCount,
                disability: requestParameters.disability,
                personalEmail: requestParameters.personalEmail,
                city: requestParameters.city,
                province: requestParameters.province,
                country: requestParameters.country,
                salaryRange: requestParameters.salaryRange,
                studyLevel: requestParameters.studyLevel,
                professionalCategoryCode: requestParameters.professionalCategoryCode,
                professionalCategoryDescription: requestParameters.professionalCategoryDescription,
                bic: requestParameters.bic
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNewEmployee(employeesCreateNewEmployeeRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get an employee
         * @param {EmployeesApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getById(requestParameters: EmployeesApiGetByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeesGetByIdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getById(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary List employees
         * @param {EmployeesApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async list(requestParameters: EmployeesApiListRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeesListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.list(requestParameters.code, requestParameters.dni, requestParameters.email, requestParameters.departmentIds, requestParameters.officeIds, requestParameters.limit, requestParameters.page, requestParameters.orderBy, requestParameters.status, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Delete an employee
         * @param {EmployeesApiRemoveByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async removeById(requestParameters: EmployeesApiRemoveByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeesRemoveByIdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.removeById(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update an employee
         * @param {EmployeesApiUpdateByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateById(requestParameters: EmployeesApiUpdateByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EmployeesUpdateByIdResponse>> {
            const employeesUpdateByIdRequest: EmployeesUpdateByIdRequest = {
                description: requestParameters.description,
                firstName: requestParameters.firstName,
                lastName: requestParameters.lastName,
                status: requestParameters.status,
                gender: requestParameters.gender,
                email: requestParameters.email,
                contractId: requestParameters.contractId,
                code: requestParameters.code,
                pin: requestParameters.pin,
                nid: requestParameters.nid,
                identityNumberType: requestParameters.identityNumberType,
                ssn: requestParameters.ssn,
                phone: requestParameters.phone,
                dateOfBirth: requestParameters.dateOfBirth,
                customFields: requestParameters.customFields,
                nationality: requestParameters.nationality,
                maritalStatus: requestParameters.maritalStatus,
                address: requestParameters.address,
                postalCode: requestParameters.postalCode,
                emergencyPhone: requestParameters.emergencyPhone,
                childrenCount: requestParameters.childrenCount,
                disability: requestParameters.disability,
                personalEmail: requestParameters.personalEmail,
                city: requestParameters.city,
                province: requestParameters.province,
                country: requestParameters.country,
                salaryRange: requestParameters.salaryRange,
                studyLevel: requestParameters.studyLevel,
                professionalCategoryCode: requestParameters.professionalCategoryCode,
                professionalCategoryDescription: requestParameters.professionalCategoryDescription,
                bic: requestParameters.bic,
                accountNumber: requestParameters.accountNumber
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateById(requestParameters.id, employeesUpdateByIdRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EmployeesApi - factory interface
 * @export
 */
export const EmployeesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EmployeesApiFp(configuration)
    return {
        /**
         * 
         * @summary Create an employee
         * @param {EmployeesApiCreateNewEmployeeRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNewEmployee(requestParameters: EmployeesApiCreateNewEmployeeRequest, options?: AxiosRequestConfig): AxiosPromise<EmployeesCreateNewEmployeeResponse> {
            return localVarFp.createNewEmployee(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get an employee
         * @param {EmployeesApiGetByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getById(requestParameters: EmployeesApiGetByIdRequest, options?: AxiosRequestConfig): AxiosPromise<EmployeesGetByIdResponse> {
            return localVarFp.getById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary List employees
         * @param {EmployeesApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list(requestParameters: EmployeesApiListRequest = {}, options?: AxiosRequestConfig): AxiosPromise<EmployeesListResponse> {
            return localVarFp.list(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete an employee
         * @param {EmployeesApiRemoveByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        removeById(requestParameters: EmployeesApiRemoveByIdRequest, options?: AxiosRequestConfig): AxiosPromise<EmployeesRemoveByIdResponse> {
            return localVarFp.removeById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update an employee
         * @param {EmployeesApiUpdateByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateById(requestParameters: EmployeesApiUpdateByIdRequest, options?: AxiosRequestConfig): AxiosPromise<EmployeesUpdateByIdResponse> {
            return localVarFp.updateById(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createNewEmployee operation in EmployeesApi.
 * @export
 * @interface EmployeesApiCreateNewEmployeeRequest
 */
export type EmployeesApiCreateNewEmployeeRequest = {
    
} & EmployeesCreateNewEmployeeRequest

/**
 * Request parameters for getById operation in EmployeesApi.
 * @export
 * @interface EmployeesApiGetByIdRequest
 */
export type EmployeesApiGetByIdRequest = {
    
    /**
    * Employee ID
    * @type {string}
    * @memberof EmployeesApiGetById
    */
    readonly id: string
    
}

/**
 * Request parameters for list operation in EmployeesApi.
 * @export
 * @interface EmployeesApiListRequest
 */
export type EmployeesApiListRequest = {
    
    /**
    * Find Employee by code
    * @type {number}
    * @memberof EmployeesApiList
    */
    readonly code?: number
    
    /**
    * Find Employee by dni
    * @type {string}
    * @memberof EmployeesApiList
    */
    readonly dni?: string
    
    /**
    * Find Employee by email
    * @type {string}
    * @memberof EmployeesApiList
    */
    readonly email?: string
    
    /**
    * Find Employee by department Ids
    * @type {Array<string>}
    * @memberof EmployeesApiList
    */
    readonly departmentIds?: Array<string>
    
    /**
    * Find Employee by office Ids
    * @type {Array<string>}
    * @memberof EmployeesApiList
    */
    readonly officeIds?: Array<string>
    
    /**
    * Limit employees
    * @type {number}
    * @memberof EmployeesApiList
    */
    readonly limit?: number
    
    /**
    * Request a specific page
    * @type {number}
    * @memberof EmployeesApiList
    */
    readonly page?: number
    
    /**
    * field1 asc, field2 desc
    * @type {string}
    * @memberof EmployeesApiList
    */
    readonly orderBy?: string
    
    /**
    * <b>Supported operators:</b> in
    * @type {'active' | 'inactive'}
    * @memberof EmployeesApiList
    */
    readonly status?: 'active' | 'inactive'
    
}

/**
 * Request parameters for removeById operation in EmployeesApi.
 * @export
 * @interface EmployeesApiRemoveByIdRequest
 */
export type EmployeesApiRemoveByIdRequest = {
    
    /**
    * Employee ID
    * @type {string}
    * @memberof EmployeesApiRemoveById
    */
    readonly id: string
    
}

/**
 * Request parameters for updateById operation in EmployeesApi.
 * @export
 * @interface EmployeesApiUpdateByIdRequest
 */
export type EmployeesApiUpdateByIdRequest = {
    
    /**
    * Employee ID
    * @type {string}
    * @memberof EmployeesApiUpdateById
    */
    readonly id: string
    
} & EmployeesUpdateByIdRequest

/**
 * EmployeesApiGenerated - object-oriented interface
 * @export
 * @class EmployeesApiGenerated
 * @extends {BaseAPI}
 */
export class EmployeesApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Create an employee
     * @param {EmployeesApiCreateNewEmployeeRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeesApiGenerated
     */
    public createNewEmployee(requestParameters: EmployeesApiCreateNewEmployeeRequest, options?: AxiosRequestConfig) {
        return EmployeesApiFp(this.configuration).createNewEmployee(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get an employee
     * @param {EmployeesApiGetByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeesApiGenerated
     */
    public getById(requestParameters: EmployeesApiGetByIdRequest, options?: AxiosRequestConfig) {
        return EmployeesApiFp(this.configuration).getById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary List employees
     * @param {EmployeesApiListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeesApiGenerated
     */
    public list(requestParameters: EmployeesApiListRequest = {}, options?: AxiosRequestConfig) {
        return EmployeesApiFp(this.configuration).list(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Delete an employee
     * @param {EmployeesApiRemoveByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeesApiGenerated
     */
    public removeById(requestParameters: EmployeesApiRemoveByIdRequest, options?: AxiosRequestConfig) {
        return EmployeesApiFp(this.configuration).removeById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update an employee
     * @param {EmployeesApiUpdateByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmployeesApiGenerated
     */
    public updateById(requestParameters: EmployeesApiUpdateByIdRequest, options?: AxiosRequestConfig) {
        return EmployeesApiFp(this.configuration).updateById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
