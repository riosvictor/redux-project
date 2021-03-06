import type { NextPage } from 'next'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import {actions, useAppDispatch} from '../store'
import { ICounter } from '../models'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const counter = useSelector<ICounter, number>((state) => state.counter)
  const dispatch = useAppDispatch()

  const increment = () => {
    dispatch(actions.increment())
  }
  const decrement = () => {
    dispatch(actions.decrement())
  }

  const addBy = () => {
    dispatch(actions.addBy(10))
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Redux Example</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Counter App
        </h1>
        <h2>{counter}</h2>

        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={addBy}>Add By 10</button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Victor
        </a>
      </footer>
    </div>
  )
}

export default Home
