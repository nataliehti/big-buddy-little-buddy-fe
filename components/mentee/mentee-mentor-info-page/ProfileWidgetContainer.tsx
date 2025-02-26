import { Avatar, Button, Card, Group, Text, Badge } from '@mantine/core';
import classes from './ProfileWidgetContainer.module.css';

const stats = [
  { value: '7', label: 'YOE' }, // years of experience
  { value: 'Executive', label: 'Level' },
];

function ProfileSummary() {
  const items = stats.map((stat) => (
    <Badge variant="light" key={stat.label} leftSection={stat.value}>
      {stat.label}
    </Badge>
  ));

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
              Fullstack engineer
            </Text>
            <Text fz="md" className={classes.role}>
              Company Name
            </Text>
            <Group mt="md" gap={15} mb="md" className={classes.tags}>
              {items}
            </Group>
            <Button radius="md" variant="default" className={classes.contactButton}>
                CONTACT
              </Button>
        </div>
      </Card>


  );
}



function Biography(){
  const hobbies = ['Fishing','Camping'];

  const items = [];
  for (let i = 0; i < hobbies.length; i++) {
    const hobby = hobbies[i];
    items.push(
      <Badge variant="light" key={i}>
        {hobby}
      </Badge>
    );
  }

  return(
    <Card className={classes.bioCard}>
      <Text fz="lg" fw={620} mt="sm" className={classes.about}> About Me </Text>
      <Text fz="md" mt="sm" className={classes.selfIntro}>
          Engineering is my passion, and I enjoy mentoring young engineers to achieve their career goals.
          </Text>

      <Text fz="md" fw={500} mt="lg" className={classes.about}> Favorite Quote </Text>
      <Text fz="md" mt="sm" className={classes.selfIntro}>
          The important thing is not to stop questioning. Curiosity has its own reason for existing.
          </Text>
      
      <Text fz="md" fw={500} mt="lg" className={classes.about}> Hobbies </Text>
      <Group mt="md" gap={15} mb="md" className={classes.tags}>
          {items}
        </Group>
        <Text fz="md" fw={500} mt="lg" className={classes.about}> Favorite Book </Text>
      <Text fz="md" mt="sm" className={classes.selfIntro}>
          book
          </Text>
          <Text fz="md" fw={500} mt="lg" className={classes.about}> Favorite Movie </Text>
      <Text fz="md" mt="sm" className={classes.selfIntro}>
          movie
          </Text>
      
    
  </Card>
  );
}

export function ProfileWidgetContainer(){
  const summary = ProfileSummary();
  const bio = Biography();

  return(
    <div className = {classes.container}>
      {summary}
      {bio}
    </div>
  );
}