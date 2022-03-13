import './App.css';
const title = 'STATUS PAGE';
const statusLeft = 'All Systems Operational';
const statusRight = 'Updated a few minutes ago';
// eslint-disable-next-line
const activeIncidents = 0;
// eslint-disable-next-line
const activeMaintenance = 0;
// eslint-disable-next-line
const daysSinceLast = 50;
// eslint-disable-next-line
const eventName = 'Deploy version 4.6.0';
const eventType = 'Planned Maintenance';
// eslint-disable-next-line
const appStatus = 'Operational';
function App() {
  return (
    <div className='container'>
      <div className='header'>
        <div className='title'>{ title }</div>
      </div>
      <div className='status'>
        <div className='left'>{ statusLeft }</div>
        <div className='right'>{ statusRight }</div>
      </div>
      <div className='metrics'>
        <div className='metric'>
          <div className='value'>{ activeIncidents }</div>
          <div className='type'>Active Incidents</div>
        </div>
        <div className='metric'>
          <div className='value'>{ activeMaintenance }</div>
          <div className='type'>Active Maintenances</div>
        </div>
        <div className='metric'>
          <div className='value'>{ daysSinceLast }</div>
          <div className='type'>Days Since Last Incident</div>
        </div>
      </div>
      <div className='integrations'>
        <div className='application'>
          <div className='name'>Jira</div>
          <div className='app-status'>{ appStatus }</div>
        </div>
        <div className='application'>
          <div className='name'>Bitbucket</div>
          <div className='app-status'>{ appStatus }</div>
        </div>
        <div className='application'>
          <div className='name'>Slack</div>
          <div className='app-status'>{ appStatus }</div>
        </div>
        <div className='application'>
          <div className='name'>Jenkins</div>
          <div className='app-status'>{ appStatus }</div>
        </div>
        <div className='application'>
          <div className='name'>Confluence</div>
          <div className='app-status'>{ appStatus }</div>
        </div>
        <div className='application'>
          <div className='name'>SonarQube</div>
          <div className='app-status'>{ appStatus }</div>
        </div>
        <div className='application'>
          <div className='name'>Artifactory</div>
          <div className='app-status'>{ appStatus }</div>
        </div>
      </div>
      <div className='upcoming'>
        <div className='header'>
          <div className='event-name'>{ eventName }</div>
          <div className='event-type'>{ eventType }</div>
        </div>
        <div className='event-details'>
          <div className='details'>
            <div className='detail-name'>Schedule: </div>
            <div className='detail-value'>March 15, 2022 02:00 - 02:15 UTC</div>
          </div>
          <div className='details'>
            <div className='detail-name'>Components: </div>
            <div className='detail-value'>API, Dashboard, Website</div>
          </div>
          <div className='details'>
            <div className='detail-name'>Description: </div>
            <div className='detail-value'>We will be deploying the next version of Status page. There will be no downtime during this maintenance. We will be deploying the next version of Status page. There will be no downtime during this maintenance. We will be deploying the next version of Status page. There will be no downtime during this maintenance. We will be deploying the next version of Status page. There will be no downtime during this maintenance. We will be deploying the next version of Status page. There will be no downtime during this maintenance. We will be deploying the next version of Status page. There will be no downtime during this maintenance.</div>
          </div>
        </div>
      </div>
      <div className='footer'>
      </div>
    </div>
  );
}

export default App;
