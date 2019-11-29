import { Component, OnInit, Input, AfterViewInit } from "@angular/core";

@Component({
  selector: "embedded-app",
  templateUrl: "./embedded-app.component.html",
  styleUrls: ["./embedded-app.component.scss"]
})
export class EmbeddedAppComponent implements OnInit, AfterViewInit {
  @Input() src: string;
  @Input() partition: string;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    const webview = document.createElement("webview");
    webview.src = this.src;
    webview.partition = this.partition;
    webview.className = "full";

    webview.useragent =
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36";

    webview.httpreferrer = "no-referrer";

    const div = document.getElementById(this.src);
    div.appendChild(webview);
  }
}
