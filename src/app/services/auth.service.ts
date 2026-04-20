import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly sessionKey = 'datagrad-authenticated';
  private readonly usernameValue = 'datagrad-admin';
  private readonly passwordValue = 'DataGrad123!';
  private readonly authState = new BehaviorSubject<boolean>(this.hasStoredSession());

  readonly isLoggedIn$ = this.authState.asObservable();

  login(username: string, password: string): boolean {
    const isValid = username === this.usernameValue && password === this.passwordValue;

    if (isValid) {
      sessionStorage.setItem(this.sessionKey, 'true');
      this.authState.next(true);
    }

    return isValid;
  }

  logout(): void {
    sessionStorage.removeItem(this.sessionKey);
    this.authState.next(false);
  }

  isAuthenticated(): boolean {
    return this.authState.value;
  }

  private hasStoredSession(): boolean {
    return sessionStorage.getItem(this.sessionKey) === 'true';
  }
}