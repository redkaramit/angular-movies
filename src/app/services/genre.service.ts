import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GenreDTO, GenreCreationDTO } from '../Models/Genre.model';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http: HttpClient) { }
  private apiUrl = environment.apiUrl + "/Genre";
  getAll(): Observable<GenreDTO[]> {
    //return [{ id: 1, name: 'Drama' },{ id: 2, name: 'Comedy' }]; 
    return this.http.get<GenreDTO[]>(this.apiUrl);
  }

  getById(id : number): Observable<GenreDTO> {
    //return [{ id: 1, name: 'Drama' },{ id: 2, name: 'Comedy' }]; 
    return this.http.get<GenreDTO>(this.apiUrl+'/'+id);
  }

  creat(genre: GenreCreationDTO) {
    return this.http.post(this.apiUrl, genre);
  }

  edit(id : number,genre: GenreCreationDTO) {
    return this.http.put(this.apiUrl+'/'+id, genre);
  }

  delete(id : number) {
    return this.http.delete(this.apiUrl+'/'+id);
  }



}
