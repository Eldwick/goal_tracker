var DashboardSideMenu = React.createClass({
  render: function() {
    var rows = [],
          handleSideMenuSelection= this.props.handleSideMenuSelection;

    this.props.menuRows.forEach(function(menuRow) {
      rows.push(<DashboardSideMenuRow key={menuRow.name} row={menuRow} handleSideMenuSelection={handleSideMenuSelection} />);
    })
    return (
      <div className="dashboard-sidebar">{rows}</div>
    );
  }
});