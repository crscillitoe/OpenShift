import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { PersistenceService } from "../persistence/persistence.service";

@Injectable({
  providedIn: "root"
})
export class ConfigurationService {
  public currentlySelectedApplication: BehaviorSubject<
    Application
  > = new BehaviorSubject<Application>(null);

  public applicationList: BehaviorSubject<Application[]> = new BehaviorSubject<
    Application[]
  >([]);

  private _applicationList: Application[] = [];

  constructor(private persistenceService: PersistenceService) {
    this.currentlySelectedApplication.next(
      persistenceService.getSelectedApplication()
    );

    this._applicationList = persistenceService.getApplicationList() || [];
    this.applicationList.next(this._applicationList);
  }

  /**
   * Selects the given application id for viewing.
   * @param application The application to select.
   */
  selectApplication(application: Application): void {
    this.currentlySelectedApplication.next(application);
    this.persistenceService.setSelectedApplication(application);
  }

  /**
   * Adds the given application onto the shift system.
   * @param newApplication The new application to add into memory
   */
  addApplication(newApplication: Application): void {
    this._applicationList.push(newApplication);
    this.updateLocalApplicationList();
  }

  setApplicationList(applications: Application[]): void {
    this._applicationList = applications;
    this.updateLocalApplicationList();
  }

  /**
   * Removes the given application from the system.
   * @param applicationID The id of the application to remove
   * @return boolean true on success, false on failure
   */
  removeApplication(applicationID: number): void {
    for (let i = 0; i < this._applicationList.length; i++) {
      if (this._applicationList[i].applicationID === applicationID) {
        this._applicationList.splice(i, 1);
      }
    }

    this.updateLocalApplicationList();
  }

  private updateLocalApplicationList(): void {
    this.applicationList.next(this._applicationList);
    this.persistenceService.setApplicationList(this._applicationList);
  }
}

export interface Application {
  applicationID: number;
  applicationURL: string;
  applicationName: string;
}
