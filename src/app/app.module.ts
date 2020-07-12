import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
/* FIREBASE */
import { AngularFireModule } from'@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

const routes: Routes = [];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
