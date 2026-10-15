import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsDatails } from './projects-datails';

describe('ProjectsDatails', () => {
  let component: ProjectsDatails;
  let fixture: ComponentFixture<ProjectsDatails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsDatails],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsDatails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
