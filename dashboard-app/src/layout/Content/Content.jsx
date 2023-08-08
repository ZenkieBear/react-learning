import ContentMain from '../../components/ContentMain/ContentMain'
import ContentTop from '../../components/ContentTop/ContentTop'
import './Content.css'

const Content = () => {
  return (
    <div className='main-content'>
      <ContentTop />
      <ContentMain />
    </div>
  )
}

export default Content
