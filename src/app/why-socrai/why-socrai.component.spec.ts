import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhySocraiComponent } from './why-socrai.component';

describe('WhySocraiComponent', () => {
  let component: WhySocraiComponent;
  let fixture: ComponentFixture<WhySocraiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhySocraiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhySocraiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
