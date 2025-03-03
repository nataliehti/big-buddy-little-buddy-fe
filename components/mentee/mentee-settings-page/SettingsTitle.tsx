import { Card, Text } from '@mantine/core';
import classes from './SettingsTitle.module.css';

export function SettingsTitle() {
  return (
    <Card className={classes.card}>
      <div className={classes.cardContent}>
        <div className={classes.details}>
            <Text ta="left" fw={620} mt="sm" className={classes.title}>
              Settings
            </Text>
        </div>
      </div>
    </Card>
  );
}