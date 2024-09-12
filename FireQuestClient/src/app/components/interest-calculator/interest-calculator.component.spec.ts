import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestCalculatorComponent } from './interest-calculator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('InterestCalculatorComponent', () => {
  let component: InterestCalculatorComponent;
  let fixture: ComponentFixture<InterestCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterestCalculatorComponent, BrowserAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterestCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
