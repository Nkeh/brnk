import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProjectsService } from '../projects.service';
import { ProjectInterface } from '../project';
import { education } from './education';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  projects: ProjectInterface[] = [];//Array to store the projects

  constructor(private projectService: ProjectsService) {}
  educationList = education;



  ngOnInit(): void{
    this.projectService.getProjects().subscribe(
      (data: ProjectInterface[]) => {
        this.projects = data;
      },
      (error) => {
        console.error('Error fetching projects', error);
      }
    )
  }
}
