import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoonlijkAnalysisComponent } from './persoonlijk-analysis.component';

describe('PersoonlijkAnalysisComponent', () => {
  let component: PersoonlijkAnalysisComponent;
  let fixture: ComponentFixture<PersoonlijkAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersoonlijkAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersoonlijkAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
