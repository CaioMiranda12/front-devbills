import { FormatCurrency } from '../../utils/format-currency';
import { CurrencyIcon } from '../currency-icon';
import { ExpensesIcon } from '../expenses-icon';
import { IncomesIcon } from '../incomes-icon';
import { Container } from './styles';

type CardProps = {
  variant?: 'balance' | 'incomes' | 'expenses';
  title: string;
  amount: number;
};

const iconsMap = {
  balance: <CurrencyIcon />,
  incomes: <IncomesIcon />,
  expenses: <ExpensesIcon />,
};

export function Card({ variant = 'balance', title, amount }: CardProps) {
  return (
    <Container $variant={variant}>
      {iconsMap[variant]}
      <span>{title}</span>
      <strong>{FormatCurrency(amount)}</strong>
    </Container>
  );
}
