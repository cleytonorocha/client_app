import { Component, AfterViewInit } from '@angular/core';

import jQuery from 'jquery'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {

  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      (function ($) {
        "use strict";

        // Add active state to sidbar nav links
        var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
        $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function () {
          if ($(this).attr("href") === path) {
            $(this).addClass("active");
          }
        });

        // Toggle the side navigation
        $("#sidebarToggle").on("click", function (e) {
          e.preventDefault();
          $("body").toggleClass("sb-sidenav-toggled");
        });
      })(jQuery);
    }
  }
}
