import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MesrecettePage } from './mesrecette.page';

describe('MesrecettePage', () => {
  let component: MesrecettePage;
  let fixture: ComponentFixture<MesrecettePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MesrecettePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
