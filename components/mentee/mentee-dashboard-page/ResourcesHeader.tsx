import { Card, Text, Button } from '@mantine/core';
import classes from './ResourcesHeader.module.css';

export function ResourcesHeader() {
  return (
    <Card className={classes.card}>
      <div className={classes.cardContent}>
      <hr className={classes.divider} />
        <div className={classes.details}>
            <Text ta="left" fz="16" fw={600} mt="xs">
              Resources Hub
            </Text>
            <Button radius="md" variant="default" c="dimmed" className={classes.viewButton}>
              View All
            </Button>

        </div>
      </div>
    </Card>
  );
}