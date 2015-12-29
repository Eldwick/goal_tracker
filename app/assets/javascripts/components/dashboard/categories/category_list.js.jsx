var DashboardCategoryList = React.createClass({
  render: function() {
    var rows = [];
    this.props.categories.forEach(function(category) {
      category.deleteCategory = this.props.deleteCategory;
      category.handleRecurringTaskSubmit = this.props.handleRecurringTaskSubmit;
      rows.push(<DashboardCategoryRow key={category.id} category={category} />);
    }.bind(this));
            
    return (
      <div className="dashboard-main--categories-list">
        {rows}
      </div>
    );
  }
});