import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray, FormGroupDirective } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { orderClass } from './orderClass';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'mockAssess';



  ngOnInit() {

  }
  
}
