import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then((response) => response.json())
      .then(({ data, length }) => {
        setProductList(data)
      })
  }, [])

  return (
    <div>
      <Head>
        <title>Avo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div>Platzi and Next.js!</div>
      {productList.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  )
}

export default HomePage
