import { MenteeNavBar } from '@/components/mentee/mentee-navbar/MenteeNavBar';
import { ResourcesHeader } from '@/components/mentee/mentee-resources-page/ResourcesHeader';
import { HandbookHeader } from '@/components/mentee/mentee-resources-page/HandbookHeader';
import { ArticleHeader } from '@/components/mentee/mentee-resources-page/ArticleHeader';
import { ArticlesContainer } from '@/components/mentee/mentee-resources-page/ArticlesContainer';
import { GuidesContainer} from '@/components/mentee/mentee-resources-page/GuidesContainer';
import classes from './mentee-dashboard.module.css';

export default function HomePage() {
  return (
    <div className={classes.pageContainer}>
      <MenteeNavBar />
      <div className={classes.content}>
        <ResourcesHeader />
        <HandbookHeader />
        <GuidesContainer />
        <ArticleHeader />
        <ArticlesContainer/>
      </div>
    </div>
  );
}
