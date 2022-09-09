import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.css'],
})
export class GlobalHeaderComponent implements OnInit {
  myForm = new FormGroup({
    lookUp: new FormControl(''),
  });

  onSubmit(myFrom) {}

  constructor() {}

  ngOnInit() {}
}
