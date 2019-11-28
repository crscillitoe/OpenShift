import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AddApplicationComponent } from "../core/modals/add-application/add-application.component";
import {
  Application,
  ConfigurationService
} from "../core/services/configuration/configuration.service";

@Component({
  selector: "left-menu",
  templateUrl: "./left-menu.component.html",
  styleUrls: ["./left-menu.component.scss"]
})
export class LeftMenuComponent implements OnInit {
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

  selectApplication(application: Application) {
    this.configurationService.selectApplication(application);
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
