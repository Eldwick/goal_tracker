var RecurringTaskInCategory = React.createClass({
  deleteTask: function() {
    this.props.deleteRecurringTask(this.props.task.id);
  },
  handleTaskSubmit: function() {
    var data = {
      task: {
        recurring_task_id: this.props.task.id
      }
    };
    
    this.props.handleTaskSubmit(data);
  },
  render: function() {
    var name = "None",
          markTask = ''
          deleteTask=""
          taskSummary="";

    if(this.props.task) {
      name= this.props.task.name; 
      deleteTask = <button onClick={this.deleteTask}> remove </ button>;
      markTask = <button onClick={this.handleTaskSubmit}> Mark Done </ button>;
      taskSummary = "Times Completed:" + this.props.task.tasks.length;
    }

    return (
      <div className="category-in-list-recurring-task">
        <div className="category-in-list-recurring-task--left">
          <div className="category-in-list-recurring-task--header">
            {name}
          </div>
          <div className="category-in-list-recurring-task--summary">
            {taskSummary}
            {markTask}
          </div>
        </div>
        <div className="category-in-list-recurring-task--delete"> 
          {deleteTask}
        </div>
      </div>
    );
  }
});