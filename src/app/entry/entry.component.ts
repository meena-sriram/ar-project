import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  goToScene(img)
  {
    this.router.navigate(['/ar'], { queryParams: { image: img } });
  }

}
