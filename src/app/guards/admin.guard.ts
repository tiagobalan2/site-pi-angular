import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardService } from '../servicess/auth-guard.service'; // Ajuste o caminho conforme necessário

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthGuardService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    // Verifica se o usuário está autenticado e se tem a role de admin
    if (this.authService.isUserAdmin()) {
      return true; // Permitir acesso
    } else {
      this.router.navigate(['/inicial']); // Redirecionar se não for admin
      return false; // Negar acesso
    }
  }
}
