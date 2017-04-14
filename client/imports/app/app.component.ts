import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


import template from "./app.html";

@Component({
  selector: 'songs-pot',
  template
})

export class SongsPot {
  constructor(translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    // use user's language
    translate.use(translate.getBrowserLang());
  }
}