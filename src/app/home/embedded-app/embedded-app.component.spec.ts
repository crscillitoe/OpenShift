import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbeddedAppComponent } from './embedded-app.component';

describe('EmbeddedAppComponent', () => {
  let component: EmbeddedAppComponent;
  let fixture: ComponentFixture<EmbeddedAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmbeddedAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmbeddedAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
