/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ProjectsListResponseDataInnerParentProjectCustomer } from './projects-list-response-data-inner-parent-project-customer';
import { ProjectsListResponseDataInnerParentProjectManager } from './projects-list-response-data-inner-parent-project-manager';

/**
 * 
 * @export
 * @interface ProjectsListResponseDataInnerParentProject
 */
export interface ProjectsListResponseDataInnerParentProject {
    /**
     * 
     * @type {string}
     * @memberof ProjectsListResponseDataInnerParentProject
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsListResponseDataInnerParentProject
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsListResponseDataInnerParentProject
     */
    'name'?: string;
    /**
     * 
     * @type {object}
     * @memberof ProjectsListResponseDataInnerParentProject
     */
    'parentProject'?: object | null;
    /**
     * 
     * @type {ProjectsListResponseDataInnerParentProjectCustomer}
     * @memberof ProjectsListResponseDataInnerParentProject
     */
    'customer'?: ProjectsListResponseDataInnerParentProjectCustomer;
    /**
     * 
     * @type {number}
     * @memberof ProjectsListResponseDataInnerParentProject
     */
    'price'?: number;
    /**
     * 
     * @type {string}
     * @memberof ProjectsListResponseDataInnerParentProject
     */
    'startDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectsListResponseDataInnerParentProject
     */
    'endDate'?: string;
    /**
     * 
     * @type {ProjectsListResponseDataInnerParentProjectManager}
     * @memberof ProjectsListResponseDataInnerParentProject
     */
    'manager'?: ProjectsListResponseDataInnerParentProjectManager;
    /**
     * 
     * @type {string}
     * @memberof ProjectsListResponseDataInnerParentProject
     */
    'status'?: ProjectsListResponseDataInnerParentProjectStatusEnum;
}

type ProjectsListResponseDataInnerParentProjectStatusEnum = 'active' | 'inactive' | 'paused'

