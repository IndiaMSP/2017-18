import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'banks-thumbnail',
  templateUrl: './banks-thumbnail.component.html',
  styleUrls: ['./banks-thumbnail.component.css']
})
export class BanksThumbnailComponent implements OnInit {
  @Input('bank-details') bank;
  constructor() { }

  ngOnInit() {
  }

}
