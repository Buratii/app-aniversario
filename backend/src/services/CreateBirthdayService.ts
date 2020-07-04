import { startOfMinute } from 'date-fns';
import Birthday from '../model/Birthday';
import BirthdaysRepository from '../repositories/BirthdaysRepository';

interface RequestDTO {
  date: Date;
  local: string;
  gift: string;
}

class CreateBirthdayService {
  private birthdaysRepository: BirthdaysRepository;

  constructor(birthdaysRepository: BirthdaysRepository) {
    this.birthdaysRepository = birthdaysRepository;
  }

  public execute({ date, local, gift }: RequestDTO): Birthday {
    const birthdayDate = startOfMinute(date);

    const birthdayInSameDate = this.birthdaysRepository.findBirthday(
      birthdayDate,
    );

    if (birthdayInSameDate) {
      throw new Error('You already have an birthday in this date');
    }

    const birthday = this.birthdaysRepository.create({
      date: birthdayDate,
      local,
      gift,
    });

    return birthday;
  }
}

export default CreateBirthdayService;
