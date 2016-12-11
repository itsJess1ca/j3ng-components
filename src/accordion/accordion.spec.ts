import { TestBed } from '@angular/core/testing';
import { AccordionModule } from './accordion.module';

describe('Accordion component',  () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AccordionModule]
    });
  });

  beforeEach(async() => {
    TestBed.compileComponents();
  });

  describe('feign tests for now', () => {
    it('should pass', () => {
      expect(1).toBe(1);
    });
  });

});
