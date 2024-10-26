import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipelistPage } from './recipelist.page';

describe('RecipelistPage', () => {
  let component: RecipelistPage;
  let fixture: ComponentFixture<RecipelistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RecipelistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
