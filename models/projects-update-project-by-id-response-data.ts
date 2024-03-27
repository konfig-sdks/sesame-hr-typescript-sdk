/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ProjectsUpdateProjectByIdResponseDataCustomer } from './projects-update-project-by-id-response-data-customer';
import { ProjectsUpdateProjectByIdResponseDataManager } from './projects-update-project-by-id-response-data-manager';
import { ProjectsUpdateProjectByIdResponseDataParentProject } from './projects-update-project-by-id-response-data-parent-project';

/**
 * 
 * @export
 * @interface ProjectsUpdateProjectByIdResponseData
 */
export interface ProjectsUpdateProjectByIdResponseData {
    /**
     * 
     * @type {string}
     * @memberof ProjectsUpdateProjectByIdResponseData
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsUpdateProjectByIdResponseData
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsUpdateProjectByIdResponseData
     */
    'name'?: string;
    /**
     * 
     * @type {ProjectsUpdateProjectByIdResponseDataParentProject}
     * @memberof ProjectsUpdateProjectByIdResponseData
     */
    'parentProject'?: ProjectsUpdateProjectByIdResponseDataParentProject | null;
    /**
     * 
     * @type {ProjectsUpdateProjectByIdResponseDataCustomer}
     * @memberof ProjectsUpdateProjectByIdResponseData
     */
    'customer'?: ProjectsUpdateProjectByIdResponseDataCustomer;
    /**
     * 
     * @type {number}
     * @memberof ProjectsUpdateProjectByIdResponseData
     */
    'price'?: number;
    /**
     * 
     * @type {string}
     * @memberof ProjectsUpdateProjectByIdResponseData
     */
    'startDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsUpdateProjectByIdResponseData
     */
    'endDate'?: string;
    /**
     * 
     * @type {ProjectsUpdateProjectByIdResponseDataManager}
     * @memberof ProjectsUpdateProjectByIdResponseData
     */
    'manager'?: ProjectsUpdateProjectByIdResponseDataManager;
    /**
     * 
     * @type {string}
     * @memberof ProjectsUpdateProjectByIdResponseData
     */
    'status'?: ProjectsUpdateProjectByIdResponseDataStatusEnum;
}

type ProjectsUpdateProjectByIdResponseDataStatusEnum = 'active' | 'inactive' | 'paused'

