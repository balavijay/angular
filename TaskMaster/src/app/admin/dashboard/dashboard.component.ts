import { Component, OnInit } from '@angular/core';

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


  constructor() { }
  
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

    this.Clients = [
      "ABC Infotech", "Brila Corporation", "Cabbies Chase"
    ];

    this.Projects = [
      "Resource Mgmt System", "Network Mgmt System", "User Profile"
    ];

    this.SelectedProject = this.Projects[0];

    this.TeamMemberSummary = [
      {region: "East", count: 100, notAvailable: 20},
      {region: "West", count: 10, notAvailable: 0},
      {region: "North", count: 80, notAvailable: 10},
      {region: "South", count: 20, notAvailable: 30}
    ];

    this.TeamMembers = [
      {
        region: "East", members: [
          { id: "E1", name: "Lourd Mike", status: "Available"},
          { id: "E2", name: "Albert Mike", status: "Unavailable"},
          { id: "E3", name: "Charles Baggage", status: "Available"},

        ]
      },
      {
        region: "West", members: [
          { id: "W1", name: "Lady Lira", status: "Available"},
          { id: "W2", name: "Chris Pattison ", status: "Unavailable"},
          { id: "W3", name: "Ngidi Lungi", status: "Available"},

        ]
      },
      {
        region: "North", members: [
          { id: "N1", name: "Abel Morkel", status: "Available"},
          { id: "N2", name: "Dale Styen", status: "Unavailable"},
          { id: "N3", name: "Jacques Kallis", status: "Available"},
          { id: "N4", name: "Mark Boucher", status: "Available"}

        ]
      },
      {
        region: "South", members: [
          { id: "S1", name: "Mark Waugh", status: "Available"},
          { id: "S2", name: "Steve Waugh", status: "Unavailable"},
          { id: "S3", name: "Mark Taylor", status: "Available"},

        ]
      }
    ];


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
      
    }  
  };

  onYearChange($event) {
    console.log($event.target.innerHTML.trim());
    this.selectedYear = $event.target.innerHTML.trim();
  };

}
