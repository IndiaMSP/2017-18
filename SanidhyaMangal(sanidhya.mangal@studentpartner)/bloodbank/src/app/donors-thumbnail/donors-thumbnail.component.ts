import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'donors-thumbnail',
  templateUrl: './donors-thumbnail.component.html',
  styleUrls: ['./donors-thumbnail.component.css']
})
export class DonorsThumbnailComponent implements OnInit {
  @Input('donor') donor;
  constructor() { }

  ngOnInit() {
  }

}
