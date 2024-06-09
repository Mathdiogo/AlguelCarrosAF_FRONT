import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HOmeComponent } from './home.component';

describe('HOmeComponent', () => {
  let component: HOmeComponent;
  let fixture: ComponentFixture<HOmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HOmeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HOmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
