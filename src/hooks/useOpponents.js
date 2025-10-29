import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useOpponents = () => {
  return useQuery({
    queryKey: ['opponents'],
    queryFn: async () => {
      const { data } = await axios.get('https://randomuser.me/api/?results=5&nat=us');
      return data.results.map(user => ({
        id: user.login.uuid,
        name: `${user.name.first} ${user.name.last}`,
        age: user.dob.age,
        city: user.location.city,
        photo: user.picture.large,
      }));
    },
  });
};
