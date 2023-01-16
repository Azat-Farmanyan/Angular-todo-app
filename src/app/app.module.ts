import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoCardComponent } from './core/components/todo-card/todo-card.component';
import { TodoMainWidgetComponent } from './core/components/todo-main-widget/todo-main-widget.component';
import { NotFoundPageComponent } from './core/components/not-found-page/not-found-page.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoInputComponent } from './core/components/todo-input/todo-input.component';
@NgModule({
  declarations: [
    AppComponent,
    TodoCardComponent,
    TodoMainWidgetComponent,
    NotFoundPageComponent,
    TodoInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
