
import React from 'react';
import { Container, Col, Card, Button } from 'react-bootstrap';
import {useQuery, useMutation} from '@apollo/client';
import Auth from '../utils/auth';
import { removeDogId } from '../utils/localStorage';
import { REMOVE_DOG } from '../utils/mutations';
import { GET_ME } from '../utils/queries';


const SavedDogs = () => {
  const {loading, data} = useQuery(GET_ME);
  const [removeDog] = useMutation(REMOVE_DOG);
  const userData = data?.me || [];
  console.log("saveddogs", data)

  const handleDeleteSavedDog = async (id) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const response = await removeDog({
        variables: { id: id }
      });

      console.log(response);
      removeDogId(id);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <h2>LOADING...</h2>
  }

  return (
    <>
    <section>
      <Container>
        <h1>Viewing saved dogs!</h1>
      </Container>
      <Container>
        <h2>
          {userData.savedDogs.length
          ? `Viewing ${userData.savedDogs.length} saved ${userData.savedDogs.length === 1 ? 'dog' : 'dogs'}:`
          : 'You have no saved dogs yet!'}
        </h2>
        <Col>
          {userData.savedDogs.map((dog) => {
            return (
              <Card key={dog.id}>
                {dog.image ? <Card.Img src={dog.image} alt={`The image of ${dog.breed}`} /> : null}
                <Card.Body>
                  <Card.Title>{dog.breed}</Card.Title>
                  <Card.Text>{dog.characteristics}</Card.Text>
                  <Button className='btn-block btn-danger' onClick={() => handleDeleteSavedDog(dog.id)}>
                    Remove this dog from your Saved Dogs
                  </Button>
                </Card.Body>
              </Card>
            )
          })}
        </Col>
      </Container>
    </section>
    </>
  )


}

export default SavedDogs;