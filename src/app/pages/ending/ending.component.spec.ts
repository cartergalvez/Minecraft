import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EndingComponent } from './ending.component';

describe('EndingComponent', () => {
  let component: EndingComponent;
  let fixture: ComponentFixture<EndingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndingComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EndingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
