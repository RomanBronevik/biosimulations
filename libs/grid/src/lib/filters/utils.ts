import {
  FilterQuery,
  isFilterDateRangeQuery,
  isFilterSetQuery,
  isFilterNumberRangeQuery,
  FilterDateRangeQuery,
  FilterNumberRangeQuery,
  FilterSetQuery,
} from './model';

export const passesFilters = (filterQuery: FilterQuery | undefined): boolean => {
  if (!filterQuery) {
    return true;
  }

  if (isFilterNumberRangeQuery(filterQuery)) {
    return passesNumberRangeFilter(filterQuery);
  } else if (isFilterDateRangeQuery(filterQuery)) {
    return passesDateRangeFilter(filterQuery);
  } else if (isFilterSetQuery(filterQuery)) {
    return passesSetFilter(filterQuery);
  }

  return true;
};

export const passesDateRangeFilter = (filterQuery: FilterDateRangeQuery): boolean => {
  const filterDef = filterQuery.filter;
  const value = filterQuery.value;

  const isBeforeLatest = !value || !filterDef?.value?.end || value <= filterDef?.value?.end;
  const isAfterEarliest = !value || !filterDef?.value?.start || value >= filterDef?.value?.start;
  return isBeforeLatest && isAfterEarliest;
};

const passesNumberRangeFilter = (filterQuery: FilterNumberRangeQuery): boolean => {
  const filterDef = filterQuery.filter;
  const value = filterQuery.value;

  const passesMin = !filterDef.value.min || value >= filterDef.value.min;
  const passesMax = !filterDef.value.max || value <= filterDef.value.max;
  return passesMin && passesMax;
};

const passesSetFilter = (filterQuery: FilterSetQuery): boolean => {
  const values = filterQuery.filter.value;
  const selectedValues = values.filter((value) => value.selected).map((value) => value.label);
  const value = filterQuery.value[0];
  const filterVals: string[] = selectedValues || [];

  const passes = filterVals.length == 0 || filterVals.includes(value);

  return passes;
};
