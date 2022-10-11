import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upper'
})
export class UpperPipe implements PipeTransform {

  transform(value:string){
    return value.substring(0,1).toUpperCase() + value.substring(1)
  }

}
