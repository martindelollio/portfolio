import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitudDetails } from './solicitud-details';

describe('SolicitudDetails', () => {
  let component: SolicitudDetails;
  let fixture: ComponentFixture<SolicitudDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitudDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitudDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
