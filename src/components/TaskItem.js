import React, { Component } from "react";
import "./TaskItem.css";
export default class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = { taskName: this.props.taskItem.taskName, isEdit: false };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBack = this.handleBack.bind(this);
    this.toggleTask = this.toggleTask.bind(this);
  }
  handleDelete(e) {
    this.props.deleteTask(this.props.id);
  }
  setIsEditing(editing) {
    this.setState({ isEdit: editing });
  }
  handleChange(e) {
    this.setState({ taskName: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.editTask(this.props.id, this.state.taskName);
    this.setIsEditing(false);
  }
  handleBack(e) {
    this.setState({ taskName: this.props.taskItem.taskName, isEdit: false });
  }
  toggleTask() {
    this.props.toggleTask(this.props.id);
  }
  render() {
    let result;
    if (this.state.isEdit) {
      result = (
        <tr>
          <td colSpan="2">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                value={this.state.taskName}
                onChange={this.handleChange}
              />
              <span style={{ float: "right" }}>
                <button className="save task" type="submit">
                  Save
                </button>
                <button className="back task" onClick={this.handleBack}>
                  Back
                </button>
              </span>
            </form>
          </td>
        </tr>
      );
    } else {
      result = (
        <tr>
          <td onClick={this.toggleTask} className="task">
            <input id="name" type="checkbox" readOnly />
            <span
              className={
                this.props.taskItem.status === true
                  ? "completed"
                  : "not-completed"
              }
            >
              {this.props.taskItem.taskName}
            </span>
          </td>
          <td>
            <button
              className="edit task"
              onClick={() => this.setIsEditing(true)}
            >
              Edit
            </button>
            <button className="delete task" onClick={this.handleDelete}>
              Delete
            </button>
          </td>
        </tr>
      );
    }
    return result;
  }
}
