import Head from 'next/head'
import React from 'react'

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>Canonical Tag Example</title>
        <link
          rel="canonical"
          href='https://127.0.0.1/blog/original-post'
          key="canonical"
        />
      </Head>
      <p>This post exists on two URLs.</p>
    </div>
  )
}

export default IndexPage