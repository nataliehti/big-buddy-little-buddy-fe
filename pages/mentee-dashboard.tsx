import { Container } from '@mantine/core';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { MenteeNavBar } from '@/components/mentee/mentee-navbar/MenteeNavBar';
import { MentorWidget } from '@/components/mentee/mentee-dashboard-page/MentorWidget';
import {HelloMentee} from '@/components/mentee/mentee-dashboard-page/HelloMentee';
import classes from './mentee-dashboard.module.css';

export default function HomePage() {
  return (
    <div className={classes.pageContainer}>
      <MenteeNavBar />
      <div className={classes.content}>
        <HelloMentee />
        <MentorWidget />
      </div>
    </div>
  );
}
