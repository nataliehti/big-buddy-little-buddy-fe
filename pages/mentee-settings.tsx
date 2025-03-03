import { SettingsTitle } from '@/components/mentee/mentee-settings-page/SettingsTitle';
import { ProfileSettings } from '@/components/mentee/mentee-settings-page/ProfileSettings';
import { MenteeNavBar } from '@/components/mentee/mentee-navbar/MenteeNavBar';
import classes from './mentee-dashboard.module.css';

export default function HomePage() {
  return (
    <div className={classes.pageContainer}>
      <MenteeNavBar />
      <div className={classes.content}>
        <SettingsTitle/>
        <ProfileSettings />
      </div>
    </div>
  );
}
