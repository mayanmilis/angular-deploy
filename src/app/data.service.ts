import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  firstClick()  {
    return console.log('Clicked!');
  }
  getSongs(){
    return this.http.get('https://fullstack-test-server.herokuapp.com/api/songs')
  }

  getFavorites() {
    return this.http.get('https://pacific-meadow-65559.herokuapp.com/api/items');
  }
  addToFavorites(value) {
    return this.http.post('https://pacific-meadow-65559.herokuapp.com/api/items', value);
  }
  removeFromFavorites(id) {
    return this.http.delete(`https://pacific-meadow-65559.herokuapp.com/api/items/${id}`)
  }
}
