import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-apply-discount',
  templateUrl: './apply-discount.component.html',
  styleUrls: ['./apply-discount.component.scss']
})
export class ApplyDiscountComponent implements OnInit {
  discountInRuppee: number;
  discountInPercent: number;t
  @Output() onDiscountChange = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onDiscountChanged(price: number, discountValue: number, type: string) {
    if (type == 'percent') {
      this.discountInRuppee = Math.round((price * discountValue / 100) * 100) / 100;
      this.discountInPercent = discountValue;
    } else {
      this.discountInRuppee = discountValue
      this.discountInPercent = Math.round((discountValue * 100 / price) * 100) / 100
    }
    let discount = {
      discountInPercent : this.discountInPercent,
      discountInRuppee : this.discountInRuppee
    }
    this.onDiscountChange.emit(discount)
  }

}
