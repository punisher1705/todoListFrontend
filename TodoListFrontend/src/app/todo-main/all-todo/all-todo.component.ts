import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-todo',
  templateUrl: './all-todo.component.html',
  styleUrls: ['./all-todo.component.css']
})
export class AllTodoComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtUsers =[
    {"id": 101, "firstName": "Anil", "lastName": "Singh", "actions": "<a href='/'>Click</a>"},
    {"id": 102, "firstName": "Reena", "lastName": "Singh", "actions": "Singh"},
    {"id": 103, "firstName": "Aradhay", "lastName": "Simgh", "actions": "Singh"},
    {"id": 104, "firstName": "Dilip", "lastName": "Singh", "actions": "Singh"},
    {"id": 105, "firstName": "Alok", "lastName": "Singh", "actions": "Singh"},
    {"id": 106, "firstName": "Sunil", "lastName": "Singh", "actions": "Singh"},
    {"id": 107, "firstName": "Sushil", "lastName": "Singh", "actions": "Singh"},
    {"id": 108, "firstName": "Sheo", "lastName": "Shan", "actions": "Singh"},
    {"id": 109, "firstName": "Niranjan", "lastName": "R", "actions": "Singh"},
    {"id": 110, "firstName": "Lopa", "lastName": "Mudra", "actions": "Singh"},
    {"id": 111, "firstName": "Paramanand","lastName": "Tripathi", "actions": "Singh"}
  ];
  constructor() { }

  ngOnInit() {
    this.dtOptions = {
      data:this.dtUsers,
      columns: [{title: 'User ID', data: 'id'},
            {title: 'First Name', data: 'firstName'},
            {title: 'Last Name', data: 'lastName' },
            {title: 'Actions', data: 'actions'}]
    };
  }


}
