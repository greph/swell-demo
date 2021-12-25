import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ToastrModule} from 'ngx-toastr';
import {FormsModule} from "@angular/forms";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";

import {PagesModule} from "./pages/pages.module";
import {LayoutsModule} from "./layouts/layouts.module";
import {SharedModule} from "./shared/shared.module";
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    LayoutsModule,
    SharedModule,
    FormsModule,
    ToastrModule.forRoot({
      closeButton: true
    }),
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
