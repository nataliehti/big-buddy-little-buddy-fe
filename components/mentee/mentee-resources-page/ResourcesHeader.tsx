import { Card, Text } from '@mantine/core';
import classes from './ResourcesHeader.module.css';

export function ResourcesHeader() {
  return (
    <Card className={classes.card}>
      <div className={classes.cardContent}>
        <div className={classes.details}>
            <Text ta="left" fw={620} mt="sm" className={classes.title}>
              Resources
            </Text>

            <Text ta="left" fw={600} c="dimmed" className={classes.subheader}>
              Learn how to get the best out of your mentee-mentor experience.
            </Text>
        </div>
      </div>
    </Card>
  );
}