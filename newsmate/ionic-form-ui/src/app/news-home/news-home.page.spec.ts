import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsHomePage } from './news-home.page';

describe('NewsHomePage', () => {
  let component: NewsHomePage;
  let fixture: ComponentFixture<NewsHomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewsHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
