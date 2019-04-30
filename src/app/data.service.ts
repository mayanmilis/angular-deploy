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
    return this.http.get('http://localhost:5000/api/items');
  }
  addToFavorites(value) {
    return this.http.post('http://localhost:5000/api/items', value);
  }
  removeFromFavorites(id) {
    return this.http.delete(`http://localhost:5000/api/items/${id}`)
  }
}
