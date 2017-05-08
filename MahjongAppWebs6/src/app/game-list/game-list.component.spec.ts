import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameListComponent } from './game-list.component';

describe('GameListComponent', () => {
  let component: GameListComponent;
  let fixture: ComponentFixture<GameListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should contain 4 games', () => {
    expect(component.gameList.length).toBe(4);
  });

  it('should generate correct HTML', () => {
    const compiled = fixture.debugElement.nativeElement;
    console.log(compiled.querySelector('.games'));
    expect(compiled.querySelector('.games')).toBe(
      `
      <ul _ngcontent-c1="" class="games">
      <!--bindings={
        "ng-reflect-ng-for-of": "[object Object],[object Object"
      }--><li _ngcontent-c1="">
      <div _ngcontent-c1="">
      <label _ngcontent-c1="">id: </label>
      5903bdf9c240d4001158bf24
      </div>
      <div _ngcontent-c1="">
      <label _ngcontent-c1="">state: </label>
      open
      </div>
      </li><li _ngcontent-c1="">
      <div _ngcontent-c1="">
      <label _ngcontent-c1="">id: </label>
      5903bdadc240d4001158be93
      </div>
      <div _ngcontent-c1="">
      <label _ngcontent-c1="">state: </label>
      open
      </div>
      </li><li _ngcontent-c1="">
      <div _ngcontent-c1="">
      <label _ngcontent-c1="">id: </label>
      5903a160c66d5b0011fc2f5b
      </div>
      <div _ngcontent-c1="">
      <label _ngcontent-c1="">state: </label>
      open
      </div>
      </li><li _ngcontent-c1="">
      <div _ngcontent-c1="">
      <label _ngcontent-c1="">id: </label>
      59039b8cc66d5b0011fc2eca
      </div>
      <div _ngcontent-c1="">
      <label _ngcontent-c1="">state: </label>
      open
      </div>
      </li>
      </ul>
      `
      );
  });
});
