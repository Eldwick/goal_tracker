var DashboardCategoriesCreateForm = React.createClass({
  createCategory: function(e){
    var data = {
      category: {
        name: this.refs.name.value
      }
    };
    this.props.handleCategorySubmit(e, data);
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