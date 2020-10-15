import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  Designation: string;
  Username: string;
  NoOfTeamMembers: number;
  TotalCostofAllProject: number;
  PendingTasks: number;
  UpcomingProject: number;
  ProjectCost: number;

  CurrentExpenditure: number;
  AvailableFunds: number;

  Years : number[];
  selectedYear: number;

  Clients: string[];
  Projects: string[];
  SelectedProject: string;
  TeamMemberSummary: any[];
  TeamMembers: any[];


  constructor(private dashboardService: DashboardService) { }
  
  ngOnInit(): void {

    this.Designation            = "Technical Architect";
    this.Username               = "Coding King";
    this.NoOfTeamMembers        = 67;
    this.TotalCostofAllProject  = 240;
    this.PendingTasks           = 15;
    this.UpcomingProject        = 2;
    this.ProjectCost            = 21; 

    this.CurrentExpenditure     = 12121;
    this.AvailableFunds         = 1200;

    this.Years = [
      2020, 2019, 2018, 2017, 2016
    ];
    this.selectedYear = this.Years[0];

    this.Clients = this.dashboardService.getClients();

    this.Projects = this.dashboardService.getProjects();

    this.SelectedProject = this.Projects[0];

    this.TeamMemberSummary = this.dashboardService.getTeamMembersSummary();

    this.TeamMembers = this.dashboardService.getTeamMembers();


  }

  onProjectChange($event) {
    
    
    if($event.target.innerHTML.trim() == this.Projects[0] ) {
      
      this.ProjectCost = 100;
      this.CurrentExpenditure = 110;
      this.AvailableFunds = -10;
      this.SelectedProject = this.Projects[0];

    } else if($event.target.innerHTML.trim() == this.Projects[1] ) {

      this.ProjectCost = 200;
      this.CurrentExpenditure = 220;
      this.AvailableFunds = -20;
      this.SelectedProject = this.Projects[1];
      
    } else if($event.target.innerHTML.trim() == this.Projects[2] ) {

      this.ProjectCost = 440;
      this.CurrentExpenditure = 220;
      this.AvailableFunds = 220;
      this.SelectedProject = this.Projects[2];
      
    } else if($event.target.innerHTML.trim() == this.Projects[3] ) {

      this.ProjectCost = 4546677;
      this.CurrentExpenditure = 2232323;
      this.AvailableFunds = 121212;
      this.SelectedProject = this.Projects[3];
      
    }  
  };

  onYearChange($event) {
    console.log($event.target.innerHTML.trim());
    this.selectedYear = $event.target.innerHTML.trim();
  };

}
