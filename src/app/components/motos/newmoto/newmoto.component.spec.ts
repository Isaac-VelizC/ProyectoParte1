import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmotoComponent } from './newmoto.component';

describe('NewmotoComponent', () => {
  let component: NewmotoComponent;
  let fixture: ComponentFixture<NewmotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewmotoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewmotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
