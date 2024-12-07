import React from 'react';
import { ItemContainer } from './styles';

function ItemRepo({ repo, handleRemoveRepo }) {
  if (!repo) return null; 

  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} rel='noreferrer' target='_blank'>Ver repositório</a><br />
      <a href='#' rel='noreferrer' className='remover' onClick={() => handleRemoveRepo(repo.id)}>Remover</a>
      <hr />
    </ItemContainer>
  );
}

export default ItemRepo;
