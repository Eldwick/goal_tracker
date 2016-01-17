var DashboardCategories = React.createClass({
  render: function() {
    return (
      <div className="dashboard-main--categories">
        <div className="dashboard-main--categories-header"><h3>Categories</h3></div>
        <DashboardCategoriesCreateForm handleCategorySubmit={this.props.categoryProps.handleCategorySubmit} />
        <DashboardCategoryList taskProps={ this.props.categoryProps.taskProps} categories={this.props.categoryProps.categories} deleteCategory={this.props.categoryProps.deleteCategory} />
      </div>
    );
  }
});