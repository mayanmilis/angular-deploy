import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongsListComponent } from './songs-list/songs-list.component';
import { SongComponent } from './song/song.component';
import { TokenInterceptorService } from './token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    SongsListComponent,
    SongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptorService,
  multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
