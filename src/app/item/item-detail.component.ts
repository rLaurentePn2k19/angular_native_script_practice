import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { Item } from "./item";
import { ItemService } from "./item.service";

import { TimePicker } from "tns-core-modules/ui/time-picker";


@Component({
    selector: "ns-details",
    templateUrl: "./item-detail.component.html"
})
export class ItemDetailComponent implements OnInit {
    item: Item;
    res : string
    number = 0
    show = false;

    constructor(
        private itemService: ItemService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params.id;
        this.item = this.itemService.getItem(id);
    }

    todayObj: Date = new Date();

    onTimeChanged(args) {
        const tp = args.object as TimePicker;
        const time = args.value;
        console.log(`Chosen time: ${time}`);
    }

    showTime(){
        if(this.show == true){
            this.show = false
        }else{
            this.show = true
        }
    }

    countUp(){
        let i = 1;
        this.number += i
    }

    countDown(){
        let i = 1;
        this.number -= i
    }
    
    editedData(data){
        console.log(data)
        this.item.name = data.name
        this.item.role = data.role
        this.item.type = data.type
    }

}
