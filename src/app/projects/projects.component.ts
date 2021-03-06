import { Component, OnInit } from '@angular/core';
import { Project } from "../project";
import { PROJECTS } from "../projects-list";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {
  projects = PROJECTS;
  selectedProject: Project;

  constructor() { }

  ngOnInit() {
  }

  onSelect(project: Project): void {
    this.selectedProject = project;
  }

}
