import React from 'react';
import { navigate } from 'hookrouter';
import cn from 'classnames';
import s from './Home.module.scss';
import { LinkTo } from '../../routes';
import Layout from '../../components/Layout';
import Button, { BtnBackgrounds } from '../../components/Button';
import Parallax from '../../components/Parallax';
import Heading from '../../components/Heading';
import Footer from '../../components/Footer';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Layout className={cn(s.contentWrap, s.homePageContent)}>
        <div className={s.homePageContentText}>
          <Heading type="h1">
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>
          <Heading type="h3">You can know the type of Pokemon, its strengths, disadvantages and abilities</Heading>
          <Button onClick={() => navigate(LinkTo.POKEDEX)} background={BtnBackgrounds.Green}>
            See pokemons
          </Button>
        </div>
        <div className={s.homePageContentParallax}>
          <Parallax />
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default HomePage;
