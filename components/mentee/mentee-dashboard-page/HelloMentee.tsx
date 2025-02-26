import { Card, Text } from '@mantine/core';
import classes from './HelloMentee.module.css';

export function HelloMentee() {
  return (
    <Card className={classes.card}>
      <div className={classes.cardContent}>
        <div className={classes.details}>
            <Text ta="left" fw={620} mt="sm" className={classes.title}>
              Hello, User!
            </Text>

            <Text ta="left" fw={600} c="dimmed" className={classes.subheader}>
              Let's get started.
            </Text>
        </div>
      </div>
    </Card>
  );
}