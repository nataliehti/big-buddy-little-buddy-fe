import { Card, Text } from '@mantine/core';
import classes from './FilesTitle.module.css';

export function FilesTitle() {
  return (
    <Card className={classes.card}>
      <div className={classes.cardContent}>
        <div className={classes.details}>
            <Text ta="left" fz="16" fw={600} mt="xs">
              Recent Files
            </Text>
            <Text ta="left" fz="13" mt = "xs" fw={400} c="dimmed" className={classes.subheader}>
              No files to show.
            </Text>
        </div>
      </div>
    </Card>
  );
}