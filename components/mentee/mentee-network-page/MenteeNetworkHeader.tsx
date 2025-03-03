import { Card, Text } from '@mantine/core';
import classes from './MenteeNetworkHeader.module.css';

export function MenteeNetworkHeader() {
  return (
    <Card className={classes.card}>
      <div className={classes.cardContent}>
        <div className={classes.details}>
            <Text ta="left" fw={620} mt="sm" className={classes.title}>
              Mentee Network
            </Text>

            <Text ta="left" fw={600} c="dimmed" className={classes.subheader}>
              Contact and get to know your fellow mentees participating in the program.
            </Text>
        </div>
      </div>
    </Card>
  );
}