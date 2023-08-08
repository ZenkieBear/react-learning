import './Financial.css';
import { iconsImgs } from '../../utils/images'

const Financial = () => {
  return (
    <div className='subgrid-two-item grid-common grid-c8'>
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Financial Advice</h3>
        <button className="grid-c-title-icon" type='button'>
          <img src={iconsImgs.plus} />
        </button>
      </div>
      <div className="grid-c8-content">
        <p className="text text-silver-v1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eius harum cumque nesciunt assumenda obcaecati,
          reiciendis ratione illum architecto corrupti quia, praesentium magni sed reprehenderit nihil minima voluptas
          repellat in ...
        </p>
      </div>
    </div>
  )
}

export default Financial