import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalCardComponent } from './additional-card.component';

describe('AdditionalCardComponent', () => {
  let component: AdditionalCardComponent;
  let fixture: ComponentFixture<AdditionalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdditionalCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdditionalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
