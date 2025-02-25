import { Container } from '@mantine/core';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { MenteeNavBar } from '@/components/mentee/mentee-navbar/MenteeNavBar';
import { MentorWidget } from '@/components/mentee/mentee-dashboard-page/MentorWidget';
import {DocumentUpload} from '@/components/mentee/mentee-documents-page/DocumentUpload';
import classes from './mentee-dashboard.module.css';

export default function HomePage() {
  return (
    <div className={classes.pageContainer}>
      <MenteeNavBar />
      <div className={classes.content}>
        <DocumentUpload />
      </div>
    </div>
  );
}
