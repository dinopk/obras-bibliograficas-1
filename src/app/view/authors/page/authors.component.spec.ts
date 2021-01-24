import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorsComponent } from './authors.component';

describe('AuthorsComponent', () => {
  let component: AuthorsComponent;
  let fixture: ComponentFixture<AuthorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthorsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should format all names in the given array', () => {
    const arr = ['Flávio Maran Florentino', 'Pereira'];
    const assert = [
      { name: 'Maran Florentino, Flávio', amount: 3 },
      { name: 'PEREIRA', amount: 1 },
    ];
    expect(component.handleNameVariantsFormat(arr)).toEqual(assert);
  });
});
