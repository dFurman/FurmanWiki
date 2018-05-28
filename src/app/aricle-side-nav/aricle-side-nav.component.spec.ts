import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AricleSideNavComponent } from './aricle-side-nav.component';

describe('AricleSideNavComponent', () => {
  let component: AricleSideNavComponent;
  let fixture: ComponentFixture<AricleSideNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AricleSideNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AricleSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
