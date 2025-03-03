import { Avatar, Button, Card, Group, Text, Badge } from '@mantine/core';
import classes from './AllMenteesContainer.module.css';

const stats = [
  { value: '2025', label: 'Graduating' },
  { value: 'Undergraduate', label: '' }, // years of experience
];

function MenteeProfile() {
    const items = stats.map((stat, index) => {
        if (!stat.label) {
          return (
            <Badge
              variant="light"
              key={index}
              rightSection={stat.value}
              className={classes.noLabelBadge}
            />
          );
        }
        return (
          <Badge variant="light" key={index} rightSection={stat.value}>
            {stat.label}
          </Badge>
        );
      });

  return (
    <Card className={classes.profileCard}>
          <Avatar
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"
            radius={0}
            className={classes.avatar}
          />
          <div className={classes.profileDetails}>
            <Text fz="lg" fw={620} mt="sm" className={classes.name}>
                Bill Headbanger
            </Text>
            <Text fz="md" c="dimmed" className={classes.role}>
              Major
            </Text>
            <Text fz="md" className={classes.role}>
              School
            </Text>
            <Group gap={5}  className={classes.tags}>
              {items}
            </Group>
            <Button radius="md" variant="default" className={classes.contactButton}>
                CONTACT
              </Button>
        </div>
      </Card>


  );
}

export function AllMenteesContainer(){
  const mentee = MenteeProfile();

  return(
    <div className = {classes.container}>
      {mentee}
      {mentee}
      {mentee}
      {mentee}
      {mentee}
    </div>
  );
}