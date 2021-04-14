import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newform',
  templateUrl: './newform.component.html',
  styleUrls: ['./newform.component.css']
})
export class NewformComponent implements OnInit {
  title = 'Nested component works';
  string = 'practice';
  boolean = true;


  constructor() { }

  ngOnInit(): void {
  }

}
