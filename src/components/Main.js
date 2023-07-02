import React, { Component } from "react";
import CreateTask from "./CreateTask";
import TaskList from "./TaskList";
import "./Main.css";
export default class Main extends Component {
  constructor(props) {
    super(props);
    if (localStorage.length !== 0)
      this.state = { tasks: JSON.parse(localStorage.getItem("task")) };
    else this.state = { tasks: [] };
    this.createTask = this.createTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.toggleTask = this.toggleTask.bind(this);
  }
  createTask(task) {
    if (task.trim() === "") {
      alert("Task cannot be empty");
      return;
    }
    let allTask, newTask;
    newTask = { taskName: task, status: false };
    allTask = [...this.state.tasks, newTask];
    let localStorageData = JSON.stringify(allTask);
    localStorage.setItem("task", localStorageData);
    this.setState({ tasks: allTask });
  }
  deleteTask(index) {
    // console.log("Deleted called");
    let arr = this.state.tasks.filter((i, j) => j !== index);
    let localStorageData = JSON.stringify(arr);
    localStorage.setItem("task", localStorageData);
    this.setState({ tasks: arr });
  }
  editTask(index, taskName) {
    let arr = this.state.tasks;
    arr[index].taskName = taskName;
    let localStorageData = JSON.stringify(arr);
    localStorage.setItem("task", localStorageData);
    this.setState({ tasks: arr });
  }

  toggleTask(index) {
    console.log("toggle called");
    let arr = this.state.tasks;
    arr[index].status = !arr[index].status;
    let localStorageData = JSON.stringify(arr);
    localStorage.setItem("task", localStorageData);
    this.setState({ tasks: arr });
  }
  render() {
    // console.log(JSON.parse(localStorage.getItem("task")));
    return (
      <div className="Main">
        <h1>Todo List</h1>
        <div className="content">
          <CreateTask createTask={this.createTask} />
          <br />
          <TaskList
            tasks={this.state.tasks}
            deleteTask={this.deleteTask}
            editTask={this.editTask}
            toggleTask={this.toggleTask}
          />
        </div>
      </div>
    );
  }
}
