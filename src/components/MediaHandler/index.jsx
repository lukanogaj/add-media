import styles from './index.module.scss';
import { PicturesIcon, MusicIcon, VideoIcon } from '../../images/Icons';

const MediaHandler = () => {
  return (
    <div className={`${styles.mediaHandler} ${styles.transform}`}>
      <div className={styles.icons}>
        <PicturesIcon />
      </div>
      <div className={styles.icons}>
        <MusicIcon />
      </div>
      <div className={styles.icons}>
        <VideoIcon />
      </div>
    </div>
  );
};

export default MediaHandler;
