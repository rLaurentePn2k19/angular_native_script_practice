import { Component, Output, EventEmitter, Input, OnInit } from "@angular/core";
import { TouchGestureEventData, GestureEventData } from 'tns-core-modules/ui/gestures';

@Component({
  selector: 'ns-float-btn',
  templateUrl: './float-btn.component.html',
  styleUrls: ['./float-btn.component.css']
})
export class FloatBtnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() text: string
  @Output() tap: EventEmitter<GestureEventData> = new EventEmitter<GestureEventData>();
  @Output() showForm = new EventEmitter();

  onTap(args: GestureEventData) {
    this.tap.emit(args);
    this.showForm.emit(true)
    console.log("tets")
  }

  onTouch(args: TouchGestureEventData) {
    let btn = args.view;
    switch (args.action) {
      case 'down':
        btn.className = 'float-btn down';
        break
      case 'up':
        btn.className = 'float-btn up';
        break
    }
  }

}
