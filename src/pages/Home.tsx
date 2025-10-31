import Hero from '../components/Hero';
import Services from '../components/Services';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Sharp Turn Technologies | Home</title>
        <meta name="description" content="Born to lead, groomed to conquer. Explore our resilient tech solutions." />
      </Helmet>
      <Hero />
      <Services />
    </>
  );
};

export default Home;
