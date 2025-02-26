import { Card, Text } from '@mantine/core';
import classes from './MentorHeader.module.css';

export function MentorHeader() {
  return (
    <Card className={classes.card}>
      <div className={classes.cardContent}>
        <div className={classes.details}>
            <Text ta="left" fw={620} mt="sm" className={classes.title}>
              Your Mentor
            </Text>

            <Text ta="left" fw={600} c="dimmed" className={classes.subheader}>
              Learn about your mentor's background and expertise.
            </Text>
        </div>
      </div>
    </Card>
  );
}