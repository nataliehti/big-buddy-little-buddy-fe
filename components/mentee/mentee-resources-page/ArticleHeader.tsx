import { Card, Text, Group, Badge, Image } from '@mantine/core';
import classes from './ArticleHeader.module.css';

export function ArticleHeader() {
  return (
    <div className={classes.handbookContainer}>
      <Text ta="left" fz="16" fw={600} mt="xs" className={classes.handbookTitle}>
            Articles
        </Text>
    </div>

    
  );
}