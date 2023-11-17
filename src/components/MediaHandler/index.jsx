import styles from './index.module.scss';
import { PicturesIcon, MusicIcon, VideoIcon } from '../../images/Icons';

const MediaHandler = ({ isActive }) => {
  return (
    <div
      className={!isActive ? styles.mediaHandler : styles.mediaHandlerHidden}
    >
      <div className={!isActive ? styles.icons : styles.iconsHidden}>
        <PicturesIcon />
      </div>
      <div className={!isActive ? styles.icons : styles.iconsHidden}>
        <MusicIcon />
      </div>
      <div className={!isActive ? styles.icons : styles.iconsHidden}>
        <VideoIcon />
      </div>
    </div>
  );
};

export default MediaHandler;
