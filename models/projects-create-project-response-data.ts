/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ProjectsCreateProjectResponseDataCustomer } from './projects-create-project-response-data-customer';
import { ProjectsCreateProjectResponseDataManager } from './projects-create-project-response-data-manager';
import { ProjectsCreateProjectResponseDataParentProject } from './projects-create-project-response-data-parent-project';

/**
 * 
 * @export
 * @interface ProjectsCreateProjectResponseData
 */
export interface ProjectsCreateProjectResponseData {
    /**
     * 
     * @type {string}
     * @memberof ProjectsCreateProjectResponseData
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsCreateProjectResponseData
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsCreateProjectResponseData
     */
    'name'?: string;
    /**
     * 
     * @type {ProjectsCreateProjectResponseDataParentProject}
     * @memberof ProjectsCreateProjectResponseData
     */
    'parentProject'?: ProjectsCreateProjectResponseDataParentProject | null;
    /**
     * 
     * @type {ProjectsCreateProjectResponseDataCustomer}
     * @memberof ProjectsCreateProjectResponseData
     */
    'customer'?: ProjectsCreateProjectResponseDataCustomer;
    /**
     * 
     * @type {number}
     * @memberof ProjectsCreateProjectResponseData
     */
    'price'?: number;
    /**
     * 
     * @type {string}
     * @memberof ProjectsCreateProjectResponseData
     */
    'startDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsCreateProjectResponseData
     */
    'endDate'?: string;
    /**
     * 
     * @type {ProjectsCreateProjectResponseDataManager}
     * @memberof ProjectsCreateProjectResponseData
     */
    'manager'?: ProjectsCreateProjectResponseDataManager;
    /**
     * 
     * @type {string}
     * @memberof ProjectsCreateProjectResponseData
     */
    'status'?: ProjectsCreateProjectResponseDataStatusEnum;
}

type ProjectsCreateProjectResponseDataStatusEnum = 'active' | 'inactive' | 'paused'


