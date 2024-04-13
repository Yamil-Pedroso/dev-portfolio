import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Container,
  CharacterWrapper,
  CharacterContent,
  CharacterCard,
  LoadBtnWrapper,
  ImageWrapper,
  ModalContentWrapper,
  NameCharacter,
  TypeIcon,
  IconContentWrapper,
} from './styles';
import './styles.css';
import ReactModal from 'react-modal';
import { GrStatusGoodSmall } from 'react-icons/gr';
import { FaGenderless } from 'react-icons/fa';
import { PiGenderFemaleBold, PiGenderMaleBold } from 'react-icons/pi';
import { RiFileUnknowFill } from 'react-icons/ri';

interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
  status: "Alive" | "Dead" | "unknown";
  type: string;
  gender: "Female" | "Male" | "Genderless" | "unknown";
}
    
const InfiniteScroll: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState<Character | null>(null);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [pages, setPages] = useState<number>(1);

  const handleResetData = () => {
    setCharacters([]);
    setPages(0);
   
  };

  const loadMoreCharacters = async  (): Promise<void> => {
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/?page=${pages}`
      );
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      const newCharacters: Character[] = response.data.results;
      setCharacters((oldCharacters) => [...oldCharacters, ...newCharacters]);

      setPages((oldPages) => oldPages + 1);
    } catch (error) {
      console.error('Error loading more characters:', error);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    loadMoreCharacters();
  }, []);

  return (
    <Container>
      <h1>Infinite scroll</h1>
        <button onClick={handleResetData}>Reset Data</button>
      <CharacterContent>
        {characters.map((character) => (
          <CharacterWrapper key={character.id}>
            <CharacterCard>
              <img 
              onClick={() => setSelectedCharacter(character)}
              src={character.image} alt={character.name} />
            </CharacterCard>
          </CharacterWrapper>
        ))}
      </CharacterContent>
      <LoadBtnWrapper>
        <button onClick={loadMoreCharacters}>Load More</button>
      </LoadBtnWrapper>

      <ReactModal
        isOpen={selectedCharacter !== null}
        onRequestClose={() => setSelectedCharacter(null)}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 2
          },
          content: {
            backgroundColor: '#1f1f1f',
            border: '2px solid #242d33',
            borderRadius: 8,
            maxWidth: 500,
            maxHeight: 1000,
            margin: '5rem auto',
            padding: 0,
            zIndex: 2,
            overflowX: 'hidden',
          }
          }}
        contentLabel="Character Modal"
      >
        {selectedCharacter && (
          <ModalContentWrapper>
            <ImageWrapper>
              <img src={selectedCharacter.image} alt={selectedCharacter.name} />
            </ImageWrapper>
              <div style={{marginTop: "2rem"}}>
              <IconContentWrapper>
                <NameCharacter />
                <p>{selectedCharacter.name}</p>
              </IconContentWrapper>
              <IconContentWrapper>
              {selectedCharacter.gender === 'Female' && (
                   <>
                     <PiGenderFemaleBold style={{ color: '#4d964d', fontSize: "2rem" }}  />
                     <p>{selectedCharacter.gender}</p>
                   </>
                 )}
                 {selectedCharacter.gender === 'Male' && (
                   <>
                     <PiGenderMaleBold style={{ color: '#4d964d', fontSize: "2rem" }}  />
                     <p>{selectedCharacter.gender}</p>
                   </>
                 )}
                 {selectedCharacter.gender === 'Genderless' && (
                   <>
                     <FaGenderless style={{ color: '#4d964d', fontSize: "2rem" }}  />
                     <p>{selectedCharacter.gender}</p>
                   </>
                 )}
                 {selectedCharacter.gender === 'unknown' && (
                   <>
                     <RiFileUnknowFill style={{ color: '#4d964d', fontSize: "2rem" }}  />
                     <p>{selectedCharacter.gender}</p>
                   </>
                 )}
              </IconContentWrapper>
              <IconContentWrapper>
                <TypeIcon />
                <p>{selectedCharacter.type}</p>
              </IconContentWrapper>
              <IconContentWrapper>
                <IconContentWrapper>
                  {selectedCharacter.status === 'Alive' ? (
                    <><GrStatusGoodSmall style={{ color: '#4d964d', fontSize: "2rem" }} /><span style={{ color: '#00ff00' }}>
                    <p  style={{ color: "#4d964d"}}>{selectedCharacter.status}</p>
                  </span></>
                  ) : selectedCharacter.status === 'Dead' ? (
                    <><GrStatusGoodSmall style={{ color: '#b23f3f', fontSize: "2rem" }} /><span style={{ color: '#b23f3f' }}>
                      <p  style={{ color: "#b23f3f"}}>{selectedCharacter.status}</p>
                    </span></>
                  ) : (
                    <><GrStatusGoodSmall style={{ color: '#ccc', fontSize: "2rem" }} /><span style={{ color: '#fff' }}>
                        <p  style={{ color: "#ccc"}}>{selectedCharacter.status}</p>
                      </span></>
                  )}
                  
                  </IconContentWrapper>
              </IconContentWrapper>
              </div>
            <button style={{width: "6rem", margin: "1.5rem auto"}} onClick={() => setSelectedCharacter(null)}>Close</button>
          </ModalContentWrapper>
        )}
      </ReactModal>
    </Container>
  );
};

export default InfiniteScroll;
