import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddcompetitionPage } from './addcompetition.page';

describe('AddcompetitionPage', () => {
  let component: AddcompetitionPage;
  let fixture: ComponentFixture<AddcompetitionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddcompetitionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
