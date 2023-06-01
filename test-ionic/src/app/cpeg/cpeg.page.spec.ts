import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CpegPage } from './cpeg.page';

describe('CpegPage', () => {
  let component: CpegPage;
  let fixture: ComponentFixture<CpegPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CpegPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
