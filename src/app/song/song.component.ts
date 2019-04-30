import { Component, OnInit, Input } from '@angular/core';
import { Song } from '../models';
import { DataService } from '../data.service';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  @Input() song: Song;
  @Input() title: String;
  @Input() subtitle: String;
  @Input() index: Number;
  @Input() img: String;
  shazamIcon: String='http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c538.png';
  @Input() url: String;
  isFavorite: Boolean;
  divStyle: String;
  divId: String;
  divClick: Function;
  buttonValue: String;
  buttonNote: String;
  star: String;


  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.title = this.title.toUpperCase();
    let favorites;
    this.data.getFavorites().subscribe(data =>  {
      favorites = Object.values(data);
      this.favoritesCheck(favorites);

    });

  }
  
  async favoritesCheck(arr){
    await arr.map(item => {
      if(item.name===this.title){
        this.isFavorite = true;
      }
    });
    if(this.isFavorite){
      this.divClick = this.removeFromFavorites;
      this.buttonNote = 'Remove from favorites'
      this.divStyle = 'rgb(255, 222, 161)';
      this.star = "../../assets/images/added.png";
    }else{
      this.divClick = this.addToFavorites;
      this.buttonNote = 'add to favorites';
      this.star = "../../assets/images/notAdded.png";
      this.divStyle = ''
    }
  };

  addToFavorites()  {
    let value = {"name": this.title};
    this.isFavorite = true;
    this.data.addToFavorites(value).subscribe( () =>  {
    });
    this.favoritesCheck([]);
  }
  removeFromFavorites() {
    let favorites;
    let id;
    this.isFavorite = false;
    this.data.getFavorites().subscribe(data =>  {
      favorites = Object.values(data);
      favorites.map(item => {
        if(item.name===this.title){
          id = item._id;
          this.data.removeFromFavorites(id).subscribe(data => {
            
            this.isFavorite = false;
            
          });
        }else{  
          return null;
        }
      });
    });
    this.favoritesCheck([]);
  }
  
  
}
