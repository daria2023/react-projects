import React from 'react';
import Loading from '../components/Loading';
import SearchForm from '../components/SearchForm';
import List from '../components/List';
import { useGlobalContext } from '../context';

const Home = () => {

  const {loading} = useGlobalContext();

  return (
    <section className='section home-section'>
      <SearchForm />
      {loading && <Loading />}
      <List />
    </section>
  )
}

export default Home