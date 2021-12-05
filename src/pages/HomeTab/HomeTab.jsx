import Navigation from 'components/Navigation';
import Balance from 'components/Balance';
import Currency from 'components/Currency/Сurrency';
import ButtonAddTransactions from 'components/ButtonAddTransactions';
import Container from 'components/Container';
import Section from 'components/Section';

export const HomeTab = () => {
  return (
    <>
      <Section>
        <Container>
          <Navigation />
          <Balance />
          <Currency />
          <ButtonAddTransactions />
        </Container>
      </Section>
    </>
  );
};
