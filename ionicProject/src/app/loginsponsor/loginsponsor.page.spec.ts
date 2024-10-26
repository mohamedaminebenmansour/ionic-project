import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginsponsorPage } from './loginsponsor.page';

describe('LoginsponsorPage', () => {
  let component: LoginsponsorPage;
  let fixture: ComponentFixture<LoginsponsorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LoginsponsorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
