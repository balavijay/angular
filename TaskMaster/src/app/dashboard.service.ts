import { Injectable } from '@angular/core';


export class DashboardService {

  getTeamMembersSummary() : any[] {
    const TeamMembersSummary =  [
      {region: "East", count: 30, notAvailable: 20},
      {region: "West", count: 20, notAvailable: 15},
      {region: "North", count: 80, notAvailable: 10},
      {region: "South", count: 20, notAvailable: 30}
    ];

    return TeamMembersSummary;
  }

  getTeamMembers() : any[] {

    const TeamMembers  = [
      {
        region: "East", members: [
          { id: "E1", name: "Albert Baggage", status: "Available"},
          { id: "E2", name: "Bravo Baggage", status: "Unavailable"},
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

    return TeamMembers;
  }

  getClients() : any[]{

    const clients = [
      "ABC Infotech", "Brila Corporation", "Cabbies Chase", "Delta Farms"
    ];

    return clients;

  }

  getProjects() : any[]{

    const project = [
      "Resource Mgmt System", "Network Mgmt System", "User Profile", "MS SQL MS"
    ];

    return project;

  }


}
