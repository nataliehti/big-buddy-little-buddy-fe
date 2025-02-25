import { Avatar, Button, Card, Group, Text, Badge } from '@mantine/core';
import classes from './MentorWidget.module.css';

//need to replace values with actual vals from json
const stats = [
  { value: '7', label: 'YOE' }, //years of experience
  { value: 'Executive', label: 'Level' },
];

export function MentorWidget() {
  const items = stats.map((stat) => (
    <Badge variant="light" key={stat.label} leftSection={stat.value}>
      {stat.label}
    </Badge>
  ));

  return (
    <Card className={classes.card}>
      <div className={classes.cardContent}>
        <Avatar
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"
          radius={0}
          className={classes.avatar}
        />
        <div className={classes.details}>
          <div className={classes.header}>
            <Text ta="left" fz="lg" fw={620} mt="sm">
              Bill Headbanger
            </Text>
            <Button radius="md" size="md" variant="default" className={classes.contactButton}>
              CONTACT
            </Button>
          </div>
          <Text ta="left" fz="md" c="dimmed">
            Fullstack engineer
          </Text>
          <Text ta="left" fz="sm">
            Fullstack engineer
          </Text>
          <Group mt="md" justify="left" gap={30} mb="md">
            {items}
          </Group>
          <Button radius="md" size="md" variant="default" className={classes.profileButton}>
              View Profile
            </Button>
        </div>
      </div>
    </Card>
  );
}