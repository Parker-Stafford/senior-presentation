import Link from 'next/link';

export default function About() {

  return (
    <>
    <h1>About</h1>
    <p>Click the button on the home page to find a winner!</p>
    <Link href='/'>Home</Link>
    </>
  )
}