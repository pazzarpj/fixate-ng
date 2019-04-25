import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionCardComponent } from './instruction-card.component';

describe('InstructionCardComponent', () => {
  let component: InstructionCardComponent;
  let fixture: ComponentFixture<InstructionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
