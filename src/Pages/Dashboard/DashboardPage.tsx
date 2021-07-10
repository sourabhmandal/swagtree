import React, { FC, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Sidebar from '../../components/Dashboard/Sidebar';
import ActivityPage from './ActivityPage';
import TopNavbar from '../../components/Dashboard/TopNavbar';
import OverviewPage from './OverviewPage';
import ProfilePage from './ProfilePage';
import SettingsPage from './SettingsPage';
import TeamPage from './TeamPage';
import MessagesPage from './MessagesPage';
import TasksPage from './TasksPage';
import ProjectPage from './ProjectPage';

const DashboardPage: FC<IDashboardProps> = (props) => {
  const [DashboardRoute, setDashboardRoute] = useState<Number>(0);
  const DashboardComponent: React.FC<{}> = () => {
    switch (DashboardRoute) {
      case 0:
        return <OverviewPage />;
      case 1:
        return <ProjectPage />;
      case 2:
        return <TeamPage />;
      case 3:
        return <MessagesPage />;
      case 4:
        return <TasksPage />;
      case 5:
        return <ProfilePage />;
      case 6:
        return <SettingsPage />;
      default:
        return <ActivityPage />;
    }
  };
  return (
    <div className=' overflow-hidden'>
      <div className='flex hidden sm:flex'>
        <Sidebar setDashboardRoute={setDashboardRoute} />
        <DashboardComponent />
      </div>
      <div className='sm:hidden'>
        <TopNavbar />
        <DashboardComponent />
      </div>
    </div>
  );
};

export default DashboardPage;

export interface IDashboardProps
  extends RouteComponentProps<{ pathname: string }> {
  name: String;
  age?: Number;
}

export interface IDashboardState {
  name: String;
  age?: Number;
}
