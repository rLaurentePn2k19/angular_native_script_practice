import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";
import { TestComponentComponent } from "./test-component/test-component.component";
import { FormComponent } from "~/app/form/form.component";
import { UpdateFormComponent } from "~/app/update-form/update-form.component";
import { SoccerComponent } from "~/app/soccer/soccer.component";
import { ArtistsComponent} from '~/app/artists/artists.component'
import { HomeComponent } from "~/app/home/home.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "items", component: ItemsComponent },
    { path: "item/:id", component: ItemDetailComponent },
    // { path: "test" , component : TestComponentComponent},
    // { path: "form" , component : FormComponent},
    { path: "update/:id", component: UpdateFormComponent },
    { path: "soccer", component: SoccerComponent },
    { path: "artists", component: ArtistsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
