import { Container } from '@mantine/core';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { MenteeNavBar } from '@/components/mentee/mentee-navbar/MenteeNavBar';
import { MentorWidget } from '@/components/mentee/mentee-dashboard-page/MentorWidget';
import {MentorHeader} from '@/components/mentee/mentee-mentor-info-page/MentorHeader';
import classes from './mentee-dashboard.module.css';

export default function HomePage() {
  return (
    <div className={classes.pageContainer}>
      <MenteeNavBar />
      <div className={classes.content}>
        <MentorHeader />
        <MentorWidget />
      </div>
    </div>
  );
}
