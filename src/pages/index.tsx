import { GetServerSidePropsContext } from 'next';
import HomeTemplate from '../templates/Home';

const HomePage = () => <HomeTemplate />;

export const getServerSideProps = ({ req }: GetServerSidePropsContext) => {
  const { theme } = req.cookies;

  return {
    props: {
      defaultTheme: theme,
    },
  };
};

export default HomePage;
