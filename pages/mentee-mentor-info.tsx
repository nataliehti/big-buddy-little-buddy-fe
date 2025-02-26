import { Container } from '@mantine/core';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { MenteeNavBar } from '@/components/mentee/mentee-navbar/MenteeNavBar';
import { ProfileWidgetContainer } from '@/components/mentee/mentee-mentor-info-page/ProfileWidgetContainer';
import {MentorHeader} from '@/components/mentee/mentee-mentor-info-page/MentorHeader';
import classes from './mentee-dashboard.module.css';

export default function HomePage() {
  return (
    <div className={classes.pageContainer}>
      <MenteeNavBar />
      <div className={classes.content}>
        <MentorHeader />
        <ProfileWidgetContainer />
      </div>
    </div>
  );
}
