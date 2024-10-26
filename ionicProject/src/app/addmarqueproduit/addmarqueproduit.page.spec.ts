import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddmarqueproduitPage } from './addmarqueproduit.page';

describe('AddmarqueproduitPage', () => {
  let component: AddmarqueproduitPage;
  let fixture: ComponentFixture<AddmarqueproduitPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddmarqueproduitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
