import styles from './index.module.scss';
import { PicturesIcon, MusicIcon, VideoIcon } from '../../images/Icons';

const MediaHandler = ({ isActive }) => {
  return (
    <div
      className={!isActive ? styles.mediaHandler : styles.mediaHandlerHidden}
    >
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
