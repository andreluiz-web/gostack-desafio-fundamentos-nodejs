/* eslint-disable @typescript-eslint/no-unused-vars */
import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface RequestDTO {
  title: string;
  value: number;
  type: string;
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: RequestDTO): Transaction {
    const transaction = this.transactionsRepository.create({
      title,
      value,
      type: 'income',
    });

    return transaction;
  }
}

export default CreateTransactionService;
