import { Injectable } from '@angular/core';

import { ProjectInterface } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  projectList: ProjectInterface[] = []

  constructor() { }

  getAllProjects(): ProjectInterface[] {
    return this.projectList;
  }

  getProjectById(id: number): ProjectInterface | undefined {
    return this.projectList.find(project => project.id === id )
  }

}
