import React from 'react';
import {useQuery, useMutation} from '@apollo/client';
import Auth from '../utils/auth';
import { removeDogId } from '../utils/localStorage';
import { REMOVE_DOG } from '../utils/mutations';
import { GET_ME } from '../utils/queries';


const SavedDogs = () => {
  const {loading, data} = useQuery(GET_ME);
  // const [removeDog] = useMutation(REMOVE_DOG);
  const userData = data?.me || [];
}