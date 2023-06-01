import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApegPage } from './apeg.page';

describe('ApegPage', () => {
  let component: ApegPage;
  let fixture: ComponentFixture<ApegPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ApegPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
