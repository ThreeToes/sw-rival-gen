/**
 * Created by poiso_000 on 09/08/2016.
 */
/**
 * Created by poiso_000 on 26/07/2016.
 */
import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {AppComponent} from './component/app.component';


enableProdMode();
bootstrap(AppComponent, [HTTP_PROVIDERS]);