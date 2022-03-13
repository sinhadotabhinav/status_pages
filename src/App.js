import './App.css';

function App() {
  return (
    <div className='container'>
      <div className='header'>
        <div className='row'>
          STATUS PAGES
        </div>
      </div>
      <div
        className="panel panel-default top_bar make_round"
        id="statusio_status_bar"
        style={{ background: '#27AE60', borderBottom: '0' }}
      >
        <div className="panel-body" style={{ verticalAlign: 'middle' }}>
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <strong id="statusbar_text">
                All Systems Operational
              </strong>
            </div>
            <div className="col-md-4 col-sm-6 hidden-xs">
              <p className="pull-right white" id="updated_ago">
                Updated a few seconds ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
