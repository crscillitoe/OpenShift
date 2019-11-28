import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddApplicationComponent } from "./modals/add-application/add-application.component";
import { MaterialModule } from "../material/material.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [AddApplicationComponent],
  imports: [MaterialModule, SharedModule, CommonModule]
})
export class CoreModule {}
