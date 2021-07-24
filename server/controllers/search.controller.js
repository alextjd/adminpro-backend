import { searchDoctor } from '../services/doctor.service';
import { searchHospital } from '../services/hospital.service';
import searchByCollection from '../services/search.service';
import { searchUser } from '../services/user.service';
import { BadRequestError } from '../utils/errors/error';
import isNil from '../utils/types.utils';

export const searchAnythingCtrl = async (req, res, next) => {
  const { searchItem } = req.params;
  try {
    if (isNil(searchItem)) {
      throw new BadRequestError();
    }
    const [users, doctors, hospitals] = await Promise.all([
      searchUser(searchItem),
      searchDoctor(searchItem),
      searchHospital(searchItem),
    ]);
    return res.json({
      users,
      doctors,
      hospitals,
    });
  } catch (error) {
    return next(error);
  }
};

export const searchByCollectionCtrl = async (req, res, next) => {
  const { collection, searchItem } = req.params;
  try {
    if (isNil(collection) || isNil(searchItem)) {
      throw new BadRequestError();
    }
    const searchResults = await searchByCollection(collection, searchItem);
    return res.json({
      results: searchResults,
    });
  } catch (error) {
    return next(error);
  }
};
