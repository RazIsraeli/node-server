import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftComponent } from './components/left/left.component';
import { CenterComponent } from './components/center/center.component';
import { RightComponent } from './components/right/right.component';
import { CarListComponent } from './components/center/components/car-list/car-list.component';
import { CarPreviewComponent } from './components/center/components/car-preview/car-preview.component';
import { UserListComponent } from './components/center/components/user-list/user-list.component';
import { UserPreviewComponent } from './components/center/components/user-preview/user-preview.component';
import { CarDetailsComponent } from './components/right/components/car-details/car-details.component';
import { UserDetailsComponent } from './components/right/components/user-details/user-details.component';
import { StoreModule } from '@ngrx/store';
import { carReducer } from './state/car.reducer';
import { collectionReducer } from './state/collection.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftComponent,
    CenterComponent,
    RightComponent,
    CarListComponent,
    CarPreviewComponent,
    UserListComponent,
    UserPreviewComponent,
    CarDetailsComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ cars: carReducer, collection: collectionReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly:environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
