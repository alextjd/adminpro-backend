import { searchDoctor } from './doctor.service';
import { searchHospital } from './hospital.service';
import { searchUser } from './user.service';

const modelNames = {
  user: 'user',
  doctor: 'doctor',
  hospital: 'hospital',
};

const searchByCollection = async (collection, searchItem) => {
  let searchResults;
  try {
    switch (collection) {
      case modelNames.user:
        searchResults = await searchUser(searchItem);
        break;
      case modelNames.doctor:
        searchResults = await searchDoctor(searchItem);
        break;
      case modelNames.hospital:
        searchResults = await searchHospital(searchItem);
        break;
      default:
        break;
    }
  } catch (error) {
    throw new Error(error);
  }
  return searchResults;
};

export default searchByCollection;
