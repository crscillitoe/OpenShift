import { Component, OnInit } from "@angular/core";
import {
  ConfigurationService,
  Application
} from "../core/services/configuration/configuration.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  applicationList: Application[] = [];
  selectedApplication: Application = null;

  constructor(private configurationService: ConfigurationService) {
    configurationService.currentlySelectedApplication.subscribe(
      selectedApplication => {
        this.selectedApplication = selectedApplication;
      }
    );

    configurationService.applicationList.subscribe(applicationList => {
      this.applicationList = applicationList;
    });
  }

  ngOnInit() {}
}
