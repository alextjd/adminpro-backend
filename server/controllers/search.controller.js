import { searchDoctor } from '../services/doctor.service';
import { searchHospital } from '../services/hospital.service';
import { searchUser } from '../services/user.service';
import { BadRequestError } from '../utils/errors/error';
import isNil from '../utils/types.utils';

const searchAnythingCtrl = async (req, res, next) => {
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

export default searchAnythingCtrl;
