import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor() { }

  transformList(dataList, dataValue) {
    let _data = dataList.filter((element) => {
      if(element != dataValue) {
        return element;
      }
    });

    return _data;
  }

}
