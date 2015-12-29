var Dashboard = React.createClass({
  getInitialState: function() {
    var menuRows = [
        {
          name: "Summary",
          other: 1
        },
        {
          name: "Categories",
          other: 2
        },
        {
          name: "All Tasks",
          other: 3
        }]
    return {
        menuRows: menuRows,
        activeRow: menuRows[1],
        categories: []
    };
  },
  getCategories: function() {
    $.get("/categories.json", function(result) {
      if (this.isMounted()) {
        this.setState({
          categories: result
        });
      }
    }.bind(this));
  },
  componentDidMount: function() {
    this.getCategories();
  },
  deleteCategory: function(category_id) {
    $.delete("/categories/"+category_id+".json")
      .then(this.getCategories);
  },
  handleSideMenuSelection: function(row) {
    this.setState({activeRow: row});
  },
  handleCategorySubmit: function(e, data) {
    e.preventDefault();

    $.post("/categories.json", data)
      .then(this.getCategories);
  },
  handleRecurringTaskSubmit: function(e, data) {
    e.preventDefault();
    $.post("/recurring_tasks.json", data)
      .then(this.getCategories);
  },
  render: function() {
    var categoryProps = {
      form: this.props.form,
      handleCategorySubmit: this.handleCategorySubmit,
      deleteCategory: this.deleteCategory,
      categories: this.state.categories,
      handleRecurringTaskSubmit: this.handleRecurringTaskSubmit
    };
    return (
      <div className="dashboard-box">
        <DashboardSideMenu menuRows={this.state.menuRows} handleSideMenuSelection={this.handleSideMenuSelection} />
        <DashboardMain activeRow={this.state.activeRow} categoryProps={categoryProps} />
      </div>
    );
  }
});