import { NgModule, ApplicationRef } from '@angular/core';

import { AppComponent } from './app.component';
import { removeNgStyles, createNewHosts } from '@angularclass/hmr';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { J3ComponentsModule } from '../src';
import { AccordionDemoComponent } from './components/accordion.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    J3ComponentsModule
  ],
  declarations: [
    AppComponent,
    AccordionDemoComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private appRef: ApplicationRef) { }

  hmrOnDestroy(store) {
    const cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    store.disposeOldHosts = createNewHosts(cmpLocation);
    removeNgStyles();
  }

  hmrAfterDestroy(store) {
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
