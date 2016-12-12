import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild, AfterViewInit, HostBinding, ChangeDetectionStrategy
} from '@angular/core';
import { AccordionPanel } from './accordion.component';

@Component({
  selector: 'j3-accordion-panel',
  styles: [`
    :host {
      position: absolute;
      display: flex;
      flex-flow: column nowrap;
      width: 100%;
      will-change: transform;
    }
    :host(.animatable) {
      transition: transform 0.3s cubic-bezier(0, 0, 0.3, 1);    
    }
    
    #tabContent {
      overflow-x: hidden;
      overflow-y: auto;
    }
    
    .panelHeader {
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      padding: 0 12px;
      height: 48px;
      border: none;
      border-bottom: 1px solid rgba(0,0,0,0.16);
      position: relative;
    }
    .panelHeader:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.26);
      opacity: 0;
    }
    .panelHeader:focus {
      outline: none;
    }
    .panelHeader:hover {
      cursor: pointer;
    }
    .panelHeader:focus:after, .panelHeader:hover:after {
      opacity: 1;
    }
    
    .panelName {
      margin: 0;
      font-variant: all-small-caps;
    }
    
    #panelChildren {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
    
    .panelChild {
      height: 48px;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      position: relative;
      padding: 0 12px;
    }
    .panelChild:hover {
        cursor: pointer;
    }
  `],
  template: `
    <button
      id="{{panelName}}"
      class="panelHeader"
      role="tab"
      (click)="togglePanel()"
      #header
    >
      <i class="material-icons" *ngIf="panel.icon">{{panel.icon}}</i><h4 class="panelName">&nbsp;{{panel.name}}</h4>
    </button>
    <div 
      id="tabContent" 
      #content
      role="tabpanel"
      [attr.aria-labelledby]="panelName"
    >
      <ul id="panelChildren">
        <li 
          class="panelChild" 
          *ngFor="let child of panel.items" 
          (click)="action.emit({panel: panel.name, item: child})"
        >
          {{child}}
        </li>
      </ul>
    </div>
`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionPanelComponent implements OnInit, AfterViewInit {
  @HostBinding('attr.aria-expanded')
  expanded: boolean = false;

  @HostBinding('attr.aria-hidden')
  readonly _hidden: boolean = !this.expanded;

  @ViewChild('header')
  header: ElementRef;

  @ViewChild('content')
  content: ElementRef;

  @Input()
  panel: AccordionPanel;

  @Input()
  index: number;

  @Output()
  expand: EventEmitter<any> = new EventEmitter();

  @Output()
  action: EventEmitter<any> = new EventEmitter();

  headerHeight: number;
  panelName: string;

  constructor(public el: ElementRef) { }

  ngOnInit() {
    if (this.index === 0) {
      this.expanded = true;
    }
    this.panelName = `panel-${this.sanitizeName(this.panel.name)}`;
  }

  ngAfterViewInit() {
    this.headerHeight = this.header.nativeElement.offsetHeight;
  }

  togglePanel() {
    this.expanded = !this.expanded;
    if (this.expanded) this.expandPanel();
  }

  expandPanel() {
    this.expand.emit(this.index);
  }

  sanitizeName(name: string): string {
    return name.toString().toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  }

}
