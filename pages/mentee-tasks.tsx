import { Container } from '@mantine/core';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Welcome } from '../components/Welcome/Welcome';
import { MenteeNavBar } from '@/components/mentee/mentee-navbar/MenteeNavBar';
import classes from './index.module.css';

export default function HomePage() {
  return (
    <div className={classes.pageContainer}>
      <MenteeNavBar />
      <div className={classes.content}>
        <ColorSchemeToggle />
      </div>
    </div>
  );
}
