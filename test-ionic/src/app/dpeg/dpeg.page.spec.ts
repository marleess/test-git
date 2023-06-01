import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DpegPage } from './dpeg.page';

describe('DpegPage', () => {
  let component: DpegPage;
  let fixture: ComponentFixture<DpegPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DpegPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
