import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const authToken = sessionStorage.getItem('auth-token');

    if (authToken) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  isUserAdmin(): boolean {
    if (typeof window !== 'undefined') {
        const userRole = sessionStorage.getItem('userRole'); // ou a forma que você armazena a role
        return userRole === 'ADMIN'; // ajuste conforme necessário
    }
    return false; // Retorna false se não estiver no navegador
}
}