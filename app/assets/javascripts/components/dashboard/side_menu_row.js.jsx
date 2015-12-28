var DashboardSideMenuRow = React.createClass({
  render: function() {
    var props = this.props,
          handleSideMenuSelection= function() {
            props.handleSideMenuSelection(props.row);
          };
    return (
      <div onClick={handleSideMenuSelection} className="dashboard-sidebar--row">{this.props.row.name}</div>
    );
  }
});