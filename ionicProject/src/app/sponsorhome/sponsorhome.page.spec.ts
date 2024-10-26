import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SponsorhomePage } from './sponsorhome.page';

describe('SponsorhomePage', () => {
  let component: SponsorhomePage;
  let fixture: ComponentFixture<SponsorhomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SponsorhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
