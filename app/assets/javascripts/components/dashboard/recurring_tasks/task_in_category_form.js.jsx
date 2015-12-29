var RecurringTaskInCategoryForm = React.createClass({
  createCategory: function(e){
    var data = {
      recurring_task: {
        name: this.refs.name.value,
      },
      category_id: this.props.category_id
    };
    this.props.handleRecurringTaskSubmit(e, data);
  },
  render: function() {
    return (
      <div className="dashboard-main--categories-form">
        <form ref="form" className="category-form" action="/categories" method="post" onSubmit={ this.createCategory }>
          <div className="category-form-input">
            <input type="text" ref="name" name="category[name]" placeholder="Add a category" />
            <span>
              <button type="submit">New Category</button>
            </span>
          </div>
          
        </form>
      </div>
    );
  }
});