var RecurringTaskInCategoryForm = React.createClass({
  createCategory: function(e){
    e.preventDefault(e);
    var data = {
      recurring_task: {
        name: this.refs.name.value,
      },
      category_id: this.props.categoryID
    };
    this.props.handleRecurringTaskSubmit(e, data);
  },
  render: function() {
    return (
      <div className="dashboard-main--categories-form">
        <form ref="form" className="category-form" action="/recurring_tasks" method="post" onSubmit={ this.createCategory }>
          <div className="category-form-input">
            <input type="text" ref="name" name="category[name]" placeholder="Add a task" />
            <span>
              <button type="submit">New Task</button>
            </span>
          </div>
          
        </form>
      </div>
    );
  }
});