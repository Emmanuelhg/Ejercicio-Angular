import { Pipe, PipeTransform } from '@angular/core';

const render = (value: any) => {
  console.log("entró pipe")
 
  var search = value.toLowerCase();
  var searchTest = [];

  searchTest.push(search.replace(/[a]/g, "4").replace(/[e]/g, "3").replace(/[i]/g, "1").replace(/[o]/g, "0").replace(/[u]/g, "9"))
  

  console.log(searchTest)
  return searchTest;

  
};

@Pipe({
  name: 'cambioLetras'
})
export class CambioLetrasPipe implements PipeTransform {
  

  transform(value: any): unknown {
    console.log("pipe vacía", value)
    return render(value);
           
  }

}
