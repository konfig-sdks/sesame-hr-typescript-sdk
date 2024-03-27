/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { RecruitmentGetCandidateByIdResponseDataStatus } from './recruitment-get-candidate-by-id-response-data-status';
import { RecruitmentGetCandidateByIdResponseDataVacancy } from './recruitment-get-candidate-by-id-response-data-vacancy';

/**
 * 
 * @export
 * @interface RecruitmentGetCandidateByIdResponseData
 */
export interface RecruitmentGetCandidateByIdResponseData {
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetCandidateByIdResponseData
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetCandidateByIdResponseData
     */
    'companyId'?: string;
    /**
     * 
     * @type {RecruitmentGetCandidateByIdResponseDataVacancy}
     * @memberof RecruitmentGetCandidateByIdResponseData
     */
    'vacancy'?: RecruitmentGetCandidateByIdResponseDataVacancy;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetCandidateByIdResponseData
     */
    'vacancyId'?: string;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetCandidateByIdResponseData
     */
    'firstName'?: string;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetCandidateByIdResponseData
     */
    'lastName'?: string;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetCandidateByIdResponseData
     */
    'email'?: string;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetCandidateByIdResponseData
     */
    'phone'?: string;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetCandidateByIdResponseData
     */
    'type'?: string;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetCandidateByIdResponseData
     */
    'statusId'?: string;
    /**
     * 
     * @type {RecruitmentGetCandidateByIdResponseDataStatus}
     * @memberof RecruitmentGetCandidateByIdResponseData
     */
    'status'?: RecruitmentGetCandidateByIdResponseDataStatus;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetCandidateByIdResponseData
     */
    'linkedInURL'?: string;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetCandidateByIdResponseData
     */
    'desiredSalary'?: string;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetCandidateByIdResponseData
     */
    'startWorkDate'?: string;
    /**
     * 
     * @type {number}
     * @memberof RecruitmentGetCandidateByIdResponseData
     */
    'evaluation'?: number;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetCandidateByIdResponseData
     */
    'web'?: string;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetCandidateByIdResponseData
     */
    'location'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RecruitmentGetCandidateByIdResponseData
     */
    'hasDocument'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetCandidateByIdResponseData
     */
    'comment'?: string;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetCandidateByIdResponseData
     */
    'appliedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetCandidateByIdResponseData
     */
    'threadId'?: string;
    /**
     * 
     * @type {object}
     * @memberof RecruitmentGetCandidateByIdResponseData
     */
    'lastComment'?: object;
    /**
     * 
     * @type {number}
     * @memberof RecruitmentGetCandidateByIdResponseData
     */
    'numComments'?: number;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetCandidateByIdResponseData
     */
    'imageProfileURL'?: string;
    /**
     * 
     * @type {object}
     * @memberof RecruitmentGetCandidateByIdResponseData
     */
    'checklist'?: object;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetCandidateByIdResponseData
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetCandidateByIdResponseData
     */
    'updatedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetCandidateByIdResponseData
     */
    'employeeId'?: string;
}

