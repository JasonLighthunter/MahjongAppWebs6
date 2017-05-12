import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListOpenComponent } from './game-list-open.component';

describe('GameListOpenComponent', () => {
  let component: GameListOpenComponent;
  let fixture: ComponentFixture<GameListOpenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameListOpenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameListOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
