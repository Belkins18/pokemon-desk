import React, { useEffect, useState } from 'react';

import s from './Parallax.module.scss';

import SmallPokeBallPng from './assets/PokeBall1.png';
import CloudPng from './assets/Cloud1.png';
import PokeBallPng from './assets/PokeBall2.png';
import CloudBigPng from './assets/Cloud2.png';
import PikachuPng from './assets/Pikachu.png';

const Parallax = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleMouseMove = (event: MouseEvent) => {
      // console.log('X: ', event.screenX);
      // console.log('Y: ', event.screenY);
      setX(event.screenX);
      setY(event.screenY);
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [x, y]);

  return (
    <div className={s.root}>
      <div
        className={s.smallPokeBall}
        style={{
          transform: `translate(${x * 0.05}px, ${y * 0.05}px)`,
        }}>
        <img src={SmallPokeBallPng} alt="Small PokeBall" />
      </div>
      <div
        className={s.cloud}
        style={{
          transform: `translate(${x * 0.02}px, ${y * 0.02}px)`,
        }}>
        <img src={CloudPng} alt="Cloud PokeBall" />
      </div>
      <div
        className={s.cloudBig}
        style={{
          transform: `translate(${x * 0.03}px, ${y * 0.03}px)`,
        }}>
        <img src={CloudBigPng} alt="Cloud Big PokeBall" />
      </div>
      <div
        className={s.pokeBall}
        style={{
          transform: `translate(${x * 0.04}px, ${y * 0.04}px)`,
        }}>
        <img src={PokeBallPng} alt="Big PokeBall" />
      </div>
      <div
        className={s.pikachu}
        style={{
          transform: `translate(${x * 0.01}px, ${y * 0.01}px)`,
        }}>
        <img src={PikachuPng} alt="Cloud PokeBall" />
      </div>
    </div>
  );
};

export default Parallax;
