import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoNaviComponent } from './todo-navi.component';

describe('TodoNaviComponent', () => {
  let component: TodoNaviComponent;
  let fixture: ComponentFixture<TodoNaviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoNaviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoNaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
