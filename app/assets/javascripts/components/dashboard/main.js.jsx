var DashboardMain = React.createClass({
  render: function() {
    return (
      <div className="dashboard-main">
        {this.props.activeRow.name}
      </div>
    );
  }
});