import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarqueproduitlistPage } from './marqueproduitlist.page';

describe('MarqueproduitlistPage', () => {
  let component: MarqueproduitlistPage;
  let fixture: ComponentFixture<MarqueproduitlistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MarqueproduitlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
