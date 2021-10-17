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
import { InlineObject1 } from '../model/inlineObject1';
import { InlineResponse2004 } from '../model/inlineResponse2004';
import { InlineResponse2005 } from '../model/inlineResponse2005';
import { Configuration } from '../configuration';

@Injectable()
export class LinkService {
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
   * List all Links in a Group.
   * Items in the \&quot;list\&quot; array are sorted alphanumerically by title.
   * @param id UUID of the Group, e.g. &#x60;g-37aa76f6-2c86-11e8-9391-0242ac110009&#x60;.
   * @param domain
   * @param limit Cap the number of Links returned in list. Must be an integer &#x60;N &gt;&#x3D; 0&#x60;. May be greater than or equal to the number of Links; has no effect in that case. May be used in conjunction with query parameter &#x60;Marker&#x60;.
   * @param marker Title of a Link; the first Link name to list. If no Link exists with that title, causes an error. May be used with query parameter &#x60;Limit&#x60;.
   * @param authorization
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public groupsIdLinksGet(
    id: string,
    domain?: string,
    limit?: number,
    marker?: string,
    authorization?: string,
  ): Observable<AxiosResponse<InlineResponse2004>>;
  public groupsIdLinksGet(
    id: string,
    domain?: string,
    limit?: number,
    marker?: string,
    authorization?: string,
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling groupsIdLinksGet.',
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
    return this.httpClient.get<InlineResponse2004>(
      `${this.basePath}/groups/${encodeURIComponent(String(id))}/links`,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
      },
    );
  }
  /**
   * Delete Link.
   * Will _not_ delete the target object.
   * @param id UUID of the Group, e.g. &#x60;g-37aa76f6-2c86-11e8-9391-0242ac110009&#x60;.
   * @param linkname
   * @param domain
   * @param authorization
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public groupsIdLinksLinknameDelete(
    id: string,
    linkname: string,
    domain?: string,
    authorization?: string,
  ): Observable<AxiosResponse<object>>;
  public groupsIdLinksLinknameDelete(
    id: string,
    linkname: string,
    domain?: string,
    authorization?: string,
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling groupsIdLinksLinknameDelete.',
      );
    }

    if (linkname === null || linkname === undefined) {
      throw new Error(
        'Required parameter linkname was null or undefined when calling groupsIdLinksLinknameDelete.',
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
      `${this.basePath}/groups/${encodeURIComponent(
        String(id),
      )}/links/${encodeURIComponent(String(linkname))}`,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
      },
    );
  }
  /**
   * Get Link info.
   * Get information about a given Link.
   * @param id UUID of the Group, e.g. &#x60;g-37aa76f6-2c86-11e8-9391-0242ac110009&#x60;.
   * @param linkname
   * @param domain
   * @param authorization
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public groupsIdLinksLinknameGet(
    id: string,
    linkname: string,
    domain?: string,
    authorization?: string,
  ): Observable<AxiosResponse<InlineResponse2005>>;
  public groupsIdLinksLinknameGet(
    id: string,
    linkname: string,
    domain?: string,
    authorization?: string,
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling groupsIdLinksLinknameGet.',
      );
    }

    if (linkname === null || linkname === undefined) {
      throw new Error(
        'Required parameter linkname was null or undefined when calling groupsIdLinksLinknameGet.',
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
    return this.httpClient.get<InlineResponse2005>(
      `${this.basePath}/groups/${encodeURIComponent(
        String(id),
      )}/links/${encodeURIComponent(String(linkname))}`,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
      },
    );
  }
  /**
   * Create a new Link in a Group.
   * Link will be \&#39;hard\&#39;, \&#39;soft\&#39;, or \&#39;external\&#39; depending on request elements. If &#x60;id&#x60; is provided, it will override other properties and attempt to create a hard Link to the object with that UUID. If &#x60;h5path&#x60; is provided, will create a symbolic link to object (if any) at the given path -- either a soft Link within this domain if no domain is specified, or an external Link. If &#x60;h5domain&#x60; is provided, will create an external Link, pointing to the object (if any) at &#x60;h5path&#x60; in domain &#x60;h5domain&#x60;.
   * @param id UUID of the Group, e.g. &#x60;g-37aa76f6-2c86-11e8-9391-0242ac110009&#x60;.
   * @param linkname
   * @param inlineObject1
   * @param domain
   * @param authorization
   * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
   * @param reportProgress flag to report request and response progress.
   */
  public groupsIdLinksLinknamePut(
    id: string,
    linkname: string,
    inlineObject1: InlineObject1,
    domain?: string,
    authorization?: string,
  ): Observable<AxiosResponse<object>>;
  public groupsIdLinksLinknamePut(
    id: string,
    linkname: string,
    inlineObject1: InlineObject1,
    domain?: string,
    authorization?: string,
  ): Observable<any> {
    if (id === null || id === undefined) {
      throw new Error(
        'Required parameter id was null or undefined when calling groupsIdLinksLinknamePut.',
      );
    }

    if (linkname === null || linkname === undefined) {
      throw new Error(
        'Required parameter linkname was null or undefined when calling groupsIdLinksLinknamePut.',
      );
    }

    if (inlineObject1 === null || inlineObject1 === undefined) {
      throw new Error(
        'Required parameter inlineObject1 was null or undefined when calling groupsIdLinksLinknamePut.',
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
      `${this.basePath}/groups/${encodeURIComponent(
        String(id),
      )}/links/${encodeURIComponent(String(linkname))}`,
      inlineObject1,
      {
        params: queryParameters,
        withCredentials: this.configuration.withCredentials,
        headers: headers,
      },
    );
  }
}
