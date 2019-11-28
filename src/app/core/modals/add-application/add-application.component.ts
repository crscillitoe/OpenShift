import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import { Application } from "../../services/configuration/configuration.service";

@Component({
  selector: "app-add-application",
  templateUrl: "./add-application.component.html",
  styleUrls: ["./add-application.component.scss"]
})
export class AddApplicationComponent implements OnInit {
  applicationName: string;
  applicationURL: string;

  constructor(public dialogRef: MatDialogRef<AddApplicationComponent>) {}

  /**
   * Cancels the form, no changes will be made to the
   * saved configuration for the given user.
   */
  cancel() {
    this.dialogRef.close();
  }

  /**
   * Saves the user entered application information, which will
   * update the stored application list.
   */
  save() {
    const application: Application = {
      applicationName: this.applicationName,
      applicationURL: this.applicationURL
    };

    this.dialogRef.close(application);
  }

  ngOnInit() {}
}
