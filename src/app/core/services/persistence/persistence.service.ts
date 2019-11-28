import { Injectable } from "@angular/core";
import { Application } from "../configuration/configuration.service";

@Injectable({
  providedIn: "root"
})
export class PersistenceService {
  /**
   * Sets the given application in local storage, so
   * it will persist across application boots.
   * @param application Application to store in localstorage
   */
  setSelectedApplication(application: Application) {
    localStorage.setItem("SelectedApplication", JSON.stringify(application));
  }

  /**
   * Sets the given list of applications in local storage,
   * so it will persist across application boots.
   * @param applications Application list to store in localstorage
   */
  setApplicationList(applications: Application[]) {
    localStorage.setItem("ApplicationList", JSON.stringify(applications));
  }

  /**
   * Returns (if exists) the configured selected application
   * in the previous session.
   */
  getSelectedApplication(): Application {
    return JSON.parse(localStorage.getItem("SelectedApplication"));
  }

  /**
   * Returns (if exists) the list of applications
   * configured by the user in the previous session.
   */
  getApplicationList(): Application[] {
    return JSON.parse(localStorage.getItem("ApplicationList"));
  }

  constructor() {}
}
