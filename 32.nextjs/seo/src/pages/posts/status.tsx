import { GetStaticProps } from 'next'

const redirect = (props) => {
  return (
    <div>
      redirect
    </div>
  )
}

export default redirect

export const getStaticProps: GetStaticProps = () => {
  return {
    // redirect: {
    //   destination: '/',
    //   permanent: true
    // }
    notFound: true
  }
}
