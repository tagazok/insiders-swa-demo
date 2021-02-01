import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthSWAService {
  user: any = null;
  constructor() { }

  async getUser() {
    try {
      const response = await fetch('/.auth/me');
      const data = await response.json();
      this.user = data.clientPrincipal;
      this.getGitHubUserInfo();
      
      return this.user;
    } catch(error) {
      return error;
    }
  }

  async getGitHubUserInfo() {
    if (!this.user) return null;
    try {
      const response = await fetch(`https://api.github.com/users/${this.user.userDetails}`);
      const data = await response.json();
      this.user.details = data;
    } catch(error) {
      return null;
    }
  }

  isLogged() {
    return !!this.user;
  }
}
