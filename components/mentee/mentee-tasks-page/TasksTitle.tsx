import { Card, Text } from '@mantine/core';
import classes from './TasksTitle.module.css';

export function TasksTitle() {
  return (
    <Card className={classes.card}>
      <div className={classes.cardContent}>
        <div className={classes.details}>
            <Text ta="left" fw={620} mt="sm" className={classes.title}>
              Tasks
            </Text>
            <Text ta="left" fw={600} c="dimmed" className={classes.subheader}>
              Once your mentor assigns you tasks, you can submit them here!
            </Text>
        </div>
      </div>
    </Card>
  );
}