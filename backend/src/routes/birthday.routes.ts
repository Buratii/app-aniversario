import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import { parseISO } from 'date-fns';

import BirthdaysRepository from '../repositories/BirthdaysRepository';
import CreateBirthdayService from '../services/CreateBirthdayService';

const birthdaysRouter = Router();

birthdaysRouter.get('/', async (request, response) => {
  const birthdaysRepository = getCustomRepository(BirthdaysRepository);

  const birthdays = await birthdaysRepository.find();

  return response.json(birthdays);
});

birthdaysRouter.post('/', async (request, response) => {
  try {
    const { date, local, gift } = request.body;

    const parsedDate = parseISO(date);

    const createBirthday = new CreateBirthdayService();

    const birthday = await createBirthday.execute({
      date: parsedDate,
      local,
      gift,
    });

    return response.json(birthday);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default birthdaysRouter;
