/*
Sesame Public API

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)

The version of the OpenAPI document: 3.0.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface DocumentsUploadNewDocumentRequest
 */
export interface DocumentsUploadNewDocumentRequest {
    /**
     * Document to upload
     * @type {Uint8Array | File | buffer.File}
     * @memberof DocumentsUploadNewDocumentRequest
     */
    'document': Uint8Array | File | buffer.File;
    /**
     * Original date of document (Required for payrolls)
     * @type {string}
     * @memberof DocumentsUploadNewDocumentRequest
     */
    'originalDate'?: string;
    /**
     * Name for the document
     * @type {string}
     * @memberof DocumentsUploadNewDocumentRequest
     */
    'name'?: string;
}

