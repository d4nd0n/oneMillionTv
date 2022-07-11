import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { VideoComponent } from './components/video/video.component';
import { TopUsersBarComponent } from './components/top-users-bar/top-users-bar.component';
import { TopClipsComponent } from './components/top-clips/top-clips.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    VideoComponent,
    NavBarComponent,
    TopUsersBarComponent,
    TopClipsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
