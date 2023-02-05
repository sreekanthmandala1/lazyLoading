import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoonlijkScoresComponent } from './persoonlijk-scores.component';

describe('PersoonlijkScoresComponent', () => {
  let component: PersoonlijkScoresComponent;
  let fixture: ComponentFixture<PersoonlijkScoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersoonlijkScoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersoonlijkScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
