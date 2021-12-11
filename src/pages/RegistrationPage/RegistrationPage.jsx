import s from './RegistrationPage.module.css';
import RegistrationForm from 'components/RegistrationForm';
import Background from 'pages/Background';
import Container from 'components/Container';
import Section from 'components/Section';

const RegistrationPage = () => {
  return (
    <Section className={s.section}>
      <Container className={s.container}>
        <Background>
          <div className={s.registrBox}>
            <h1 className={s.title}>Finance App</h1>
            <div className={s.subBox}></div>
            <RegistrationForm classPosition={s.registrationForm} />
          </div>
        </Background>
      </Container>
    </Section>
  );
};

export default RegistrationPage;
