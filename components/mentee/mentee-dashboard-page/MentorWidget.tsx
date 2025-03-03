import { Avatar, Button, Card, Group, Text, Badge } from '@mantine/core';
import { useRouter } from 'next/router';
import classes from './MentorWidget.module.css';

const stats = [
  { value: '7', label: 'YOE' }, // years of experience
  { value: 'Executive', label: 'Level' },
];

export function MentorWidget() {
  const items = stats.map((stat) => (
    <Badge variant="light" key={stat.label} leftSection={stat.value}>
      {stat.label}
    </Badge>
  ));

  const router = useRouter();

  const handleProfileRedirect = () => {
    router.push('/mentee-mentor-info'); // Adjust this route to your target path
  };

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
            <Text fz="lg" fw={620} mt="sm">
              Bill Headbanger
            </Text>
            {/* Desktop-only Contact button */}
            <Button radius="md" variant="default" className={classes.contactButtonDesktop}>
              CONTACT
            </Button>
          </div>
          <Text fz="md" c="dimmed" className={classes.role}>
            Fullstack engineer
          </Text>
          <Group mt="md" gap={15} mb="md" className={classes.tags}>
            {items}
          </Group>
          {/* Desktop-only View Profile button */}
          <Button
            radius="md"
            size="md"
            variant="default"
            className={classes.profileButtonDesktop}
            onClick={handleProfileRedirect}
          >
            View Profile
          </Button>
          {/* Mobile-specific button group */}
          <div className={classes.buttonsMobile}>
            <Button radius="md" variant="default" className={classes.contactButtonMobile}>
              CONTACT
            </Button>
            <Button
              radius="md"
              variant="default"
              className={classes.profileButtonMobile}
              onClick={handleProfileRedirect}
            >
              View Profile
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
