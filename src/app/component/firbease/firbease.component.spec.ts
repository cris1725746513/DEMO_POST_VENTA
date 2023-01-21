import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirbeaseComponent } from './firbease.component';

describe('FirbeaseComponent', () => {
  let component: FirbeaseComponent;
  let fixture: ComponentFixture<FirbeaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirbeaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirbeaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
