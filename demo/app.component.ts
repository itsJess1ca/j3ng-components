import { Component } from '@angular/core';
import 'highlight.js/styles/darkula.css';

@Component({
  selector: 'app',
  template: `
    <nav id="nav">
      <header><h3>Component List</h3></header>
      <div class="navItem" (click)="state=''">Accordion</div>
      <div class="navItem">More Soon</div>
    </nav>
    <content id="content">
      <div id="appbar"></div>
      <j3-accordion-demo class="demo" *ngIf="!state"></j3-accordion-demo>
    </content>
`,
  styles: [`
  :host {
    display: flex;
    flex-flow: row nowrap;
    padding: 0;
    margin: 0;
    color: white;
  }
  
  #nav {
    position: fixed;
    background-color: #1976d2;
    text-align: center;
    height: 100%;
    width: 300px;
    z-index: 2;
  }
  .navItem {
    height: 48px;
    line-height: 48px;
  }
  .navItem:hover {
      cursor: pointer;
    background-color: #195cb7;
  }
  
  #content {
    margin-left: 300px;
    margin-top: 64px;
    flex: 6;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
  
  #appbar {
    position: fixed;
    top: 0;
    width: 100%;
    display: block;
    height: 64px;
    background-color: #1976d2;
    z-index: 1;
  }
  
  .demo {
    width: 100%;
  }
  
  #content /deep/ #componentDemo {
    padding-top: 36px;
    display: flex;
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
    padding-bottom: 25px;
    margin-bottom: 50px;
  }
  #content /deep/ #componentDemoCode {
    display: flex;
    width: 100%;
    flex-flow: column nowrap;
    align-items: center;
  }
  
  /*syntax-highlighter*/
  #content /deep/ .syntax-highlighter {
    width: 90%;
  }
  `]
})
export class AppComponent {

  get state() {
    return window.state;
  }

  set state(state) {
    window.state = state;
  }

  version: string = APP_VERSION;

  accordionResponse(event) {
    console.log(event);
  }
}
