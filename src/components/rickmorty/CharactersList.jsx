import React, { useState, useEffect } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import './CharactersList.css'

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCharacters, setFilteredCharacters] = useState([]);


  // this useEffect fetches my rick and morty data! 
  // 
  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
      })
      .catch(error => {
        console.error('Error fetching character data:', error);
      });
  }, []);

  const handleSearch = () => {
    const filtered = characters.filter(character =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCharacters(filtered);
  };

  return (
    <div style={{ textAlign: 'center'}} md={12}>
      {/* <h2 >Rick and Morty Characters</h2>
      <input
      style={{ backgroundColor: 'black'}}
      className='col-12'
        type="text"
        placeholder="Search character..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      >
        </input> */}
      <Button onClick={handleSearch}>Search</Button>
      {filteredCharacters.map(character => (
        <div key={character.id}>
          <img src={character.image} alt={character.name} />
          <h5>{character.name}</h5>
        </div>
      ))}

      <Row>
        <Col>
        <h2 >Rick and Morty Characters</h2>

        </Col>

        <Col>
      <input
      style={{ backgroundColor: 'pink', textAlign:'center',}}
      className='col-12 morty'
        type="text"
        placeholder="Search character..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      >
        </input>
        
        </Col>
        
        </Row>      


    </div>

   
  );
};

export default CharacterList;