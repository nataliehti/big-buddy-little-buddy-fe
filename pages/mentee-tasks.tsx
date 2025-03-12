import { Container } from '@mantine/core';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { MenteeNavBar } from '@/components/mentee/mentee-navbar/MenteeNavBar';
import { TasksTitle } from '@/components/mentee/mentee-tasks-page/TasksTitle';
import { FilesTitle } from '@/components/mentee/mentee-tasks-page/FilesTitle';
import { DocumentUpload } from '@/components/mentee/mentee-tasks-page/DocumentUpload';
import classes from './mentee-dashboard.module.css';

export default function HomePage() {
  return (
    <div className={classes.pageContainer}>
      <MenteeNavBar />
      <div className={classes.content}>
        <TasksTitle />
        <DocumentUpload/>
        <FilesTitle/>
      </div>
    </div>
  );
}
