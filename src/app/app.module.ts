import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { food_reducer } from './food/reducers/food.reducer';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { FoodEffects } from './food/effects/food-effects';
import { HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FoodService } from './food/services/food.service';
import { FoodListComponent } from './food/components/food-list/food-list.component';
import { FoodFormComponent } from './food/components/food-form/food-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    FoodFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({foods:food_reducer}),
    EffectsModule.forRoot([FoodEffects]),
    StoreDevtoolsModule.instrument({maxAge:12})
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
