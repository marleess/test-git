import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BpegPage } from './bpeg.page';

describe('BpegPage', () => {
  let component: BpegPage;
  let fixture: ComponentFixture<BpegPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BpegPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
