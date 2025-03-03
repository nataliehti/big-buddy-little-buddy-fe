import { Badge, Card, Group, Image, Text } from '@mantine/core';
import classes from './ArticlesContainer.module.css';

function Resource(url:string, img:string, tag:string, title:string, description:string) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none', color: 'inherit' }} // Optional: removes default link styling
    >
      <Card withBorder padding="md" className={classes.card}>
        <Card.Section>
          <Image src={img} alt={title} height={100} />
        </Card.Section>

        <Group mt="xl" className={classes.header}>
          <Badge variant="light" className={classes.tag}>
            {tag}
          </Badge>
          <Text fz="sm" fw={630} className={classes.title}>
            {title}
          </Text>
        </Group>

        <Text mt="sm" mb="md" c="dimmed" fz="xs">
          {description}
        </Text>
      </Card>
    </a>
  );
}


export function ArticlesContainer(){
    const mission = Resource(
        "https://www.saigonchildren.com/about-us/vision-mission-values/",
        "https://www.saigonchildren.com/wp-content/uploads/2023/10/IMG_2017-e1697609722160.jpg",
        "Article",
        "SaigonChildren: Our Mission",
        "Learn about SaigonChildren's vision, mission, and values."
      );
    const volunteer = Resource(
      "https://www.saigonchildren.com/engage/volunteer/",
      "https://www.saigonchildren.com/wp-content/uploads/2024/07/Main-website-article-cover-1.png",
      "Article",
      "SaigonChildren: Volunteer With Us",
      "Learn how to become a volunteer as a student and how you can help us with our mission."
    );
    
      return (
        <div className={classes.container}>
            {mission}
            {volunteer}
            </div>
    );
}