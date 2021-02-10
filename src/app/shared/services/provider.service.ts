import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MainService } from './main.service';
import {IMovie, IAuthResponse} from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService {

  constructor(http: HttpClient) {
    super(http);
  }

  register(username: any, pass: any, name: any, email: any){
    return this.post('', {
      username: username,
      password: pass,
      first_name: name, 
      email: email
    });
  }

  getMovies(): Promise<IMovie[]> {
    return this.get('http://localhost:8000/movieservice/movies/', {});
  }
}
