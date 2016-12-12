import { TestBed, async, tick, fakeAsync } from '@angular/core/testing';
import { AccordionModule } from './accordion.module';
import { AccordionComponent } from './accordion.component';

describe('Accordion component',  () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AccordionModule]
    });
  });

  beforeEach(async() => {
    TestBed.compileComponents();
  });

  describe('When the component is initialized', () => {
    let initialSetup = [
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
          'Child 3'
        ]
      }
    ];
    let fixture;

    beforeEach(() => {
      fixture = TestBed.createComponent(AccordionComponent);
    });

    it('should have defined a component', () => {
      expect(fixture.componentInstance).toBeDefined();
    });

    it('should create panels', () => {
      fixture.componentInstance.panels = [...initialSetup];

      fixture.detectChanges();

      expect(fixture.componentInstance.panels).toEqual(initialSetup);
      expect(fixture.componentInstance._panels.length).toBe(initialSetup.length);

      fixture.componentInstance.panels = [...initialSetup, {
        name: 'Panel 3',
        items: [
          'Child 1',
          'Child 2',
          'Child 3',
          'Child 4'
        ]
      }];
      fixture.detectChanges();

      expect(fixture.componentInstance.panels).not.toEqual(initialSetup);
      expect(fixture.componentInstance._panels.length).toBe(initialSetup.length + 1);
    });

    it('should calculate geometries', () => {
      fixture.componentInstance.panels = initialSetup;

      expect(fixture.componentInstance.headerSize).toBeUndefined();

      fixture.detectChanges();
      // fixture.componentInstance.ngAfterViewInit();

      expect(fixture.componentInstance.headerSize).toBeDefined();
      expect(fixture.componentInstance.availableHeight).toBeDefined();
    });

  });

});
