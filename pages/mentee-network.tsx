import { MenteeNavBar } from '@/components/mentee/mentee-navbar/MenteeNavBar';
import { AllMenteesContainer } from '@/components/mentee/mentee-network-page/AllMenteesContainer';
import {MenteeNetworkHeader} from '@/components/mentee/mentee-network-page/MenteeNetworkHeader';
import classes from './mentee-dashboard.module.css';

export default function HomePage() {
  return (
    <div className={classes.pageContainer}>
      <MenteeNavBar />
      <div className={classes.content}>
        <MenteeNetworkHeader />
        <AllMenteesContainer />
      </div>
    </div>
  );
}
