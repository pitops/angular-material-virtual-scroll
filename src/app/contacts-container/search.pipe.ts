import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(contacts: any, query: any): any {
    if (!contacts) { return [] }
    if (!query) { return contacts }

    return contacts.filter(contact => JSON.stringify(contact).includes(query))
  }

}
