import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home({ product }) {

  function deleteProducts(id) {
    fetch(`https://stock-next-nine.vercel.app/api/customer/product/${id}`,
      {
        method: 'DELETE'
      })
      .then(rest => rest.json())
      .then(data => {
        // alert("Deleting " + id)
        window.location.reload(false);
      })

  }

  return (
    <>
      <Head>
        <title>Products</title>
      </Head>
      <h1>Products</h1>
      <table><tbody>
        {
          product.map(products => {
            return (
              <tr key={products._id}>
                <td>
                  <Link href={`/product/${products._id}`}>
                    {products.Name}
                  </Link>
                </td>
                <td>
                  <button onClick={() => deleteProducts(products._id)}>Delete</button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
      </table>
      <p>
      </p>

    </>
  )
}

export async function getServerSideProps() {
  const rest = await fetch(`https://stock-next-nine.vercel.app/api/customer/product/`)
  const product = await rest.json()
  return { props: { product } }
}