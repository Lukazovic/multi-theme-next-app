import { GetServerSidePropsContext } from 'next';
import HomeTemplate from '../templates/Home';

const HomePage = () => <HomeTemplate />;

export const getServerSideProps = ({ req }: GetServerSidePropsContext) => ({
  props: {
    defaultTheme: req.cookies.theme ?? null,
  },
});

export default HomePage;
