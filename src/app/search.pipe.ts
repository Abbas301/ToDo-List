import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(details:any,sear:any): any {
      
    if(!details || !sear ) 
    {
      return details;
    } 
    return details.filter((data:any) =>
        data.name.toLowerCase().includes(sear.toLowerCase()))

  }

}
