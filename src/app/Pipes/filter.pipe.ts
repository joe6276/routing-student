import { Pipe, PipeTransform } from '@angular/core';
import { StudentInterface } from 'src/Interfaces/Student';

@Pipe({
  name: 'filter',
  pure:true
})
export class FilterPipe implements PipeTransform {

  transform(value: StudentInterface[]): StudentInterface[] {
    if(value.length===0){
      return value;
    }
let filtered:StudentInterface[]=[];

for (let item of value){
  if(item.role==='user'){
    filtered.push(item)
  }
}
return filtered;

  }

}
