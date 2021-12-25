import {Component, ElementRef, ViewChild} from '@angular/core';
import {ColumnMode} from "@swimlane/ngx-datatable";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

import {BaseComponent} from "../../base.component";
import swell from 'swell-js'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent extends BaseComponent {
  readonly headerHeight = 50;
  readonly rowHeight = 50;
  pageNumber = 1;
  totalElements;
  rows = []
  isLoading = true
  ColumnMode = ColumnMode
  @ViewChild('productList') table
  endReached = false

  constructor(private router: Router, private el: ElementRef, private toastr: ToastrService) {
    super();
  }

  ngAfterViewInit() {
    this.getProductList()
    this.onScroll(0);
  }

  onRowClick(event) {
    if (event.type == 'click') {
      this.router.navigateByUrl('/products/' + event.row.id)
    }
  }

  onScroll(offsetY: number) {
    const viewHeight = this.el.nativeElement.getBoundingClientRect().height - this.headerHeight;
    if (!this.isLoading && !this.endReached && offsetY + viewHeight >= this.rows.length * this.rowHeight) {
      this.getProductList()
    }
  }

  getProductList() {
    this.isLoading = true
    swell.products.list({
      limit: 25,
      page: this.pageNumber
    }).then(response => {
      this.rows = this.rows.concat(response.results)
      this.totalElements = response.count
      this.endReached = response.results.length <= 0;
      this.pageNumber = this.pageNumber + 1
    }).catch(error => {
      this.toastr.error(error.message());
    }).finally(() => {
      this.isLoading = false
    });
  }
}
