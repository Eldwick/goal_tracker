var RecurringTaskInCategory = React.createClass({
  deleteCategory: function() {

  },
  render: function() {
    var name = "None", 
          deleteTask="";

    if(this.props.task) {
      name= this.props.task.name; 
      deleteTask = <button onClick={this.deleteCategory}> remove </ button>
    }

    return (
      <div className="category-in-list-recurring-task">
        <div className="category-in-list-recurring-task--header"> 
          {name}
        </div>
        <div className="category-in-list-recurring-task--delete"> 
          {deleteTask}
        </div>
      </div>
    );
  }
});