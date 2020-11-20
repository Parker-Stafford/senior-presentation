import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import {useState} from 'react';
import axios from 'axios';

export default function Home() {

  const [display, setDisplay] = useState('');

  var findWinner = () => {
    axios.get('/api/winner')
      .then(results => {
        setDisplay(results.data.name);
      })
  }

  return (
    <>
    <h1>This is my cool website!</h1>
    <h1>Today's big winner</h1>
    <h2>{display}</h2>
    <Link href='/about'>About</Link>
    <div>
      <button onClick={findWinner}>Click me!</button>
    </div>
    </>
  )
}
