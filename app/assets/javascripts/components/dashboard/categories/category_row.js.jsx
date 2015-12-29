var DashboardCategoryRow = React.createClass({
  deleteCategory: function() {
    this.props.category.deleteCategory(this.props.category.id);
  },
  render: function() {
    var tasks = [],
          recurring_tasks= this.props.category.recurring_tasks;
    if (recurring_tasks && recurring_tasks.length > 0) {
      this.props.category.recurring_tasks.forEach(function(task) {
        tasks.push(<RecurringTaskInCategory task={task} />);
      }.bind(this));
    } else {
      tasks.push(<RecurringTaskInCategory />)
    }
    return (
      <div className="dashboard-main--categories-row">
        <div className="category-in-list">
          <div className="category-in-list--name">
            {this.props.category.name}
          </div>
          <div className="category-in-list--recurring-form">
            <RecurringTaskInCategoryForm categoryID={this.props.category.id} handleRecurringTaskSubmit={this.props.category.handleRecurringTaskSubmit}/>
          </div>
          <div className="category-in-list-recurring-tasks">
            {tasks}
          </div>
        </div>
        <div className="category-in-list-delete">
          <button onClick={this.deleteCategory}> remove </ button>
        </div>
      </div>
    );
  }
});