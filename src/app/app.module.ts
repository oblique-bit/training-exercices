import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {OB_BANNER, ObExternalLinkModule, ObMasterLayoutModule, multiTranslateLoader} from '@oblique/oblique';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import localeDECH from '@angular/common/locales/de-CH';
import localeFRCH from '@angular/common/locales/fr-CH';
import localeITCH from '@angular/common/locales/it-CH';
import {HttpClientModule} from '@angular/common/http';
import {TranslateModule} from '@ngx-translate/core';
import {environment} from '../environments/environment';
import {HomeComponent} from './home/home.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

registerLocaleData(localeDECH);
registerLocaleData(localeFRCH);
registerLocaleData(localeITCH);

@NgModule({
	declarations: [AppComponent, HomeComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ObMasterLayoutModule, // add other Oblique modules as needed
		BrowserAnimationsModule,
		HttpClientModule,
		TranslateModule.forRoot(multiTranslateLoader()),
		MatButtonModule,
		MatCardModule,
		ObExternalLinkModule
	],
	providers: [
		{provide: LOCALE_ID, useValue: 'de-CH'},
		{provide: OB_BANNER, useValue: environment.banner}
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
