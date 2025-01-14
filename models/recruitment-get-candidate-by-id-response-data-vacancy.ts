/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { RecruitmentGetCandidateByIdResponseDataVacancyCategory } from './recruitment-get-candidate-by-id-response-data-vacancy-category';
import { RecruitmentGetCandidateByIdResponseDataVacancyLocationVacancy } from './recruitment-get-candidate-by-id-response-data-vacancy-location-vacancy';
import { RecruitmentGetCandidateByIdResponseDataVacancyScheduleType } from './recruitment-get-candidate-by-id-response-data-vacancy-schedule-type';

/**
 * 
 * @export
 * @interface RecruitmentGetCandidateByIdResponseDataVacancy
 */
export interface RecruitmentGetCandidateByIdResponseDataVacancy {
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetCandidateByIdResponseDataVacancy
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetCandidateByIdResponseDataVacancy
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetCandidateByIdResponseDataVacancy
     */
    'companyId'?: string;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetCandidateByIdResponseDataVacancy
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetCandidateByIdResponseDataVacancy
     */
    'department'?: string;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetCandidateByIdResponseDataVacancy
     */
    'contactType'?: string;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetCandidateByIdResponseDataVacancy
     */
    'experience'?: string;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetCandidateByIdResponseDataVacancy
     */
    'createdById'?: string;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetCandidateByIdResponseDataVacancy
     */
    'status'?: RecruitmentGetCandidateByIdResponseDataVacancyStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetCandidateByIdResponseDataVacancy
     */
    'openedAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetCandidateByIdResponseDataVacancy
     */
    'createdAt'?: string;
    /**
     * 
     * @type {string}
     * @memberof RecruitmentGetCandidateByIdResponseDataVacancy
     */
    'updatedAt'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof RecruitmentGetCandidateByIdResponseDataVacancy
     */
    'public'?: boolean;
    /**
     * 
     * @type {RecruitmentGetCandidateByIdResponseDataVacancyLocationVacancy}
     * @memberof RecruitmentGetCandidateByIdResponseDataVacancy
     */
    'locationVacancy'?: RecruitmentGetCandidateByIdResponseDataVacancyLocationVacancy;
    /**
     * 
     * @type {RecruitmentGetCandidateByIdResponseDataVacancyScheduleType}
     * @memberof RecruitmentGetCandidateByIdResponseDataVacancy
     */
    'scheduleType'?: RecruitmentGetCandidateByIdResponseDataVacancyScheduleType;
    /**
     * 
     * @type {RecruitmentGetCandidateByIdResponseDataVacancyCategory}
     * @memberof RecruitmentGetCandidateByIdResponseDataVacancy
     */
    'category'?: RecruitmentGetCandidateByIdResponseDataVacancyCategory;
}

type RecruitmentGetCandidateByIdResponseDataVacancyStatusEnum = 'open' | 'closed' | 'draft'


