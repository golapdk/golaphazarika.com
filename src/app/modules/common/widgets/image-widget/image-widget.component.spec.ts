import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageWidgetComponent } from './image-widget.component';

describe('ImageWidgetComponent', () => {
  let component: ImageWidgetComponent;
  let fixture: ComponentFixture<ImageWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
