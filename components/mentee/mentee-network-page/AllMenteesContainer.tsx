import { Avatar, Button, Card, Group, Text, Badge } from '@mantine/core';
import classes from './AllMenteesContainer.module.css';

interface Stat {
  value: string;
  label: string;
}

function MenteeProfile(src:string, name:string, major:string, school:string, stats:Stat[]) {
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
            src={src}
            className={classes.avatar}
          />
          <div className={classes.profileDetails}>
            <Text fz="lg" fw={620} mt="sm" className={classes.name}>
                {name}
            </Text>
            <Text fz="md" c="dimmed" className={classes.role}>
              {major}
            </Text>
            <Text fz="md" className={classes.role}>
              {school}
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
  const mentee1 = MenteeProfile("https://img.freepik.com/free-photo/university-study-abroad-lifestyle-concept-smiling-cheerful-asian-guy-glasses-standing-with-backpack-laptop-student-his-way-classes-posing-white-background_1258-55845.jpg", 
    "Nguyen Van An", "Computer Science", "Hanoi University of Science and Technology", 
    [{ value: '2025', label: 'Graduating' },{ value: 'Undergraduate', label: '' }]);
  const mentee2 = MenteeProfile("https://media.istockphoto.com/id/1352848942/photo/positive-asian-female-student-holding-workbooks-and-showing-thumb-up-smiling-to-camera-over.jpg?s=612x612&w=0&k=20&c=bnEjTVKRv2oqFBGGEJHbqaSKf28BZLv2UIsBuYNr_Ek=", 
    "Le Uyen Thy", "Math Computer Science", "Vietnam National University, Hanoi", 
    [{ value: '2027', label: 'Graduating' },{ value: 'Undergraduate', label: '' }]);
  const mentee3 = MenteeProfile("https://img.freepik.com/premium-photo/handsome-asian-businessman-showing-successful-expression_423292-7.jpg", 
    "Le Quoc Hung", "Mechanical Engineering", "Ho Chi Minh City University of Technology", 
    [{ value: '2026', label: 'Graduating' },{ value: 'Graduate', label: '' }]);
  const mentee4 = MenteeProfile("https://media.istockphoto.com/id/1323642774/photo/asian-student.jpg?s=612x612&w=0&k=20&c=n6fiBRjZf19-YT3fjL_Y59XfORHJoKGtsEaNEX44Ubg=", 
    "Pham Thi Minh", "Business Administration", "Foreign Trade University", 
    [{ value: '2026', label: 'Graduating' },{ value: 'Undergraduate', label: '' }]);
  const mentee5 = MenteeProfile("https://st2.depositphotos.com/1570716/48105/i/450/depositphotos_481059346-stock-photo-a-boy-wearing-a-junior.jpg", 
    "Hoang Van Tuan", "Information Technology", "Information Technology", 
    [{ value: '2025', label: 'Graduating' },{ value: 'Undergraduate', label: '' }]);


  return(
    <div className = {classes.container}>
      {mentee1}
      {mentee2}
      {mentee3}
      {mentee4}
      {mentee5}
    </div>
  );
}