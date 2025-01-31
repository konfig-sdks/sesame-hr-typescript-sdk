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
import { RecruitmentCreateCandidateRequest } from '../models';
// @ts-ignore
import { RecruitmentCreateCandidateResponse } from '../models';
// @ts-ignore
import { RecruitmentGetCandidateByIdResponse } from '../models';
// @ts-ignore
import { RecruitmentGetCandidateStatusListResponse } from '../models';
// @ts-ignore
import { RecruitmentGetVacancyResponse } from '../models';
// @ts-ignore
import { RecruitmentListVacanciesResponse } from '../models';
// @ts-ignore
import { RecruitmentUpdateCandidateRequest } from '../models';
// @ts-ignore
import { RecruitmentUpdateCandidateResponse } from '../models';
// @ts-ignore
import { RecruitmentUploadCandidateDocumentRequest } from '../models';
// @ts-ignore
import { RecruitmentUploadCandidateDocumentResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * RecruitmentApi - axios parameter creator
 * @export
 */
export const RecruitmentApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create a candidate
         * @param {RecruitmentCreateCandidateRequest} recruitmentCreateCandidateRequest Candidate object that needs to be created
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCandidate: async (recruitmentCreateCandidateRequest: RecruitmentCreateCandidateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'recruitmentCreateCandidateRequest' is not null or undefined
            assertParamExists('createCandidate', 'recruitmentCreateCandidateRequest', recruitmentCreateCandidateRequest)
            const localVarPath = `/recruitment/v1/candidates`;
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
                requestBody: recruitmentCreateCandidateRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/recruitment/v1/candidates',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(recruitmentCreateCandidateRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get a candidate
         * @param {string} id Candidate ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCandidateById: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getCandidateById', 'id', id)
            const localVarPath = `/recruitment/v1/candidates/{id}`
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
                pathTemplate: '/recruitment/v1/candidates/{id}',
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
         * @summary Get candidate status list
         * @param {string} vacancyId Vacancy ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCandidateStatusList: async (vacancyId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'vacancyId' is not null or undefined
            assertParamExists('getCandidateStatusList', 'vacancyId', vacancyId)
            const localVarPath = `/recruitment/v1/candidate-status/{vacancyId}`
                .replace(`{${"vacancyId"}}`, encodeURIComponent(String(vacancyId !== undefined ? vacancyId : `-vacancyId-`)));
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
                pathTemplate: '/recruitment/v1/candidate-status/{vacancyId}',
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
         * @summary Get a vacancy
         * @param {string} id Vacancy ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVacancy: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getVacancy', 'id', id)
            const localVarPath = `/recruitment/v1/vacancies/{id}`
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
                pathTemplate: '/recruitment/v1/vacancies/{id}',
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
         * @summary Get vacancies list
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listVacancies: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/recruitment/v1/vacancies`;
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
                pathTemplate: '/recruitment/v1/vacancies',
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
         * @summary Update a candidate
         * @param {string} id Candidate ID
         * @param {RecruitmentUpdateCandidateRequest} recruitmentUpdateCandidateRequest Candidate object that needs to be updated
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCandidate: async (id: string, recruitmentUpdateCandidateRequest: RecruitmentUpdateCandidateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateCandidate', 'id', id)
            // verify required parameter 'recruitmentUpdateCandidateRequest' is not null or undefined
            assertParamExists('updateCandidate', 'recruitmentUpdateCandidateRequest', recruitmentUpdateCandidateRequest)
            const localVarPath = `/recruitment/v1/candidates/{id}`
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
                requestBody: recruitmentUpdateCandidateRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/recruitment/v1/candidates/{id}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(recruitmentUpdateCandidateRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Upload candidate document
         * @param {string} id Candidate ID
         * @param {Uint8Array | File | buffer.File} document Document to upload
         * @param {RecruitmentUploadCandidateDocumentRequest} recruitmentUploadCandidateDocumentRequest Document to upload
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadCandidateDocument: async (id: string, document: Uint8Array | File | buffer.File, recruitmentUploadCandidateDocumentRequest: RecruitmentUploadCandidateDocumentRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('uploadCandidateDocument', 'id', id)
            // verify required parameter 'document' is not null or undefined
            assertParamExists('uploadCandidateDocument', 'document', document)
            // verify required parameter 'recruitmentUploadCandidateDocumentRequest' is not null or undefined
            assertParamExists('uploadCandidateDocument', 'recruitmentUploadCandidateDocumentRequest', recruitmentUploadCandidateDocumentRequest)
            const localVarPath = `/recruitment/v1/candidates/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();
            const addFormParam = async (name: string, data: any, isBinary: boolean, isPrimitiveType: boolean) => {
                if (isBinary) {
                    if (data instanceof Uint8Array) {
                        // Handle Buffer data
                        const filetype = await fromBuffer(data)
                        const filename = filetype === undefined ? name : `${name}.${filetype.ext}`
                        localVarFormParams.append(name, data as any, filename);
                    } else if ("name" in data) {
                        // File instances in browsers and Node.js have the
                        // "name" property "Duck typing" files to handle browser
                        // File class or Node.js File class
                        // Web: https://developer.mozilla.org/en-US/docs/Web/API/File
                        // Node.js: https://nodejs.org/api/buffer.html#new-bufferfilesources-filename-options
                        if (isBrowser()) {
                            // FormData in browser can accept File/Blob directly
                            localVarFormParams.append(name, data, data.name);
                        } else {
                            // FormData in Node.js can only accept raw Buffer so convert before passing
                            const bytes = await data.arrayBuffer()
                            const buffer = Buffer.from(bytes)
                            localVarFormParams.append(name, buffer, data.name);
                        }
                    }
                } else {
                    if (isPrimitiveType) {
                        /**
                         * FormData can only accept string or Blob so we need to convert
                         * non-string primitives to string. We also need to convert
                         */
                        if (typeof data === "object") {
                          localVarFormParams.append(name, JSON.stringify(data));
                        } else {
                          localVarFormParams.append(name, data);
                        }
                    } else {
                        if (isBrowser()) {
                            localVarFormParams.append(name, new Blob([JSON.stringify(data)], { type: "application/json" }))
                        } else {
                            localVarFormParams.append(name, JSON.stringify(data), { type: "application/json", filename: "data.json" });
                        }
                    }
                }
            }
            if (!isBrowser()) Object.assign(localVarHeaderParameter, localVarFormParams.getHeaders());

            // authentication Bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (document !== undefined) {
                await addFormParam('document', document, true, true)
            }
    
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;
            requestBeforeHook({
                requestBody: recruitmentUploadCandidateDocumentRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/recruitment/v1/candidates/{id}',
                httpMethod: 'POST'
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
 * RecruitmentApi - functional programming interface
 * @export
 */
export const RecruitmentApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = RecruitmentApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create a candidate
         * @param {RecruitmentApiCreateCandidateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createCandidate(requestParameters: RecruitmentApiCreateCandidateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecruitmentCreateCandidateResponse>> {
            const recruitmentCreateCandidateRequest: RecruitmentCreateCandidateRequest = {
                firstName: requestParameters.firstName,
                lastName: requestParameters.lastName,
                email: requestParameters.email,
                phone: requestParameters.phone,
                linkedinURL: requestParameters.linkedinURL,
                desiredSalary: requestParameters.desiredSalary,
                startWorkDate: requestParameters.startWorkDate,
                web: requestParameters.web,
                location: requestParameters.location,
                vacancyId: requestParameters.vacancyId,
                statusId: requestParameters.statusId
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createCandidate(recruitmentCreateCandidateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get a candidate
         * @param {RecruitmentApiGetCandidateByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCandidateById(requestParameters: RecruitmentApiGetCandidateByIdRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecruitmentGetCandidateByIdResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCandidateById(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get candidate status list
         * @param {RecruitmentApiGetCandidateStatusListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCandidateStatusList(requestParameters: RecruitmentApiGetCandidateStatusListRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecruitmentGetCandidateStatusListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCandidateStatusList(requestParameters.vacancyId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get a vacancy
         * @param {RecruitmentApiGetVacancyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getVacancy(requestParameters: RecruitmentApiGetVacancyRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecruitmentGetVacancyResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getVacancy(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Get vacancies list
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listVacancies(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecruitmentListVacanciesResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listVacancies(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Update a candidate
         * @param {RecruitmentApiUpdateCandidateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateCandidate(requestParameters: RecruitmentApiUpdateCandidateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecruitmentUpdateCandidateResponse>> {
            const recruitmentUpdateCandidateRequest: RecruitmentUpdateCandidateRequest = {
                firstName: requestParameters.firstName,
                lastName: requestParameters.lastName,
                email: requestParameters.email,
                phone: requestParameters.phone,
                linkedinURL: requestParameters.linkedinURL,
                desiredSalary: requestParameters.desiredSalary,
                startWorkDate: requestParameters.startWorkDate,
                web: requestParameters.web,
                location: requestParameters.location,
                vacancyId: requestParameters.vacancyId,
                statusId: requestParameters.statusId
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateCandidate(requestParameters.id, recruitmentUpdateCandidateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Upload candidate document
         * @param {RecruitmentApiUploadCandidateDocumentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async uploadCandidateDocument(requestParameters: RecruitmentApiUploadCandidateDocumentRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecruitmentUploadCandidateDocumentResponse>> {
            const recruitmentUploadCandidateDocumentRequest: RecruitmentUploadCandidateDocumentRequest = {
                document: requestParameters.document
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.uploadCandidateDocument(requestParameters.id, requestParameters.document, recruitmentUploadCandidateDocumentRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * RecruitmentApi - factory interface
 * @export
 */
export const RecruitmentApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = RecruitmentApiFp(configuration)
    return {
        /**
         * 
         * @summary Create a candidate
         * @param {RecruitmentApiCreateCandidateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCandidate(requestParameters: RecruitmentApiCreateCandidateRequest, options?: AxiosRequestConfig): AxiosPromise<RecruitmentCreateCandidateResponse> {
            return localVarFp.createCandidate(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get a candidate
         * @param {RecruitmentApiGetCandidateByIdRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCandidateById(requestParameters: RecruitmentApiGetCandidateByIdRequest, options?: AxiosRequestConfig): AxiosPromise<RecruitmentGetCandidateByIdResponse> {
            return localVarFp.getCandidateById(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get candidate status list
         * @param {RecruitmentApiGetCandidateStatusListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCandidateStatusList(requestParameters: RecruitmentApiGetCandidateStatusListRequest, options?: AxiosRequestConfig): AxiosPromise<RecruitmentGetCandidateStatusListResponse> {
            return localVarFp.getCandidateStatusList(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get a vacancy
         * @param {RecruitmentApiGetVacancyRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVacancy(requestParameters: RecruitmentApiGetVacancyRequest, options?: AxiosRequestConfig): AxiosPromise<RecruitmentGetVacancyResponse> {
            return localVarFp.getVacancy(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get vacancies list
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listVacancies(options?: AxiosRequestConfig): AxiosPromise<RecruitmentListVacanciesResponse> {
            return localVarFp.listVacancies(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Update a candidate
         * @param {RecruitmentApiUpdateCandidateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCandidate(requestParameters: RecruitmentApiUpdateCandidateRequest, options?: AxiosRequestConfig): AxiosPromise<RecruitmentUpdateCandidateResponse> {
            return localVarFp.updateCandidate(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Upload candidate document
         * @param {RecruitmentApiUploadCandidateDocumentRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadCandidateDocument(requestParameters: RecruitmentApiUploadCandidateDocumentRequest, options?: AxiosRequestConfig): AxiosPromise<RecruitmentUploadCandidateDocumentResponse> {
            return localVarFp.uploadCandidateDocument(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createCandidate operation in RecruitmentApi.
 * @export
 * @interface RecruitmentApiCreateCandidateRequest
 */
export type RecruitmentApiCreateCandidateRequest = {
    
} & RecruitmentCreateCandidateRequest

/**
 * Request parameters for getCandidateById operation in RecruitmentApi.
 * @export
 * @interface RecruitmentApiGetCandidateByIdRequest
 */
export type RecruitmentApiGetCandidateByIdRequest = {
    
    /**
    * Candidate ID
    * @type {string}
    * @memberof RecruitmentApiGetCandidateById
    */
    readonly id: string
    
}

/**
 * Request parameters for getCandidateStatusList operation in RecruitmentApi.
 * @export
 * @interface RecruitmentApiGetCandidateStatusListRequest
 */
export type RecruitmentApiGetCandidateStatusListRequest = {
    
    /**
    * Vacancy ID
    * @type {string}
    * @memberof RecruitmentApiGetCandidateStatusList
    */
    readonly vacancyId: string
    
}

/**
 * Request parameters for getVacancy operation in RecruitmentApi.
 * @export
 * @interface RecruitmentApiGetVacancyRequest
 */
export type RecruitmentApiGetVacancyRequest = {
    
    /**
    * Vacancy ID
    * @type {string}
    * @memberof RecruitmentApiGetVacancy
    */
    readonly id: string
    
}

/**
 * Request parameters for updateCandidate operation in RecruitmentApi.
 * @export
 * @interface RecruitmentApiUpdateCandidateRequest
 */
export type RecruitmentApiUpdateCandidateRequest = {
    
    /**
    * Candidate ID
    * @type {string}
    * @memberof RecruitmentApiUpdateCandidate
    */
    readonly id: string
    
} & RecruitmentUpdateCandidateRequest

/**
 * Request parameters for uploadCandidateDocument operation in RecruitmentApi.
 * @export
 * @interface RecruitmentApiUploadCandidateDocumentRequest
 */
export type RecruitmentApiUploadCandidateDocumentRequest = {
    
    /**
    * Candidate ID
    * @type {string}
    * @memberof RecruitmentApiUploadCandidateDocument
    */
    readonly id: string
    
    /**
    * Document to upload
    * @type {Uint8Array | File | buffer.File}
    * @memberof RecruitmentApiUploadCandidateDocument
    */
    readonly document: Uint8Array | File | buffer.File
    
} & RecruitmentUploadCandidateDocumentRequest

/**
 * RecruitmentApiGenerated - object-oriented interface
 * @export
 * @class RecruitmentApiGenerated
 * @extends {BaseAPI}
 */
export class RecruitmentApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Create a candidate
     * @param {RecruitmentApiCreateCandidateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecruitmentApiGenerated
     */
    public createCandidate(requestParameters: RecruitmentApiCreateCandidateRequest, options?: AxiosRequestConfig) {
        return RecruitmentApiFp(this.configuration).createCandidate(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get a candidate
     * @param {RecruitmentApiGetCandidateByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecruitmentApiGenerated
     */
    public getCandidateById(requestParameters: RecruitmentApiGetCandidateByIdRequest, options?: AxiosRequestConfig) {
        return RecruitmentApiFp(this.configuration).getCandidateById(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get candidate status list
     * @param {RecruitmentApiGetCandidateStatusListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecruitmentApiGenerated
     */
    public getCandidateStatusList(requestParameters: RecruitmentApiGetCandidateStatusListRequest, options?: AxiosRequestConfig) {
        return RecruitmentApiFp(this.configuration).getCandidateStatusList(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get a vacancy
     * @param {RecruitmentApiGetVacancyRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecruitmentApiGenerated
     */
    public getVacancy(requestParameters: RecruitmentApiGetVacancyRequest, options?: AxiosRequestConfig) {
        return RecruitmentApiFp(this.configuration).getVacancy(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Get vacancies list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecruitmentApiGenerated
     */
    public listVacancies(options?: AxiosRequestConfig) {
        return RecruitmentApiFp(this.configuration).listVacancies(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Update a candidate
     * @param {RecruitmentApiUpdateCandidateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecruitmentApiGenerated
     */
    public updateCandidate(requestParameters: RecruitmentApiUpdateCandidateRequest, options?: AxiosRequestConfig) {
        return RecruitmentApiFp(this.configuration).updateCandidate(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Upload candidate document
     * @param {RecruitmentApiUploadCandidateDocumentRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecruitmentApiGenerated
     */
    public uploadCandidateDocument(requestParameters: RecruitmentApiUploadCandidateDocumentRequest, options?: AxiosRequestConfig) {
        return RecruitmentApiFp(this.configuration).uploadCandidateDocument(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
