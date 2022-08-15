import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'breakFilter'
})

export class BreakFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
      //if(!value)return null;
      //if(!args)return value;

      //args = args.toLowerCase();

      //return value.replace(new RegExp('\/r/n', 'g'), '<br/>');
     return value.replace(/(?:\r\n|\r|\n)/g, '<br/>');
      //return value.filter(function(data:any){
        //return data.replace(new RegExp('\/r/n', 'g'), '<br/>');
        // return JSON.stringify(data).toLowerCase().includes(args);
     // });
  }

}