import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { Application } from "../../services/configuration/configuration.service";

@Component({
  selector: "app-add-application",
  templateUrl: "./add-application.component.html",
  styleUrls: ["./add-application.component.scss"]
})
export class AddApplicationComponent implements OnInit {
  applicationID: number;
  applicationName: string;
  applicationURL: string;

  constructor(public dialogRef: MatDialogRef<AddApplicationComponent>) {}

  cancel() {
    this.dialogRef.close();
  }

  save() {
    const application: Application = {
      applicationID: this.applicationID,
      applicationName: this.applicationName,
      applicationURL: this.applicationURL
    };

    this.dialogRef.close(application);
  }

  ngOnInit() {}
}
