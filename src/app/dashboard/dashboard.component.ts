import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tabs = [
    { title: 'All', content: 'All', class: 'tab', showInput: true },
    { title: 'Active', content: 'Active', class: 'tab', showInput: true },
    { title: 'Completed', content: 'Completed', class: 'tab', showInput: false }
  ];

  activeTab = this.tabs[0];
  toDoItems: string[] = [];
  newItem: string = '';

  ngOnInit() {
    // Initialize component logic here
  }

  addToDoItem() {
    if (this.newItem) {
      this.toDoItems.push(this.newItem);
      this.newItem = '';
    }
  }
}