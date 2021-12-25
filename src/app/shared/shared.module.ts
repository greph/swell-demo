import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CommonModule} from "@angular/common";

import {AppRoutingModule} from "../app-routing.module";

import {BreadcrumbComponent} from './breadcrumb/breadcrumb.component';
import {ImagePreviewComponent} from "./image-preview/image-preview.component";
import {FormInputComponent} from "./form-input/form-input.component";

@NgModule({
  declarations: [BreadcrumbComponent, ImagePreviewComponent, FormInputComponent],
  exports: [
    BreadcrumbComponent,
    ImagePreviewComponent,
    FormInputComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule
  ]
})
export class SharedModule {
}
