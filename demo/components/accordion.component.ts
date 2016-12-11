import { Component } from '@angular/core';
import { AccordionPanel } from '../../src/accordion/accordion.component';

@Component({
  selector: 'j3-accordion-demo',
  styles: [`
    /* accordion - default */
    #my-accordion {
      height: 480px;
      min-width: 300px;
      width: 300px;
      box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 15px 0 rgba(0,0,0,0.12);
      border-radius: 3px;
    }
    #my-accordion /deep/ .accordion-panel {
      background-color: #fff;
    }
    #my-accordion /deep/ .accordion-panel .panelHeader {
      height: 48px;
      line-height: 48px;
      background-color: #1976d2;
      color: #fff;
      box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 15px 0 rgba(0,0,0,0.12);
    }
    #my-accordion /deep/ .accordion-panel .panelHeader .panelName {
      font-size: 1.5em;
    }
    #my-accordion /deep/ .accordion-panel .panelChild {
      color: black;
    }
`],
  template: `
    <section id="componentDemo">
      <j3-accordion id="my-accordion" [panels]="accordion" (selected)="accordionResponse($event)"></j3-accordion>
    </section>
    <section id="componentDemoCode">
      <j3-syntax-highlighter
        class="syntax-highlighter"
        label="app.component.html"
        language="html"
      >
      {{demoHtml}}
      </j3-syntax-highlighter>
      <j3-syntax-highlighter
        class="syntax-highlighter"
        label='app.component.ts'
        language="typescript"
      >
        @Component({{"{"}}
          selector: 'app',
          styleUrls: ['app.component.scss'],
          templateUrl: 'app.component.html'
        {{"}"}})
        {{"export class AppComponent {"}}    
          accordion: AccordionPanel[] = [
            {{"{"}}
              name: 'Panel 1',
              items: [
                'Child 1',
                'Child 2',
                'Child 3',
                'Child 4'
              ]
            {{"},"}}
            {{"{"}}
              name: 'Panel 2',
              items: [
                'Child 1',
                'Child 2',
                'Child 3',
                'Child 4',
                'Child 5',
                'Child 6',
                'Child 7',
                'Child 8',
                'Child 9',
                'Child 10',
                'Child 11',
                'Child 12',
                'Child 13',
                'Child 14',
                'Child 15'
              ]
            {{"}"}}
          ];    
          accordionResponse(event) {{"{"}}
            console.log(event);
          {{"}"}}
        {{"}"}}
      </j3-syntax-highlighter>
      <j3-syntax-highlighter
        class="syntax-highlighter"
        label="app.component.scss"
        language="scss"
      >
        #my-accordion {{"{"}}
        height: 480px;
        min-width: 300px;
        width: 300px;
        box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 15px 0 rgba(0,0,0,0.12);
        border-radius: 3px;
        {{"}"}}
    
        #my-accordion /deep/ .accordion-panel {{"{"}}
        background-color: #fff;
        {{"}"}}
    
        #my-accordion /deep/ .accordion-panel .panelHeader {{"{"}}
        height: 48px;
        line-height: 48px;
        background-color: #1976d2;
        color: #fff;
        box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 15px 0 rgba(0,0,0,0.12);
        {{"}"}}
    
        #my-accordion /deep/ .accordion-panel .panelHeader .panelName {{"{"}}
        font-size: 1.5em;
        {{"}"}}
      </j3-syntax-highlighter>
    </section>
  `
})
export class AccordionDemoComponent {
  demoHtml: string = `<j3-accordion 
        id="my-accordion" 
        [panels]="accordion" 
        (selected)="accordionResponse($event)"
      ></j3-accordion>`;
  accordion: AccordionPanel[] = [
    {
      name: 'Panel 1',
      items: [
        'Child 1',
        'Child 2',
        'Child 3',
        'Child 4'
      ]
    },
    {
      name: 'Panel 2',
      items: [
        'Child 1',
        'Child 2',
        'Child 3',
        'Child 4',
        'Child 5',
        'Child 6',
        'Child 7',
        'Child 8',
        'Child 9',
        'Child 10',
        'Child 11',
        'Child 12',
        'Child 13',
        'Child 14',
        'Child 15'
      ]
    }
  ];
}
