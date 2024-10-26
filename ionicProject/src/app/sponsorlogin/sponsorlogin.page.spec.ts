import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SponsorloginPage } from './sponsorlogin.page';

describe('SponsorloginPage', () => {
  let component: SponsorloginPage;
  let fixture: ComponentFixture<SponsorloginPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SponsorloginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
