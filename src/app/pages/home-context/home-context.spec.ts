import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContext } from './home-context';

describe('HomeContext', () => {
  let component: HomeContext;
  let fixture: ComponentFixture<HomeContext>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeContext],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeContext);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
