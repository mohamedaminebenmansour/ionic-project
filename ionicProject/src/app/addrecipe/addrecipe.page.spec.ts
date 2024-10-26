import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddrecipePage } from './addrecipe.page';

describe('AddrecipePage', () => {
  let component: AddrecipePage;
  let fixture: ComponentFixture<AddrecipePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddrecipePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
