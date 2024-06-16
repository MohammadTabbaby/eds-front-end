import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an invalid form when fields are empty', () => {
    component.loginForm.controls['username'].setValue('');
    component.loginForm.controls['password'].setValue('');
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('should have a valid form when fields are filled', () => {
    component.loginForm.controls['username'].setValue('testuser');
    component.loginForm.controls['password'].setValue('testpassword');
    expect(component.loginForm.valid).toBeTruthy();
  });

  it('should emit an event when the form is submitted', () => {
    spyOn(component.login, 'emit');

    component.loginForm.controls['username'].setValue('testuser');
    component.loginForm.controls['password'].setValue('testpassword');

    const formElement = fixture.debugElement.query(By.css('form'));
    formElement.triggerEventHandler('ngSubmit', null);

    expect(component.login.emit).toHaveBeenCalledWith({
      username: 'testuser',
      password: 'testpassword'
    });
  });

  it('should call the login method when the submit button is clicked', () => {
    spyOn(component, 'onLogin');

    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();

    expect(component.onLogin).toHaveBeenCalled();
  });
});
