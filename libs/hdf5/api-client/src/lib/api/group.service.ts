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

import { HttpService, Inject, Injectable, Optional } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { InlineObject } from '../model/inlineObject';
import { InlineResponse20014 } from '../model/inlineResponse20014';
import { InlineResponse20015 } from '../model/inlineResponse20015';
import { InlineResponse20016 } from '../model/inlineResponse20016';
import { InlineResponse20017 } from '../model/inlineResponse20017';
import { InlineResponse2002 } from '../model/inlineResponse2002';
import { InlineResponse2003 } from '../model/inlineResponse2003';
import { InlineResponse2011 } from '../model/inlineResponse2011';
import { Configuration } from '../configuration';

@Injectable()
export class GroupService {
  protected basePath = 'https://data.biosimulations.dev';
  public defaultHeaders: Record<string, string> = {};
  public configuration = new Configuration();

  constructor(
    protected httpClient: HttpService,
    @Optional() configuration: Configuration,
  ) {
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
      throw new Error(
        'Required parameter attr was null or undefined when calling collectionObjUuidAttributesAttrGet.',
      );
    }

    let queryParameters = {};
    if (domain !== undefined && domain !== null) {
      queryParameters['domain'] = <any>domain;
    }

    let headers = this.defaultHeaders;
    if (authorization !== undefined && authorization !== null) {
      headers['Authorization'] = String(authorization);
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = [];
    return this.httpClient.get<InlineResponse20015>(
      `${this.basePath}/${encodeURIComponent(
        String(collection),
      )}/${encodeURIComponent(String(objUuid))}/attributes/${encodeURIComponent(
        String(attr),
      )}`,
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
      throw new Error(
        'Required parameter attr was null or undefined when calling collectionObjUuidAttributesAttrPut.',
      );
    }

    if (body === null || body === undefined) {
      throw new Error(
        'Required parameter body was null or undefined when calling collectionObjUuidAttributesAttrPut.',
      );
    }

    let queryParameters = {};
    if (domain !== undefined && domain !== null) {
      queryParameters['domain'] = <any>domain;
    }

    let headers = this.defaultHeaders;
    if (authorization !== undefined && authorization !== null) {
      headers['Authorization'] = String(authorization);
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];
    const httpContentTypeSelected: string | undefined =
      this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers['Content-Type'] = httpContentTypeSelected;
    }
    return this.httpClient.put<object>(
      `${this.basePath}/${encodeURIComponent(
        String(collection),
      )}/${encodeURIComponent(String(objUuid))}/attributes/${encodeURIComponent(
        String(attr),
      )}`,
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
      throw new Error(
        'Required parameter objUuid was null or undefined when calling collectionObjUuidAttributesGet.',
      );
    }

    let queryParameters = {};
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
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = [];
    return this.httpClient.get<InlineResponse20014>(
      `${this.basePath}/${encodeURIComponent(
        String(collection),
      )}/${encodeURIComponent(String(objUuid))}/attributes`,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
      },
    );
  }
  /**
   * Get UUIDs for all non-root Groups in Domain.
   * Listed Group(s) must be reachable via hard Link from root Group, either directly or indirectly. If Groups exist which are unlinked or not reachable by tree originating at root, they will not be included in the list. If there is any hard Link in the tree to a Group which has been deleted, the request will fail with error 410 (GONE).
   * @param domain
   * @param authorization
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public groupsGet(
    domain?: string,
    authorization?: string,
  ): Observable<AxiosResponse<InlineResponse2002>>;
  public groupsGet(domain?: string, authorization?: string): Observable<any> {
    let queryParameters = {};
    if (domain !== undefined && domain !== null) {
      queryParameters['domain'] = <any>domain;
    }

    let headers = this.defaultHeaders;
    if (authorization !== undefined && authorization !== null) {
      headers['Authorization'] = String(authorization);
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = [];
    return this.httpClient.get<InlineResponse2002>(`${this.basePath}/groups`, {
      params: queryParameters,
      withCredentials: this.configuration.withCredentials,
      headers: headers,
    });
  }
  /**
   * List access lists on Group.
   *
   * @param id UUID of the Group, e.g. &#x60;g-37aa76f6-2c86-11e8-9391-0242ac110009&#x60;.
   * @param domain
   * @param authorization
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public groupsIdAclsGet(
    id: string,
    domain?: string,
    authorization?: string,
  ): Observable<AxiosResponse<InlineResponse20016>>;
  public groupsIdAclsGet(
    id: string,
    domain?: string,
    authorization?: string,
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling groupsIdAclsGet.',
      );
    }

    let queryParameters = {};
    if (domain !== undefined && domain !== null) {
      queryParameters['domain'] = <any>domain;
    }

    let headers = this.defaultHeaders;
    if (authorization !== undefined && authorization !== null) {
      headers['Authorization'] = String(authorization);
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = [];
    return this.httpClient.get<InlineResponse20016>(
      `${this.basePath}/groups/${encodeURIComponent(String(id))}/acls`,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
      },
    );
  }
  /**
   * Get users\&#39;s access to a Group.
   *
   * @param id UUID of the Group, e.g. &#x60;g-37aa76f6-2c86-11e8-9391-0242ac110009&#x60;.
   * @param user Identifier/name of a user.
   * @param domain
   * @param authorization
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public groupsIdAclsUserGet(
    id: string,
    user: string,
    domain?: string,
    authorization?: string,
  ): Observable<AxiosResponse<InlineResponse20017>>;
  public groupsIdAclsUserGet(
    id: string,
    user: string,
    domain?: string,
    authorization?: string,
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling groupsIdAclsUserGet.',
      );
    }

    if (user === null || user === undefined) {
      throw new Error(
        'Required parameter user was null or undefined when calling groupsIdAclsUserGet.',
      );
    }

    let queryParameters = {};
    if (domain !== undefined && domain !== null) {
      queryParameters['domain'] = <any>domain;
    }

    let headers = this.defaultHeaders;
    if (authorization !== undefined && authorization !== null) {
      headers['Authorization'] = String(authorization);
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = [];
    return this.httpClient.get<InlineResponse20017>(
      `${this.basePath}/groups/${encodeURIComponent(
        String(id),
      )}/acls/${encodeURIComponent(String(user))}`,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
      },
    );
  }
  /**
   * Delete a Group.
   * TODO: Will delete attributes of the Group. Will _not_ delete: (TODO: extensive tests to verify) + Objects (Groups, Types, Datasets) this object linked to + Links to this Group If a group is deleted while still hard-Linked, it will result in all &#x60;GET /groups&#x60; requests to fail with error 410 (GONE) until all Links to the deleted Group are also deleted.
   * @param id UUID of the Group, e.g. &#x60;g-37aa76f6-2c86-11e8-9391-0242ac110009&#x60;.
   * @param domain
   * @param authorization
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public groupsIdDelete(
    id: string,
    domain?: string,
    authorization?: string,
  ): Observable<AxiosResponse<object>>;
  public groupsIdDelete(
    id: string,
    domain?: string,
    authorization?: string,
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling groupsIdDelete.',
      );
    }

    let queryParameters = {};
    if (domain !== undefined && domain !== null) {
      queryParameters['domain'] = <any>domain;
    }

    let headers = this.defaultHeaders;
    if (authorization !== undefined && authorization !== null) {
      headers['Authorization'] = String(authorization);
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = [];
    return this.httpClient.delete<object>(
      `${this.basePath}/groups/${encodeURIComponent(String(id))}`,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
      },
    );
  }
  /**
   * Get information about a Group.
   *
   * @param id UUID of the Group, e.g. &#x60;g-37aa76f6-2c86-11e8-9391-0242ac110009&#x60;.
   * @param domain
   * @param authorization
   * @param getalias
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public groupsIdGet(
    id: string,
    domain?: string,
    authorization?: string,
    getalias?: 0 | 1,
  ): Observable<AxiosResponse<InlineResponse2003>>;
  public groupsIdGet(
    id: string,
    domain?: string,
    authorization?: string,
    getalias?: 0 | 1,
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling groupsIdGet.',
      );
    }

    let queryParameters = {};
    if (domain !== undefined && domain !== null) {
      queryParameters['domain'] = <any>domain;
    }
    if (getalias !== undefined && getalias !== null) {
      queryParameters['getalias'] = <any>getalias;
    }

    let headers = this.defaultHeaders;
    if (authorization !== undefined && authorization !== null) {
      headers['Authorization'] = String(authorization);
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = [];
    return this.httpClient.get<InlineResponse2003>(
      `${this.basePath}/groups/${encodeURIComponent(String(id))}`,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
      },
    );
  }
  /**
   * Create a new Group.
   * Create a new Group in the given Domain. By default, the new Group it not attached to any other object in the Domain; it is left to the user or application to appropriately attach the new Group, i.e., Link to. A link description may be supplied in the request body as structured JSON, which will immediately link the new Group. If supplying link info, the header &#x60;Content-Type: application/json&#x60; should also be supplied as a matter of course. Note that this link will be a hard link -- it refers directly to the object.
   * @param domain
   * @param authorization
   * @param inlineObject
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public groupsPost(
    domain?: string,
    authorization?: string,
    inlineObject?: InlineObject,
  ): Observable<AxiosResponse<InlineResponse2011>>;
  public groupsPost(
    domain?: string,
    authorization?: string,
    inlineObject?: InlineObject,
  ): Observable<any> {
    let queryParameters = {};
    if (domain !== undefined && domain !== null) {
      queryParameters['domain'] = <any>domain;
    }

    let headers = this.defaultHeaders;
    if (authorization !== undefined && authorization !== null) {
      headers['Authorization'] = String(authorization);
    }

    // to determine the Accept header
    let httpHeaderAccepts: string[] = ['application/json'];
    const httpHeaderAcceptSelected: string | undefined =
      this.configuration.selectHeaderAccept(httpHeaderAccepts);
    if (httpHeaderAcceptSelected != undefined) {
      headers['Accept'] = httpHeaderAcceptSelected;
    }

    // to determine the Content-Type header
    const consumes: string[] = ['application/json'];
    const httpContentTypeSelected: string | undefined =
      this.configuration.selectHeaderContentType(consumes);
    if (httpContentTypeSelected != undefined) {
      headers['Content-Type'] = httpContentTypeSelected;
    }
    return this.httpClient.post<InlineResponse2011>(
      `${this.basePath}/groups`,
      inlineObject,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
      },
    );
  }
}
