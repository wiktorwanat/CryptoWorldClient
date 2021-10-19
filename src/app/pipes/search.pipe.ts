import { Pipe, PipeTransform } from '@angular/core';
import { Cryptocurrency } from '../shared/models/cryptocurrency.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(cryptocurrency: Cryptocurrency[], searchText: string): Cryptocurrency[] {
    if (searchText == null) {
      return cryptocurrency;
    } else {
      searchText = searchText.toLocaleLowerCase();
      return cryptocurrency.filter(c => JSON.stringify(c).toLocaleLowerCase().includes(searchText));
    }
  }

}
