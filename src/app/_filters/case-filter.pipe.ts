import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "caseFilter",
  pure: false
})
export class CaseFilterPipe implements PipeTransform {
  // transform(value: any, args?: any): any {
  //   return null;
  // }

  // transform(value: any, args?: any): any {
  //   console.log("pip");
  //   return null;
  // }

  transform(items: any[], filter: any): any[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: any) => this.applyFilter(item, filter));
  }

  /**
   * Perform the filtering.
   *
   * @param {country} country The country to compare to the filter.
   * @param {filter} filter The filter to apply.
   * @return {boolean} True if country satisfies filters, false if not.
   */
  applyFilter(country: any, filter: any): boolean {
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === "string") {
          if (field == "client") {
            // console.log(country[field]);
            const val = country[field].firstname + " "+ country[field].lastname;
            if (val.toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
              return false;
            }
          } else {
            if (
              country[field]
                .toLowerCase()
                .indexOf(filter[field].toLowerCase()) === -1
            ) {
              return false;
            }
          }
        } else if (typeof filter[field] === "number") {
          if (country[field] !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }
}
