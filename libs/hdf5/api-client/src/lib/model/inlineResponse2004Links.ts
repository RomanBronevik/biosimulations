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

export interface InlineResponse2004Links {
  /**
   * UUID of Link target.
   */
  id?: string;
  created?: number;
  /**
   * Indicate whether this Link is hard, soft, or external.
   */
  _class?: InlineResponse2004Links.ClassEnum;
  /**
   * Name/label/title of the Link, as provided upon creation.
   */
  title?: string;
  /**
   * URL of Link target.
   */
  target?: string;
  /**
   * URL to origin of Link.
   */
  href?: string;
  /**
   * What kind of object is the target. (TODO)
   */
  collection?: InlineResponse2004Links.CollectionEnum;
}
export namespace InlineResponse2004Links {
  export type ClassEnum = 'H5L_TYPE_HARD' | 'H5L_TYPE_SOFT' | 'H5L_TYPE_EXTERNAL';
  export const ClassEnum = {
    Hard: 'H5L_TYPE_HARD' as ClassEnum,
    Soft: 'H5L_TYPE_SOFT' as ClassEnum,
    External: 'H5L_TYPE_EXTERNAL' as ClassEnum,
  };
  export type CollectionEnum = 'groups' | 'datasets';
  export const CollectionEnum = {
    Groups: 'groups' as CollectionEnum,
    Datasets: 'datasets' as CollectionEnum,
  };
}
