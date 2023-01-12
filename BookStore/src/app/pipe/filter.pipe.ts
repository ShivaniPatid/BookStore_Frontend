import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any) {
    console.log(args)
    if(!args)
    {
      return value
    }
    else {
      args=args.toLocaleLowerCase();
    }
    return value.filter((book : any)=>{
      return book.bookName.toLocaleLowerCase().includes(args);
    })
  }

}
