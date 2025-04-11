import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectInterface } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private apiUrl = 'http://localhost:8080/projects/'

  constructor(private http: HttpClient) { }
  getProjects(): Observable<ProjectInterface[]> {
    return this.http.get<ProjectInterface[]>(this.apiUrl);
  }
}
