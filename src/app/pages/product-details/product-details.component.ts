import {Component} from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {ActivatedRoute} from "@angular/router";

import {BaseComponent} from "../../base.component";

import swell from 'swell-js'

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent extends BaseComponent {
  productId: number;
  productDetails: any;
  breadCrumbData: any;

  constructor(private route: ActivatedRoute, private toastr: ToastrService) {
    super();
    this.route.params.subscribe(params => this.productId = params['id']);
  }

  ngAfterViewInit() {
    super.ngAfterViewInit();
    this.getProductDetails();
  }

  getProductDetails() {
    swell.products.get(this.productId)
      .then(response => {
        this.productDetails = response
        this.breadCrumbData = [{label: 'Home', link: '/products'}, {label: this.productDetails?.name, link: ''}];
      })
      .catch(error => {
        this.toastr.error(error.message());
      });
  }
}
