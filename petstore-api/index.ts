import axiosClient from '@aspida/axios';
import api from './api/$api';
import { Pet } from './api/@types';

(async () => {
  const client = api(axiosClient());
  const petId = 100;
  const body: Pet = {
    id: petId,
    name: 'foo',
    photoUrls: [],
    status: 'available'
  };

  await client.pet.$post({ body });
  const pet = await client.pet._petId(petId).$get();
  console.log(pet);
})();
