import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFormfy } from './ngx-formfy';

describe('NgxFormfy', () => {
  let component: NgxFormfy;
  let fixture: ComponentFixture<NgxFormfy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxFormfy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxFormfy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
