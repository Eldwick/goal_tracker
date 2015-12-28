var DashboardSideMenu = React.createClass({
  render: function() {
    var rows = [],
          handleSideMenuSelection= this.props.handleSideMenuSelection;

    this.props.menuRows.forEach(function(menuRow) {
      rows.push(<DashboardSideMenuRow row={menuRow} handleSideMenuSelection={handleSideMenuSelection} />);
    })
    return (
      <div className="dashboard-sidebar">{rows}</div>
    );
  }
});