import './ContentMain.css';
import Cards from '../Cards/Cards'
import Transaction from '../Transaction/Transaction';
import Report from '../Report/Report';
import Budget from '../Budget/Budget';
import Subscriptions from '../Subscriptions/Subscriptions';
import Savings from '../Savings/Savings';
import Loans from '../Loans/Loans';
import Financial from '../Financial/Financial';

const ContentMain = () => {
  return (
    <div className='main-content-holder'>
      <div className='content-grid-one'>
        <Cards />
        <Transaction />
        <Report />
      </div>
      <div className='content-grid-two'>
        <Budget />
        <div className='grid-two-item'>
          <div className='subgrid-two'>
            <Subscriptions />
            <Savings />
          </div>
        </div>
        <div className='grid-two-item'>
          <div className='subgrid-two'>
            <Loans />
            <Financial />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentMain
