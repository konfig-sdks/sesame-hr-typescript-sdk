/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { RecruitmentListVacanciesResponseDataInner } from './recruitment-list-vacancies-response-data-inner';
import { RecruitmentListVacanciesResponseMeta } from './recruitment-list-vacancies-response-meta';

/**
 * 
 * @export
 * @interface RecruitmentListVacanciesResponse
 */
export interface RecruitmentListVacanciesResponse {
    /**
     * 
     * @type {Array<RecruitmentListVacanciesResponseDataInner>}
     * @memberof RecruitmentListVacanciesResponse
     */
    'data'?: Array<RecruitmentListVacanciesResponseDataInner>;
    /**
     * 
     * @type {RecruitmentListVacanciesResponseMeta}
     * @memberof RecruitmentListVacanciesResponse
     */
    'meta'?: RecruitmentListVacanciesResponseMeta;
}

