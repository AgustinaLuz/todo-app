import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  tabs = [
    { title: 'All', content: 'All', class: 'tab', showInput: true },
    { title: 'Active', content: 'Active', class: 'tab', showInput: true },
    { title: 'Completed', content: 'Completed', class: 'tab', showInput: false }
  ];

  activeTab = this.tabs[0];
  toDoItems: string[] = [];
  newItem: string = '';

  addToDoItem() {
    if (this.newItem) {
      this.toDoItems.push(this.newItem);
      this.newItem = '';
    }
  }
}

// The template now checks the showInput property of the active tab to determine whether to display the input field and button. Additionally, the addToDoItem function is responsible for adding the new to-do item to the toDoItems array when the button is clicked.

// Now, the input field and button will only be displayed in the "All" and "Active" tabs, allowing the user to add new to-do items specifically in those tabs.