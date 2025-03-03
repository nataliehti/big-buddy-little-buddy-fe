import { Avatar, Button, Card, Group, Text, Badge } from '@mantine/core';
import classes from './ProfileWidgetContainer.module.css';
import {
  IconBook,

} from '@tabler/icons-react';

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
            src="https://media.istockphoto.com/id/1150742429/photo/asian-girl-taking-a-selfie-in-rain.jpg?s=612x612&w=0&k=20&c=SQITcq6XT-JTScQLFkTtvvj6yOpP04EPRUOq5Y-3-Hg="
            radius={0}
            className={classes.avatar}
          />
          <div className={classes.profileDetails}>
            <Text fz="lg" fw={620} mt="sm" className={classes.name}>
              Serena Nguyen
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
      <Text fz="md" fw={620} mt="sm" className={classes.about}> About Me </Text>
      <Text fz="md" mt="sm" className={classes.selfIntro}>
          Engineering is my passion, and I enjoy mentoring young engineers to achieve their career goals.
          </Text>

      <Text fz="md" fw={620} mt="sm" className={classes.about}> Favorite Quote </Text>
      <Text fz="md" mt="sm" className={classes.selfIntro}>
          "The important thing is not to stop questioning. Curiosity has its own reason for existing."
          </Text>
      
      <Text fz="md" fw={620} mt="sm" className={classes.about}> Hobbies </Text>
      <Group mt="md" gap={15} mb="xs" className={classes.tags}>
          {items}
        </Group>
        <Text fz="md" fw={620} mt="sm" mb="xs" className={classes.about}> Favorite Book </Text>
        <div className={classes.books}>
          <Card className={classes.smallCard}>
            <img
              src="https://m.media-amazon.com/images/I/910vYI-gm0L._AC_UF1000,1000_QL80_.jpg"
              className={classes.img}
            />
              <div className={classes.group}>
                <Text fw={520}>The Mountains Sing</Text>
                <Text fz="xs" fw={300}>By Nguyễn Phan Quế Mai</Text>
              </div>
            </Card>
            <Card className={classes.smallCard}>
            <img
              src="https://m.media-amazon.com/images/I/61eh6F9MG7L._AC_UF1000,1000_QL80_.jpg"
              className={classes.img}
            />
              <div className={classes.group}>
                <Text fw={520}>The Best We Could Do</Text>
                <Text fz="xs" fw={300}>By Thi Bui</Text>
              </div>
            </Card>
        </div>
          <Text fz="md" fw={620} mt="sm" className={classes.about}> Favorite Movie </Text>
      <Text fz="md" mt="sm" className={classes.selfIntro}>
      <Card className={classes.smallCard}>
      <img
              src="https://m.media-amazon.com/images/I/71WSzS6zvCL._AC_UF1000,1000_QL80_.jpg"
              className={classes.img}
            />
              <div className={classes.group}>
                <Text fw={520}>The Hunger Games</Text>
              </div>
            </Card>
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