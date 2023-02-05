import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoonlijkTipsComponent } from './persoonlijk-tips.component';

describe('PersoonlijkTipsComponent', () => {
  let component: PersoonlijkTipsComponent;
  let fixture: ComponentFixture<PersoonlijkTipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersoonlijkTipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersoonlijkTipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
