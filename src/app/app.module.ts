import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { StoreModule } from '@ngrx/store';
import { ExpenseReducer } from './store/expense.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LocalStorageEffects } from './store/expense.effects';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot({
      expense: ExpenseReducer
    }),
    EffectsModule.forRoot([LocalStorageEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
