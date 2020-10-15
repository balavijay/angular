import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private httpClient: HttpClient) { }

  getAllProjects() : Observable<Project[]> {
    console.log("Projects Services Called");
    let result = this.httpClient.get<Project[]>('http://localhost:4200/assets/projectsJSON');
    
    return result;
    
  }

}




