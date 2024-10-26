import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompetitionlistPage } from './competitionlist.page';

describe('CompetitionlistPage', () => {
  let component: CompetitionlistPage;
  let fixture: ComponentFixture<CompetitionlistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CompetitionlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
