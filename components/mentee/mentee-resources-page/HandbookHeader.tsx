import { Card, Text, Group, Badge, Image } from '@mantine/core';
import classes from './HandbookHeader.module.css';

export function HandbookHeader() {
  return (
    <div className={classes.handbookContainer}>
      <Text ta="left" fz="16" fw={600} mt="xs" className={classes.handbookTitle}>
            Guides
        </Text>
    </div>

    
  );
}