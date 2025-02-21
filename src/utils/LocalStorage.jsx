const employees = [
  {
      "id": 1,
      "name": "Abhiraj Patel",
      "email": "e1@ex.com",
      "password": "1234",
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "taskTitle": "Update Project Plan",
              "taskDescription": "Review and update the project plan for Q1 deliverables.",
              "taskDate": "2025-01-10",
              "category": "Planning"
          },
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "taskTitle": "Team Meeting",
              "taskDescription": "Attend the weekly team meeting and present updates.",
              "taskDate": "2025-01-05",
              "category": "Meeting"
          },
          {
              "active": false,
              "newTask": false,
              "completed": false,
              "failed": true,
              "taskTitle": "Submit Report",
              "taskDescription": "Submit the monthly performance report.",
              "taskDate": "2025-01-06",
              "category": "Reporting"
          }
      ],
      "taskCount": { "active": 1, "newTask": 1, "completed": 1, "failed": 1 }
  },
  {
      "id": 2,
      "name": "Vivek Kumar",
      "email": "employee2@example.com",
      "password": "2345",
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "taskTitle": "Code Review",
              "taskDescription": "Review the codebase for module X and provide feedback.",
              "taskDate": "2025-01-11",
              "category": "Development"
          },
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "taskTitle": "Update Documentation",
              "taskDescription": "Update user manuals for the new release.",
              "taskDate": "2025-01-04",
              "category": "Documentation"
          }
      ],
      "taskCount": { "active": 1, "newTask": 1, "completed": 1, "failed": 0 }
  },
  {
      "id": 3,
      "name": "Shiva Tiwari",
      "email": "employee3@example.com",
      "password": "3456",
      "tasks": [
          {
              "active": false,
              "newTask": false,
              "completed": false,
              "failed": true,
              "taskTitle": "Fix Bug #101",
              "taskDescription": "Resolve the critical bug reported in the production environment.",
              "taskDate": "2025-01-07",
              "category": "Bug Fixing"
          },
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "taskTitle": "Test New Features",
              "taskDescription": "Conduct testing for the upcoming feature release.",
              "taskDate": "2025-01-08",
              "category": "Testing"
          },
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "taskTitle": "Team Presentation",
              "taskDescription": "Prepare and deliver the presentation for the team’s achievements.",
              "taskDate": "2025-01-03",
              "category": "Presentation"
          }
      ],
      "taskCount": { "active": 1, "newTask": 1, "completed": 1, "failed": 1 }
  },
  {
      "id": 4,
      "name": "Adarsh Pandey",
      "email": "employee4@example.com",
      "password": "4567",
      "tasks": [
          {
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false,
              "taskTitle": "Prepare Budget",
              "taskDescription": "Create a budget proposal for the next fiscal year.",
              "taskDate": "2025-01-09",
              "category": "Finance"
          },
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "taskTitle": "Vendor Meeting",
              "taskDescription": "Meet with vendors to negotiate new contracts.",
              "taskDate": "2025-01-05",
              "category": "Operations"
          },
          {
              "active": false,
              "newTask": true,
              "completed": false,
              "failed": true,
              "taskTitle": "Submit KPI Report",
              "taskDescription": "Draft and submit the KPI analysis report for the quarter.",
              "taskDate": "2025-01-06",
              "category": "Reporting"
          }
      ],
      "taskCount": { "active": 1, "newTask": 1, "completed": 1, "failed": 1 }
  },
  {
      "id": 5,
      "name": "Sarth Bhaiya(sheriyan wale hi)",
      "email": "employee5@example.com",
      "password": "5678",
      "tasks": [
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "taskTitle": "Organize Workshop",
              "taskDescription": "Organize and manage logistics for the skill-building workshop.",
              "taskDate": "2025-01-02",
              "category": "Training"
          },
          {
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": false,
              "taskTitle": "Data Analysis",
              "taskDescription": "Analyze data trends for the recent campaign.",
              "taskDate": "2025-01-10",
              "category": "Analytics"
          },
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "taskTitle": "Plan Team Event",
              "taskDescription": "Plan a team-building event for the upcoming quarter.",
              "taskDate": "2025-01-12",
              "category": "Team Building"
          }
      ],
      "taskCount": { "active": 2, "newTask": 1, "completed": 1, "failed": 0 }
  }
];

const admin = [{
  "id": 0,
  "name":"Shrey Tripathi",
  "email": "admin@example.com",
  "password": "0000"
}];

export const setLocalStorage = ()=> {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))

}

export const getLocalStorage = ()=> {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees,admin}
}
