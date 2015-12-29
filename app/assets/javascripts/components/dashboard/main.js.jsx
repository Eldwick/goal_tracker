var DashboardMain = React.createClass({
  activeComponent: function() {
    if(this.props.activeRow.name === "Categories") {
      return <DashboardCategories categoryProps={this.props.categoryProps}/>;
    } else {
      return this.props.activeRow.name;
    }
  },
  render: function() {
    return (
      <div className="dashboard-main">
        {this.activeComponent()}
      </div>
    );
  }
});