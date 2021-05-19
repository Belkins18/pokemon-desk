import React from 'react';
import Header from '../../components/Header';
import PokemonCard from '../../components/PokemonCard';

interface EmptyPageProps {
  title?: string;
}

const EmptyPage: React.FC<EmptyPageProps> = ({ title }) => {
  return (
    <div>
      <Header />
      <div>This is Empty page for {title}!</div>
      <PokemonCard />
    </div>
  );
};

export default EmptyPage;
