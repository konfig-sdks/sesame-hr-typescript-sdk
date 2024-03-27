/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { RecruitmentUpdateCandidateResponseData } from './recruitment-update-candidate-response-data';
import { RecruitmentUpdateCandidateResponseMeta } from './recruitment-update-candidate-response-meta';

/**
 * 
 * @export
 * @interface RecruitmentUpdateCandidateResponse
 */
export interface RecruitmentUpdateCandidateResponse {
    /**
     * 
     * @type {RecruitmentUpdateCandidateResponseData}
     * @memberof RecruitmentUpdateCandidateResponse
     */
    'data'?: RecruitmentUpdateCandidateResponseData;
    /**
     * 
     * @type {RecruitmentUpdateCandidateResponseMeta}
     * @memberof RecruitmentUpdateCandidateResponse
     */
    'meta'?: RecruitmentUpdateCandidateResponseMeta;
}
