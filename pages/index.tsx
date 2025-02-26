import { Container, Button } from '@mantine/core';
import Link from 'next/link';
import { MenteeNavBar } from '@/components/mentee/mentee-navbar/MenteeNavBar';
import classes from './index.module.css';

export default function HomePage() {
  return (
    <div className={classes.pageContainer}>
      <MenteeNavBar />
      <div className={classes.content}>
        {/*Go to mentor*/}
        <Link href="/mentee-dashboard" passHref>
          <Button component="a" variant="outline" style={{ marginRight: '1rem' }}>
            Mentee View
          </Button>
        </Link>

        {/*Go to mentee*/}
        <Link href="/mentor-dashboard" passHref>
          <Button component="a" variant="filled">
            Mentor View
          </Button>
        </Link>
      </div>
    </div>
  );
}
