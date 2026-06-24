import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RegisterRequestDto } from '../../dto/RegisterRequestDto';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  httpClient = inject(HttpClient);
  
  private authUrl=`${environment.BASEURL}/api/v1/auth/register`;

  public createUser(data: RegisterRequestDto):Observable<any>{
     return this.httpClient.post(this.authUrl,data);
  }

}
