import { Component, OnInit, Input } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import { Router } from "@angular/router";

@Component({
    selector: "ns-items",
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {

    @Input() items: Array<Item>;
    @Input() titleText: string = "RangApp"
    show = false

    constructor(private itemService: ItemService, private router: Router) { }

    ngOnInit(): void {

    }

    editedData(data) {
        this.items.push(data)
        this.itemService.addItem(data)
    }

    isHomeRoute() {
        return this.router.url == "/items"
    }

    showAddForm() {
        if (this.show == true) {
            return this.show = false
        } else {
            return this.show = true
        }
    }

    // isItemRoute() {

    // }
}


