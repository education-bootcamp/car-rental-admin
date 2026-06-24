import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RegisterRequestDto } from '../../dto/RegisterRequestDto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  httpClient = inject(HttpClient);

  private authUrl='http://localhost:8081/auth/register';

  public createUser(data: RegisterRequestDto):Observable<any>{
     return this.httpClient.post(this.authUrl,data);
  }

}
