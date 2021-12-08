import { Link } from 'react-router-dom';
import Background from 'pages/Background';
import Section from '../../components/Section';
import s from './NotFound.module.css';

function NotFound() {
  const { backdrop, section, container, error, title, link } = s;

  return (
    <Background className={backdrop}>
      <Section className={section}>
        <div className={container}>
          <p className={error}>404</p>
          <h1 className={title}>Страница не найдена</h1>
          <Link className={link} to="/home">
            Вернуться на главную страницу
          </Link>
        </div>
      </Section>
    </Background>
  );
}

export default NotFound;
