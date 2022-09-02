import Trans from 'next-translate/Trans';

import styles from './RepeatSettings.module.scss';

import RepeatIcon from '@/icons/repeat.svg';
import IconContainer, { IconSize } from 'src/components/dls/IconContainer/IconContainer';

const RepeatSettings = () => {
  return (
    <div>
      <Trans
        i18nKey="common:audio.repeat-moved"
        components={[
          <span className={styles.iconContainer} key="repeat-settings">
            <IconContainer size={IconSize.Small} icon={<RepeatIcon />} />
          </span>,
        ]}
      />
    </div>
  );
};

export default RepeatSettings;
