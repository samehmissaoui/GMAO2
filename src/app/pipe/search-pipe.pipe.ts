import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipePipe implements PipeTransform {

  transform(items: any[], search: string): any {
    if(!items) return [];
    if(!search) return items;
     search = search.toString().toLowerCase();
    //  filterid = filterid.valueOf();
     return items.filter( it => {
     return it.type.toString().includes(search) || it.operation.toString().includes(search) ;
      });
      }

}
