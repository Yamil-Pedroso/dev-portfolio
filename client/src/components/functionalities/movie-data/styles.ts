import styled from 'styled-components';

export const MovieContainer = styled.div
`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;

    .movie-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;
        .movie {
          height: 20rem;

          img {
            width: 10rem;
            height: auto;
            object-fit: cover;
            border-radius: 10px;
          }
    
          .content {
             width: 10rem;
             margin-top: 0.5rem;

              .title {
                  font-size: .8rem;
                  font-weight: bold;
              }
                
             .tag {
                padding: 0.3rem;
                border-radius: 10px;
                font-weight: bold;
                font-size: 0.8rem;
             }

             .tag.green {
              color: #4CAF50;
            }
            
            .tag.orange {
              color: #FF9800;
            }
            
            .tag.red {
              color: #F44336;
            }
            
          } 
      }
    }

`;
    
    