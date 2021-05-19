import React from 'react';
import { navigate } from 'hookrouter';
import s from './NotFound.module.scss';
import Button, { BtnBackgrounds } from '../../components/Button';

import TeamRocketTrio from './assets/Team_Rocket_trio.png';

const NotFound = () => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.text}>404</div>
        <div className={s.layer}>
          <img src={TeamRocketTrio} alt="Team Rocket" />
          <div className={s.subTitle}>
            <span>The rocket team</span> has won this time.
          </div>
          <Button classNames={s.button} onClick={() => navigate('/')} background={BtnBackgrounds.Yellow}>
            Return
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
