import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Huayi Tao Page</title>
    </Head>
    <h1>Huayi Tao Page</h1>
    <p>
      This is a sample page for Huayi Tao.
    </p>
    <Link href="/about">About</Link>
    </>
  )
}
