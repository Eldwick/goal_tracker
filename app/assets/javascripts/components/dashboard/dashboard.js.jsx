var Dashboard = React.createClass({
  getInitialState: function() {
    var menuRows = [
        {
          name: "Main",
          other: 1
        },
        {
          name: "Categories",
          other: 2
        },
        {
          name: "Tasks",
          other: 3
        }]
    return {
        menuRows: menuRows,
        activeRow: menuRows[0]
    };
  },
  handleSideMenuSelection: function(row) {
    this.setState({activeRow: row});
  },
  render: function() {
    return (
      <div className="dashboard-box">
        <DashboardSideMenu menuRows={this.state.menuRows} handleSideMenuSelection={this.handleSideMenuSelection} />
        <DashboardMain activeRow={this.state.activeRow} />
      </div>
    );
  }
});