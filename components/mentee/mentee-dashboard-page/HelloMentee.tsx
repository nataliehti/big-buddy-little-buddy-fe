import { Card, Text } from '@mantine/core';
import classes from './HelloMentee.module.css';

export function HelloMentee() {
  return (
    <Card className={classes.card}>
      <div className={classes.cardContent}>
        <div className={classes.details}>
            <Text ta="left" fz="30" fw={620} mt="sm">
              Hello, User!
            </Text>

            <Text ta="left" fz="15" fw={600} c="dimmed">
              Here's what your mentor has planned for you.
            </Text>
        </div>
      </div>
    </Card>
  );
}