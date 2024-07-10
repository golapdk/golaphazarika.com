import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesWidgetComponent } from './notes-widget.component';

describe('NotesWidgetComponent', () => {
  let component: NotesWidgetComponent;
  let fixture: ComponentFixture<NotesWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotesWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
