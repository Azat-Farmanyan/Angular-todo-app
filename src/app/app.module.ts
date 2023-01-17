import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoCardComponent } from './core/components/todo-card/todo-card.component';
import { TodoMainWidgetComponent } from './core/components/todo-main-widget/todo-main-widget.component';
import { NotFoundPageComponent } from './core/components/not-found-page/not-found-page.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TodoInputComponent } from './core/components/todo-input/todo-input.component';
import { LoadInterceptor } from './core/load.interceptor';
import { LoaderSpinnerComponent } from './core/components/loader-spinner/loader-spinner.component';
import { TodoUpdateComponent } from './core/components/todo-update/todo-update.component';
@NgModule({
  declarations: [
    AppComponent,
    TodoCardComponent,
    TodoMainWidgetComponent,
    NotFoundPageComponent,
    TodoInputComponent,
    LoaderSpinnerComponent,
    TodoUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
