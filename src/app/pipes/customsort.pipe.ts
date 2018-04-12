import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customsort'
})
export class CustomsortPipe implements PipeTransform {

  transform(array: any,orderField:string,orderType?:boolean,dataType?:string): any {
    console.log(orderField);
    console.log(orderType) 
    if(array)
    {
      if(dataType=='string')
      {
        array.sort( ( a: any, b: any ) => {
          let ae = a[ orderField ];
          let be = b[ orderField ];
          if ( ae == undefined && be == undefined ) return 0;
          if ( ae == undefined && be != undefined ) return orderType ? 1 : -1;
          if ( ae != undefined && be == undefined ) return orderType ? -1 : 1;
          if ( ae == be ) return 0;
          return orderType ? (ae.toString().toLowerCase() > be.toString().toLowerCase() ? -1 : 1) : (be.toString().toLowerCase() > ae.toString().toLowerCase() ? -1 : 1);
      });
      }
      else{
        array.sort( ( a: any, b: any ) => {
          let ae = a[ orderField ];
          let be = b[ orderField ];
          if ( ae == undefined && be == undefined ) return 0;
          if ( ae == undefined && be != undefined ) return orderType ? 1 : -1;
          if ( ae != undefined && be == undefined ) return orderType ? -1 : 1;
          if ( ae == be ) return 0;
          return orderType ? (ae > be ? -1 : 1) : (be > ae ? -1 : 1);
      });
      }
    }
   return array;
  }

}
