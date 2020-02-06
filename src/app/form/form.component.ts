import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ns-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  name = "";
  role = "";
  // type = "";

  @Output() dataEvent = new EventEmitter();
  @Input() buttonText: string

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.router.url == "/artists") {
      this.buttonText = "Add artist"
    } else {
      this.buttonText = "Add player"
    }
  }

  testFunction() {
    if (this.router.url == "/artists") {
      let obj = {
        name: this.name,
        role: this.role,
        type: "artist"
      }
      this.dataEvent.emit(obj)
      this.name = ""
      this.role = ""
    } else {
      let obj = {
        name: this.name,
        role: this.role,
        type: "soccer"
      }
      this.dataEvent.emit(obj)
      this.name = ""
      this.role = ""
    }
  }

}
