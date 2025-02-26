import { Container } from '@mantine/core';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { MenteeNavBar } from '@/components/mentee/mentee-navbar/MenteeNavBar';
import { MentorWidget } from '@/components/mentee/mentee-dashboard-page/MentorWidget';
import {HelloMentee} from '@/components/mentee/mentee-dashboard-page/HelloMentee';
import {MentorTitle} from '@/components/mentee/mentee-dashboard-page/MentorTitle';
import {ResourcesContainer} from '@/components/mentee/mentee-dashboard-page/ResourcesContainer';
import {ResourcesHeader} from '@/components/mentee/mentee-dashboard-page/ResourcesHeader';
import classes from './mentee-dashboard.module.css';

export default function HomePage() {
  return (
    <div className={classes.pageContainer}>
      <MenteeNavBar />
      <div className={classes.content}>
        <HelloMentee />
        <MentorTitle />
        <MentorWidget />
        <ResourcesHeader />
        <ResourcesContainer />
      </div>
    </div>
  );
}
