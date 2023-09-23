import Head from 'next/head'
import Link from 'next/link';
import styled from 'styled-components';

const href = '/';
const name = `Zenkie’s Blog`

const IndexPage = () => {
  // const href = 'https://blog.zenkie.cn/';
  return (
    <div>
      <Head>
        <title>Canonical Tag Example</title>
        <meta
          name='description'
          content='iPhone 14 and iPhone 14 Plus. 6.1” and 6.7” sizes. All-day battery life. Crash Detection. Epic photos. 6 colors.'
          key='desc'
        />
        <link
          rel="canonical"
          href='https://127.0.0.1/blog/original-post'
          key="canonical"
        />
        <meta
          property='og:description'
          content='And a social description for our cool page'
        />
        <meta
          property='og:image'
          content='https://blog.zenkie.cn/_next/image?url=%2Fimages%2Fprofile.jpg&w=256&q=75'
        />
      </Head>
      <h1>This page shows examples about seo</h1>
      <p>This post exists on two URLs.</p>
      {/* <NavLink href={href} name={name}/> */}
    </div>
  )
}

const RedLink = styled.a`
  color: red;
`;
function NavLink({ href, name }: {
  href: string,
  name: string
}) {
  // Must add passHref to Link
  return (
    <Link href={href} passHref>
      <RedLink>{name}</RedLink>
    </Link>
  );
}

export default IndexPage