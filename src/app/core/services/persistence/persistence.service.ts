import { Injectable } from "@angular/core";
import { Application } from "../configuration/configuration.service";

@Injectable({
  providedIn: "root"
})
export class PersistenceService {
  setSelectedApplication(application: Application) {
    localStorage.setItem("SelectedApplication", JSON.stringify(application));
  }

  setApplicationList(applications: Application[]) {
    localStorage.setItem("ApplicationList", JSON.stringify(applications));
  }

  getSelectedApplication(): Application {
    return JSON.parse(localStorage.getItem("SelectedApplication"));
  }

  getApplicationList(): Application[] {
    return JSON.parse(localStorage.getItem("ApplicationList"));
  }

  constructor() {}
}
