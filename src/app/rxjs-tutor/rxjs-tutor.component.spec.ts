import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsTutorComponent } from './rxjs-tutor.component';

describe('RxjsTutorComponent', () => {
  let component: RxjsTutorComponent;
  let fixture: ComponentFixture<RxjsTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsTutorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
