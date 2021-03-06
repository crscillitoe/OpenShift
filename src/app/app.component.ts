import { Component } from "@angular/core";
import { ElectronService } from "./core/services";
import { TranslateService } from "@ngx-translate/core";
import { Titlebar, Color } from "custom-electron-titlebar";
import { AppConfig } from "../environments/environment";
import { DeviceDetectorService } from "ngx-device-detector";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  constructor(
    public electronService: ElectronService,
    private translate: TranslateService,
    private deviceService: DeviceDetectorService
  ) {
    translate.setDefaultLang("en");
    console.log("AppConfig", AppConfig);

    if (electronService.isElectron) {
      console.log(process.env);
      console.log("Mode electron");
      console.log("Electron ipcRenderer", electronService.ipcRenderer);
      console.log("NodeJS childProcess", electronService.childProcess);

      if (this.deviceService.os !== "Mac") {
        new Titlebar({
          backgroundColor: Color.fromHex("#303030"),
          menu: null,
          titleHorizontalAlignment: "left",
          closeable: true
        });
      }
    } else {
      console.log("Mode web");
    }
  }
}
