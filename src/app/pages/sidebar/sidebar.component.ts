import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  url:any;

  constructor(private activatedRoute:ActivatedRoute,private router: Router,
              @Inject(DOCUMENT) private document: Document) {  }

  ngOnInit(): void {

    this.url = this.document.location.pathname;
    console.log(this.url);
  }

}
