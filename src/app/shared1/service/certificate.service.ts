import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CertificateService {
  constructor(private http: HttpClient) {}

  public verifyCode(verificationCode: any) {
    return this.http.get(
      `${environment.baseUrl}/verify/${verificationCode}`,
      this.getAccessHttpOptions()
    );
  }

  getAccessHttpOptions(): object {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
        // Authorization: this.auth.currentUser ? "Bearer " + this.auth.currentUser.token : '',
      }),
    };
  }
}
