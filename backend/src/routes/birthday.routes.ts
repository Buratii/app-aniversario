import { Router } from 'express';
import { parseISO } from 'date-fns';

import BirthdaysRepository from '../repositories/BirthdaysRepository';
import CreateBirthdayService from '../services/CreateBirthdayService';

const birthdaysRouter = Router();

const birthdaysRepository = new BirthdaysRepository();

birthdaysRouter.get('/', (request, response) => {
  const birthdays = birthdaysRepository.all();

  return response.json(birthdays);
});

birthdaysRouter.post('/', (request, response) => {
  try {
    const { date, local, gift } = request.body;

    const parsedDate = parseISO(date);

    const createBirthday = new CreateBirthdayService(birthdaysRepository);

    const birthday = createBirthday.execute({ date: parsedDate, local, gift });

    return response.json(birthday);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default birthdaysRouter;
