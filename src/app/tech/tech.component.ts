import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {
  public language :any;
  constructor(private route :ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(data => {
      console.log(data.get('language'));
    })
    this.language = this.route.snapshot.paramMap.get('language');
  }

}
