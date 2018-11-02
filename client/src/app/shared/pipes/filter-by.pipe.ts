import {Pipe, PipeTransform} from '@angular/core';

/**
 * https://github.com/VadimDez/ngx-filter-pipe
 */

@Pipe({
  name: 'appFilterBy',
  pure: false
})
export class FilterByPipe implements PipeTransform {

  transform(array: any[], filter: any): any {
    const type = typeof filter;

    if (!array) {
      return array;
    }

    if (type === 'boolean') {
      return array.filter(this.filterByBoolean(filter));
    }

    if (type === 'string') {
      if (this.isNumber(filter)) {
        return array.filter(this.filterDefault(filter));
      }

      return array.filter(this.filterByString(filter));
    }

    if (type === 'object') {
      return array.filter(this.filterByObject(filter));
    }

    if (type === 'function') {
      return array.filter(filter);
    }

    return array.filter(this.filterDefault(filter));
  }

  private filterByString(filter: any) {
    if (filter) {
      filter = filter.toLowerCase();
    }
    return (value: any) => {
      return !filter || (value ? ('' + value).toLowerCase().indexOf(filter) !== -1 : false);
    };
  }

  private filterByBoolean(filter: any) {
    return (value: any) => {
      return Boolean(value) === filter;
    };
  }

  private filterByObject(filter: any) {
    return (value: any) => {
      for (const key in filter) {
        if (!filter.hasOwnProperty(key)) {
          continue;
        }

        if (key === '$or') {
          if (!this.filterByOr(filter.$or)(this.getValue(value))) {
            return false;
          }
          continue;
        }

        let walker = value;
        let found = false;
        do {
          if (walker.hasOwnProperty(key) || Object.getOwnPropertyDescriptor(walker, key)) {
            found = true;
            break;
          }
        } while (walker = Object.getPrototypeOf(walker));

        if (!found) {
          return false;
        }

        const val = this.getValue(value[key]);
        const filterType = typeof filter[key];
        let isMatching;

        if (filterType === 'boolean') {
          isMatching = this.filterByBoolean(filter[key])(val);
        } else if (filterType === 'string') {
          isMatching = this.filterByString(filter[key])(val);
        } else if (filterType === 'object') {
          isMatching = this.filterByObject(filter[key])(val);
        } else {
          isMatching = this.filterDefault(filter[key])(val);
        }

        if (!isMatching) {
          return false;
        }
      }

      return true;
    };
  }

  /**
   * Filter value by $or
   *
   * @param filter
   * @returns {(value:any)=>boolean}
   */
  private filterByOr(filter: any[]) {
    return (value: any) => {
      let hasMatch = false;
      const length = filter.length;

      const arrayComparison = (i: any) => {
        return value.indexOf(filter[i]) !== -1;
      };
      const otherComparison = (i: any) => {
        return value === filter[i];
      };
      const comparison = Array.isArray(value) ? arrayComparison : otherComparison;

      for (let i = 0; i < length; i++) {
        if (comparison(i)) {
          hasMatch = true;
          break;
        }
      }

      return hasMatch;
    };
  }

  /**
   * Checks function's value if type is function otherwise same value
   * @param value
   * @returns {any}
   */
  private getValue(value: any) {
    return typeof value === 'function' ? value() : value;
  }

  /**
   * Defatul filterDefault function
   *
   * @param filter
   * @returns {(value:any)=>boolean}
   */
  private filterDefault(filter: any) {
    return (value: any) => {
      // noinspection TsLint
      return filter === undefined || filter == value;
    };
  }

  private isNumber(value: any) {
    return !isNaN(parseInt(value, 10)) && isFinite(value);
  }
}
