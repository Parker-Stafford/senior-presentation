import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {useState} from 'react'

export default function Home() {

//
  const [display, setDisplay] = useState('test');
  return (
    <>
    <h1>This is my cool cooking website!</h1>
    <h2>{display}</h2>
    </>
  )
}
