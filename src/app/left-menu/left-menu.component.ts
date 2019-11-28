import { Component, OnInit, ViewChild, TemplateRef } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AddApplicationComponent } from "../core/modals/add-application/add-application.component";
import {
  Application,
  ConfigurationService
} from "../core/services/configuration/configuration.service";
import { moveItemInArray, CdkDragDrop } from "@angular/cdk/drag-drop";
import { MatMenuTrigger } from "@angular/material/menu";
import { OverlayRef } from "@angular/cdk/overlay";

@Component({
  selector: "left-menu",
  templateUrl: "./left-menu.component.html",
  styleUrls: ["./left-menu.component.scss"]
})
export class LeftMenuComponent implements OnInit {
  @ViewChild(MatMenuTrigger, null) editApplicationMenu: MatMenuTrigger;
  contextMenuPosition = { x: "0px", y: "0px" };

  applicationList: Application[];
  selectedApplication: Application;

  constructor(
    public dialog: MatDialog,
    private configurationService: ConfigurationService
  ) {
    configurationService.applicationList.subscribe(applicationList => {
      this.applicationList = applicationList;
    });

    configurationService.currentlySelectedApplication.subscribe(application => {
      this.selectedApplication = application;
    });
  }

  ngOnInit() {}

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.applicationList,
      event.previousIndex,
      event.currentIndex
    );

    this.configurationService.setApplicationList(this.applicationList);
  }

  openContextMenu(event: MouseEvent, application: Application) {
    event.preventDefault();
    this.contextMenuPosition.x = event.clientX + "px";
    this.contextMenuPosition.y = event.clientY + "px";
    this.editApplicationMenu.menuData = { item: application };
    this.editApplicationMenu.menu.focusFirstItem("mouse");
    this.editApplicationMenu.openMenu();
  }

  selectApplication(application: Application) {
    this.configurationService.selectApplication(application);
  }

  removeApplication(application: Application) {
    this.configurationService.removeApplication(application);
  }

  addApplication() {
    const dialogRef = this.dialog.open(AddApplicationComponent);

    dialogRef.afterClosed().subscribe((application: Application) => {
      if (application) {
        this.configurationService.addApplication(application);
        this.configurationService.selectApplication(application);
      }
    });
  }
}
