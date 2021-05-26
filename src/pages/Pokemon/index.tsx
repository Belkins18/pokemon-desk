import React from 'react';

export interface PokemonProps {
  id: string | number;
}

const Pokemon: React.FC<PokemonProps> = ({ id }) => {
  return (
    <div>
      <div>This is Pokemon page for {id}</div>
    </div>
  );
};

export default Pokemon;
