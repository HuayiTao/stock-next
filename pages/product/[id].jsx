import Head from 'next/head'
import Link from 'next/link'

export default function Products({ products }) {
  console.log('product 2', products)
  if (!products) return (
    <div>
      <p>Loading...</p>
      <Link href="/product">Back</Link>
    </div>
  );

  return (
    <>
      <Head>
        <title>{products.Name}</title>
      </Head>
      <h1>{products.Name}</h1>
      <p>{products.Code}</p>
      <p>{products.Price}</p>
      <Link href="/product">Back to Product List</Link>
    </>
  )
}

export async function getServerSideProps({ param }) {
  console.debug('param', param)
  const rest = await fetch(`https://stock-next-nine.vercel.app/api/customer/product/${param.id}`)
  const products = await rest.json()
  console.debug('product 1', products)
  return { props: { products } }
}