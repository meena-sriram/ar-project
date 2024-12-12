import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayArComponent } from './play-ar.component';

describe('PlayArComponent', () => {
  let component: PlayArComponent;
  let fixture: ComponentFixture<PlayArComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayArComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
