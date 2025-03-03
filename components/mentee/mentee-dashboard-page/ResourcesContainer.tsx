import { Badge, Card, Group, Image, Text } from '@mantine/core';
import classes from './ResourcesContainer.module.css';

function Resource(pdf:string, img:string, tag:string, title:string, description:string) {
  return (
    <a
      href={pdf}  // Relative URL to the PDF in the public folder
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: 'none', color: 'inherit' }}
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


export function ResourcesContainer(){
    const handbook = Resource(
        "/Mentee Handbook.pdf",
        "https://images.unsplash.com/photo-1581889470536-467bdbe30cd0?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
        "Resource",
        "Mentee Handbook",
        "This mentee handbook is your essential guide to building successful mentoring relationships and navigating your professional growth journey."
      );
      const introArticle = Resource(
        "/Mentee Handbook.pdf",
        "https://images.unsplash.com/photo-1581889470536-467bdbe30cd0?ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",
        "Article",
        "SaigonChildren: Big Buddy-Little Buddy",
        "This mentee handbook is your essential guide to building successful mentoring relationships and navigating your professional growth journey."
      );
    
      return (
        <div className={classes.container}>
            {handbook}
            {introArticle}
            </div>
    );
}