import { Card, Text } from '@mantine/core';
import classes from './MentorHeader.module.css';

export function MentorHeader() {
  return (
    <Card className={classes.card}>
      <div className={classes.cardContent}>
        <div className={classes.details}>
            <Text ta="left" fz="30" fw={620} mt="sm">
              Mentor Profile
            </Text>

            <Text ta="left" fz="15" fw={600} c="dimmed">
              Your mentor's background and expertise.
            </Text>
        </div>
      </div>
    </Card>
  );
}