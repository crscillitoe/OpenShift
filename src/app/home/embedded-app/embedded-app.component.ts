import { Component, OnInit, Input } from "@angular/core";
import { ElectronService } from "ngx-electron";

@Component({
  selector: "embedded-app",
  templateUrl: "./embedded-app.component.html",
  styleUrls: ["./embedded-app.component.scss"]
})
export class EmbeddedAppComponent implements OnInit {
  @Input() src: string;
  @Input() partition: string;

  constructor() {}

  ngOnInit() {}
}
