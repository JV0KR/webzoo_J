import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalComponentsComponent } from './animal-components.component';

describe('AnimalComponentsComponent', () => {
  let component: AnimalComponentsComponent;
  let fixture: ComponentFixture<AnimalComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
