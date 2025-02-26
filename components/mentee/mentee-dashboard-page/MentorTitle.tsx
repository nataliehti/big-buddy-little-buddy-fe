import { Card, Text } from '@mantine/core';
import classes from './MentorTitle.module.css';

export function MentorTitle() {
  return (
    <Card className={classes.card}>
      <div className={classes.cardContent}>
        <div className={classes.details}>
            <Text ta="left" fz="16" fw={600} mt="xs">
              Meet Your Mentor
            </Text>
        </div>
      </div>
    </Card>
  );
}