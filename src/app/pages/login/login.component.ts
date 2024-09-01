import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Corrigido para Angular
import { PrimaryInputComponent } from '../../component/primary-input/primary-input.component';
import { DefaultLoginLayoutComponent } from '../../component/default-login-layout/default-login-layout.component';
import { LoginService } from '../../servicess/login.service';
import { ToastrService } from 'ngx-toastr';


interface LoginForm {
  email: FormControl,
  password: FormControl
}


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent
  ],
  providers:[
    LoginService
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm!: FormGroup<LoginForm>;


  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }

  submit() {
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
      next:() => {this.toastService.success("Login feito com sucesso");
      this.router.navigate(['/user']);  // Redireciona para a tela do usuário após login bem-sucedido
      },
      error: () => this.toastService.error("Erro, usuario ou senha inválidos")
    })
  }

 
}
