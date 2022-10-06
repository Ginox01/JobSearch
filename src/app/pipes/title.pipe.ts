import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(value:string){
    return value.split(" ")
    .map(word => word.substring(0,1).toUpperCase() + word.substring(1))
    .join(" ")
  }

}
