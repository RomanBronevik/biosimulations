/**
 * BioSimulations Data Service
 * RESTful application programming interface documentation for the Biosimulations Data Service, based on the HDF Scalable Data Service (HSDS) from the HDF Group.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: info@biosimulations.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { HttpService } from '@nestjs/axios';
import { Inject, Injectable, Optional } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { InlineObject2 } from '../model/inlineObject2';
import { InlineObject3 } from '../model/inlineObject3';
import { InlineObject4 } from '../model/inlineObject4';
import { InlineObject5 } from '../model/inlineObject5';
import { InlineResponse20010 } from '../model/inlineResponse20010';
import { InlineResponse20011 } from '../model/inlineResponse20011';
import { InlineResponse20014 } from '../model/inlineResponse20014';
import { InlineResponse20015 } from '../model/inlineResponse20015';
import { InlineResponse20016 } from '../model/inlineResponse20016';
import { InlineResponse2006 } from '../model/inlineResponse2006';
import { InlineResponse2007 } from '../model/inlineResponse2007';
import { InlineResponse2008 } from '../model/inlineResponse2008';
import { InlineResponse2009 } from '../model/inlineResponse2009';
import { InlineResponse2012 } from '../model/inlineResponse2012';
import { InlineResponse2013 } from '../model/inlineResponse2013';
import { Configuration } from '../configuration';

@Injectable()
export class DatasetService {
  protected basePath = 'https://data.biosimulations.dev';
  public defaultHeaders: Record<string, string> = {};
  public configuration = new Configuration();

  constructor(protected httpClient: HttpService, @Optional() configuration: Configuration) {
    this.configuration = configuration || this.configuration;
    this.basePath = configuration?.basePath || this.basePath;
  }

  /**
   * @param consumes string[] mime-types
   * @return true: consumes contains 'multipart/form-data', false: otherwise
   */
  private canConsumeForm(consumes: string[]): boolean {
    const form = 'multipart/form-data';
    return consumes.includes(form);
  }

  /**
   * Get information about an Attribute.
   *
   * @param collection Collection of object (Group, Dataset, or Datatype).
   * @param objUuid UUID of object.
   * @param attr Name of attribute.
   * @param authorization
   * @param domain
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public collectionObjUuidAttributesAttrGet(
    collection: 'groups' | 'datasets' | 'datatypes',
    objUuid: string,
    attr: string,
    authorization?: string,
    domain?: string,
  ): Observable<AxiosResponse<InlineResponse20015>>;
  public collectionObjUuidAttributesAttrGet(
    collection: 'groups' | 'datasets' | 'datatypes',
    objUuid: string,
    attr: string,
    authorization?: string,
    domain?: string,
  ): Observable<any> {
    if (collection === null || collection === undefined) {
      throw new Error(
        'Required parameter collection was null or undefined when calling collectionObjUuidAttributesAttrGet.',
      );
    }

    if (objUuid === null || objUuid === undefined) {
      throw new Error(
        'Required parameter objUuid was null or undefined when calling collectionObjUuidAttributesAttrGet.',
      );
    }

    if (attr === null || attr === undefined) {
      throw new Error('Required parameter attr was null or undefined when calling collectionObjUuidAttributesAttrGet.');
    }

    let queryParameters: any = {};
    if (domain !== undefined && domain !== null) {
      queryParameters['domain'] = <any>domain;
    }

    let headers = this.defaultHeaders;
    if (authorization !== undefined && authorization !== null) {
      headers['Authorization'] = String(authorization);
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = [];
    return this.httpClient.get<InlineResponse20015>(
      `${this.basePath}/${encodeURIComponent(String(collection))}/${encodeURIComponent(
        String(objUuid),
      )}/attributes/${encodeURIComponent(String(attr))}`,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
      },
    );
  }
  /**
   * Create an attribute with name &#x60;attr&#x60; and assign it to HDF5 object &#x60;obj_uudi&#x60;.
   *
   * @param collection The collection of the HDF5 object (&#x60;groups&#x60;, &#x60;datasets&#x60;, or &#x60;datatypes&#x60;).
   * @param objUuid HDF5 object\&#39;s UUID.
   * @param attr Name of attribute.
   * @param body Information to create a new attribute of the HDF5 object &#x60;objUuid&#x60;.
   * @param authorization
   * @param domain
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public collectionObjUuidAttributesAttrPut(
    collection: 'groups' | 'datasets' | 'datatypes',
    objUuid: string,
    attr: string,
    body: object,
    authorization?: string,
    domain?: string,
  ): Observable<AxiosResponse<object>>;
  public collectionObjUuidAttributesAttrPut(
    collection: 'groups' | 'datasets' | 'datatypes',
    objUuid: string,
    attr: string,
    body: object,
    authorization?: string,
    domain?: string,
  ): Observable<any> {
    if (collection === null || collection === undefined) {
      throw new Error(
        'Required parameter collection was null or undefined when calling collectionObjUuidAttributesAttrPut.',
      );
    }

    if (objUuid === null || objUuid === undefined) {
      throw new Error(
        'Required parameter objUuid was null or undefined when calling collectionObjUuidAttributesAttrPut.',
      );
    }

    if (attr === null || attr === undefined) {
      throw new Error('Required parameter attr was null or undefined when calling collectionObjUuidAttributesAttrPut.');
    }

    if (body === null || body === undefined) {
      throw new Error('Required parameter body was null or undefined when calling collectionObjUuidAttributesAttrPut.');
    }

    let queryParameters: any = {};
    if (domain !== undefined && domain !== null) {
      queryParameters['domain'] = <any>domain;
    }

    let headers = this.defaultHeaders;
    if (authorization !== undefined && authorization !== null) {
      headers['Authorization'] = String(authorization);
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];
    const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers['Content-Type'] = httpContentTypeSelected;
    }
    return this.httpClient.put<object>(
      `${this.basePath}/${encodeURIComponent(String(collection))}/${encodeURIComponent(
        String(objUuid),
      )}/attributes/${encodeURIComponent(String(attr))}`,
      body,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
      },
    );
  }
  /**
   * List all Attributes attached to the HDF5 object &#x60;objUuid&#x60;.
   * Attributes sorted alphanumerically by name.
   * @param collection The collection of the HDF5 object (one of: &#x60;groups&#x60;, &#x60;datasets&#x60;, or &#x60;datatypes&#x60;).
   * @param objUuid UUID of object.
   * @param authorization
   * @param domain
   * @param limit Cap the number of Attributes listed. Can be used with &#x60;Marker&#x60;.
   * @param marker Start Attribute listing _after_ the given name.
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public collectionObjUuidAttributesGet(
    collection: 'groups' | 'datasets' | 'datatypes',
    objUuid: string,
    authorization?: string,
    domain?: string,
    limit?: number,
    marker?: string,
  ): Observable<AxiosResponse<InlineResponse20014>>;
  public collectionObjUuidAttributesGet(
    collection: 'groups' | 'datasets' | 'datatypes',
    objUuid: string,
    authorization?: string,
    domain?: string,
    limit?: number,
    marker?: string,
  ): Observable<any> {
    if (collection === null || collection === undefined) {
      throw new Error(
        'Required parameter collection was null or undefined when calling collectionObjUuidAttributesGet.',
      );
    }

    if (objUuid === null || objUuid === undefined) {
      throw new Error('Required parameter objUuid was null or undefined when calling collectionObjUuidAttributesGet.');
    }

    let queryParameters: any = {};
    if (domain !== undefined && domain !== null) {
      queryParameters['domain'] = <any>domain;
    }
    if (limit !== undefined && limit !== null) {
      queryParameters['Limit'] = <any>limit;
    }
    if (marker !== undefined && marker !== null) {
      queryParameters['Marker'] = <any>marker;
    }

    let headers = this.defaultHeaders;
    if (authorization !== undefined && authorization !== null) {
      headers['Authorization'] = String(authorization);
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = [];
    return this.httpClient.get<InlineResponse20014>(
      `${this.basePath}/${encodeURIComponent(String(collection))}/${encodeURIComponent(String(objUuid))}/attributes`,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
      },
    );
  }
  /**
   * List Datasets.
   * Only includes Datasets that are part of the tree linked to the root  Group in the Domain.
   * @param domain
   * @param authorization
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public datasetsGet(domain?: string, authorization?: string): Observable<AxiosResponse<InlineResponse2006>>;
  public datasetsGet(domain?: string, authorization?: string): Observable<any> {
    let queryParameters: any = {};
    if (domain !== undefined && domain !== null) {
      queryParameters['domain'] = <any>domain;
    }

    let headers = this.defaultHeaders;
    if (authorization !== undefined && authorization !== null) {
      headers['Authorization'] = String(authorization);
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = [];
    return this.httpClient.get<InlineResponse2006>(`${this.basePath}/datasets`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
    });
  }
  /**
   * Get access lists on Dataset.
   *
   * @param id UUID of the Dataset.
   * @param domain
   * @param authorization
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public datasetsIdAclsGet(
    id: string,
    domain?: string,
    authorization?: string,
  ): Observable<AxiosResponse<InlineResponse20016>>;
  public datasetsIdAclsGet(id: string, domain?: string, authorization?: string): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling datasetsIdAclsGet.');
    }

    let queryParameters: any = {};
    if (domain !== undefined && domain !== null) {
      queryParameters['domain'] = <any>domain;
    }

    let headers = this.defaultHeaders;
    if (authorization !== undefined && authorization !== null) {
      headers['Authorization'] = String(authorization);
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = [];
    return this.httpClient.get<InlineResponse20016>(
      `${this.basePath}/datasets/${encodeURIComponent(String(id))}/acls`,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
      },
    );
  }
  /**
   * Delete a Dataset.
   * Links to this Dataset are not deleted. TODO: Attributes and commited types are not deleted.
   * @param id UUID of the Dataset.
   * @param domain
   * @param authorization
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public datasetsIdDelete(id: string, domain?: string, authorization?: string): Observable<AxiosResponse<object>>;
  public datasetsIdDelete(id: string, domain?: string, authorization?: string): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling datasetsIdDelete.');
    }

    let queryParameters: any = {};
    if (domain !== undefined && domain !== null) {
      queryParameters['domain'] = <any>domain;
    }

    let headers = this.defaultHeaders;
    if (authorization !== undefined && authorization !== null) {
      headers['Authorization'] = String(authorization);
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = [];
    return this.httpClient.delete<object>(`${this.basePath}/datasets/${encodeURIComponent(String(id))}`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
    });
  }
  /**
   * Get information about a Dataset.
   *
   * @param id UUID of the Dataset.
   * @param domain
   * @param authorization
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public datasetsIdGet(
    id: string,
    domain?: string,
    authorization?: string,
  ): Observable<AxiosResponse<InlineResponse2007>>;
  public datasetsIdGet(id: string, domain?: string, authorization?: string): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling datasetsIdGet.');
    }

    let queryParameters: any = {};
    if (domain !== undefined && domain !== null) {
      queryParameters['domain'] = <any>domain;
    }

    let headers = this.defaultHeaders;
    if (authorization !== undefined && authorization !== null) {
      headers['Authorization'] = String(authorization);
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = [];
    return this.httpClient.get<InlineResponse2007>(`${this.basePath}/datasets/${encodeURIComponent(String(id))}`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
    });
  }
  /**
   * Get information about a Dataset\&#39;s shape.
   *
   * @param id UUID of the Dataset.
   * @param domain
   * @param authorization
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public datasetsIdShapeGet(
    id: string,
    domain?: string,
    authorization?: string,
  ): Observable<AxiosResponse<InlineResponse2008>>;
  public datasetsIdShapeGet(id: string, domain?: string, authorization?: string): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling datasetsIdShapeGet.');
    }

    let queryParameters: any = {};
    if (domain !== undefined && domain !== null) {
      queryParameters['domain'] = <any>domain;
    }

    let headers = this.defaultHeaders;
    if (authorization !== undefined && authorization !== null) {
      headers['Authorization'] = String(authorization);
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = [];
    return this.httpClient.get<InlineResponse2008>(
      `${this.basePath}/datasets/${encodeURIComponent(String(id))}/shape`,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
      },
    );
  }
  /**
   * Modify a Dataset\&#39;s dimensions.
   * Only datasets with &#x60;maxdims&#x60; may be resized. Dataset may not shrink (TODO).
   * @param id UUID of the Dataset.
   * @param inlineObject3
   * @param domain
   * @param authorization
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public datasetsIdShapePut(
    id: string,
    inlineObject3: InlineObject3,
    domain?: string,
    authorization?: string,
  ): Observable<AxiosResponse<InlineResponse2013>>;
  public datasetsIdShapePut(
    id: string,
    inlineObject3: InlineObject3,
    domain?: string,
    authorization?: string,
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling datasetsIdShapePut.');
    }

    if (inlineObject3 === null || inlineObject3 === undefined) {
      throw new Error('Required parameter inlineObject3 was null or undefined when calling datasetsIdShapePut.');
    }

    let queryParameters: any = {};
    if (domain !== undefined && domain !== null) {
      queryParameters['domain'] = <any>domain;
    }

    let headers = this.defaultHeaders;
    if (authorization !== undefined && authorization !== null) {
      headers['Authorization'] = String(authorization);
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];
    const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers['Content-Type'] = httpContentTypeSelected;
    }
    return this.httpClient.put<InlineResponse2013>(
      `${this.basePath}/datasets/${encodeURIComponent(String(id))}/shape`,
      inlineObject3,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
      },
    );
  }
  /**
   * Get information about a Dataset\&#39;s type.
   *
   * @param id UUID of the Dataset.
   * @param domain
   * @param authorization
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public datasetsIdTypeGet(
    id: string,
    domain?: string,
    authorization?: string,
  ): Observable<AxiosResponse<InlineResponse2009>>;
  public datasetsIdTypeGet(id: string, domain?: string, authorization?: string): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling datasetsIdTypeGet.');
    }

    let queryParameters: any = {};
    if (domain !== undefined && domain !== null) {
      queryParameters['domain'] = <any>domain;
    }

    let headers = this.defaultHeaders;
    if (authorization !== undefined && authorization !== null) {
      headers['Authorization'] = String(authorization);
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = [];
    return this.httpClient.get<InlineResponse2009>(`${this.basePath}/datasets/${encodeURIComponent(String(id))}/type`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
    });
  }
  /**
   * Get values from Dataset.
   * Either get the entire Dataset or a selection.
   * @param id UUID of the Dataset.
   * @param domain
   * @param select URL-encoded string representing a selection array. _Example_: &#x60;[3:9,0:5:2]&#x60; gets values from two-dimensional dataset: [[3,0], [4,0], ..., [8,0], [3,2], [4,2], ..., [8,4]] (18 data points total: &#x60;6*3&#x60;) In EBNF plaintext: &#x60;SELECT&#x60; :&#x3D; &#x60;\&#39;[\&#39; SLICE { \&#39;,\&#39; SLICE } \&#39;]\&#39;&#x60; &#x60;SLICE&#x60; :&#x3D; &#x60;START \&#39;:\&#39; STOP [ \&#39;:\&#39; STEP ]&#x60; &#x60;START&#x60; :&#x3D; non-negative integer less than the dimension\&#39;s extent. &#x60;STOP&#x60; :&#x3D; non-negaive integer greater than &#x60;START&#x60; and less than or equal to the dimension\&#39;s extent. Is the first index _not_ included in the selection hyperslab. &#x60;STEP&#x60; :&#x3D; non-negative integer greater than zero; is the increment of index in dimension between each value. If omitted, defaults to &#x60;1&#x60; (contiguous indices).
   * @param query URL-encoded string of conditional expression to filter selection. E.g., the condition &#x60;(temp &gt; 32.0) &amp; (dir &#x3D;&#x3D; \&#39;N\&#39;)&#x60; would return elements of the dataset where the &#x60;temp&#x60; field was greater than &#x60;32.0&#x60; _and_ the &#x60;dir&#x60; field was equal to &#x60;N&#x60;. TODO: query syntax description _Must_ be URL-encoded. Can be used in conjunction with &#x60;select&#x60; parameter to filter a hyberslab selection. Can be used in conjunction with &#x60;Limit&#x60; parameter to restrict number of values returned. Only applicable to one-dimensional compound datasets. TODO: verify
   * @param limit Integer greater than zero. If present, specifies maximum number of values to return. Applies only to the &#x60;query&#x60; parameter.
   * @param authorization
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public datasetsIdValueGet(
    id: string,
    domain?: string,
    select?: string,
    query?: string,
    limit?: number,
    authorization?: string,
  ): Observable<AxiosResponse<InlineResponse20010>>;
  public datasetsIdValueGet(
    id: string,
    domain?: string,
    select?: string,
    query?: string,
    limit?: number,
    authorization?: string,
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling datasetsIdValueGet.');
    }

    let queryParameters: any = {};
    if (domain !== undefined && domain !== null) {
      queryParameters['domain'] = <any>domain;
    }
    if (select !== undefined && select !== null) {
      queryParameters['select'] = <any>select;
    }
    if (query !== undefined && query !== null) {
      queryParameters['query'] = <any>query;
    }
    if (limit !== undefined && limit !== null) {
      queryParameters['Limit'] = <any>limit;
    }

    let headers = this.defaultHeaders;
    if (authorization !== undefined && authorization !== null) {
      headers['Authorization'] = String(authorization);
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json', 'application/octet-stream'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = [];
    return this.httpClient.get<InlineResponse20010>(
      `${this.basePath}/datasets/${encodeURIComponent(String(id))}/value`,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
      },
    );
  }
  /**
   * Get specific data points from Dataset.
   *
   * @param id UUID of the Dataset.
   * @param inlineObject5
   * @param domain
   * @param authorization
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public datasetsIdValuePost(
    id: string,
    inlineObject5: InlineObject5,
    domain?: string,
    authorization?: string,
  ): Observable<AxiosResponse<InlineResponse20011>>;
  public datasetsIdValuePost(
    id: string,
    inlineObject5: InlineObject5,
    domain?: string,
    authorization?: string,
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling datasetsIdValuePost.');
    }

    if (inlineObject5 === null || inlineObject5 === undefined) {
      throw new Error('Required parameter inlineObject5 was null or undefined when calling datasetsIdValuePost.');
    }

    let queryParameters: any = {};
    if (domain !== undefined && domain !== null) {
      queryParameters['domain'] = <any>domain;
    }

    let headers = this.defaultHeaders;
    if (authorization !== undefined && authorization !== null) {
      headers['Authorization'] = String(authorization);
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];
    const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers['Content-Type'] = httpContentTypeSelected;
    }
    return this.httpClient.post<InlineResponse20011>(
      `${this.basePath}/datasets/${encodeURIComponent(String(id))}/value`,
      inlineObject5,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
      },
    );
  }
  /**
   * Write values to Dataset.
   * Overwrites any existing data in update region.
   * @param id UUID of the Dataset.
   * @param inlineObject4
   * @param domain
   * @param authorization
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public datasetsIdValuePut(
    id: string,
    inlineObject4: InlineObject4,
    domain?: string,
    authorization?: string,
  ): Observable<AxiosResponse<any>>;
  public datasetsIdValuePut(
    id: string,
    inlineObject4: InlineObject4,
    domain?: string,
    authorization?: string,
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling datasetsIdValuePut.');
    }

    if (inlineObject4 === null || inlineObject4 === undefined) {
      throw new Error('Required parameter inlineObject4 was null or undefined when calling datasetsIdValuePut.');
    }

    let queryParameters: any = {};
    if (domain !== undefined && domain !== null) {
      queryParameters['domain'] = <any>domain;
    }

    let headers = this.defaultHeaders;
    if (authorization !== undefined && authorization !== null) {
      headers['Authorization'] = String(authorization);
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = [];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];
    const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers['Content-Type'] = httpContentTypeSelected;
    }
    return this.httpClient.put<any>(
      `${this.basePath}/datasets/${encodeURIComponent(String(id))}/value`,
      inlineObject4,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
      },
    );
  }
  /**
   * Create a Dataset.
   * Create a new Dataset object in the Domain. New object is not linked to or by any other object upon creation; will not appear in &#x60;datasets&#x60; listing until linked to tree originating at the Domain\&#39;s root Group.
   * @param inlineObject2
   * @param domain
   * @param authorization
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public datasetsPost(
    inlineObject2: InlineObject2,
    domain?: string,
    authorization?: string,
  ): Observable<AxiosResponse<InlineResponse2012>>;
  public datasetsPost(inlineObject2: InlineObject2, domain?: string, authorization?: string): Observable<any> {
    if (inlineObject2 === null || inlineObject2 === undefined) {
      throw new Error('Required parameter inlineObject2 was null or undefined when calling datasetsPost.');
    }

    let queryParameters: any = {};
    if (domain !== undefined && domain !== null) {
      queryParameters['domain'] = <any>domain;
    }

    let headers = this.defaultHeaders;
    if (authorization !== undefined && authorization !== null) {
      headers['Authorization'] = String(authorization);
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];
    const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers['Content-Type'] = httpContentTypeSelected;
    }
    return this.httpClient.post<InlineResponse2012>(`${this.basePath}/datasets`, inlineObject2, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
    });
  }
}
