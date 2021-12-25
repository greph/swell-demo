import {NgModule} from '@angular/core';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

import {SharedModule} from "../shared/shared.module";

import {ProductListComponent} from "./product-list/product-list.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent
  ],
  exports: [],
  imports: [
    CommonModule,
    NgxDatatableModule,
    SharedModule,
    ReactiveFormsModule
  ]
})

export class PagesModule {
}
