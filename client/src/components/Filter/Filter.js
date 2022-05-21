import React from 'react'
import './Filter.scss'
 function Filter(props) {
  return (
    <div className='filter-wrapper'>
        <h2 className='filter-title'>filter</h2>
        <div className='num-of-product'>Number of Product 4</div>
        <div className='filter-by-size'>
            <span>filter</span>
            {/* <select className='filter-select' > */}
            <select value={props.size} className='filter-select' onChange={props.handleFilterBySize}>
                <option value='All'>ALL</option>
                <option value='XS'>XS</option>
                <option value='S'>S</option>
                <option value='M'>M</option>
                <option value='L'>L</option>
                <option value='XL'>XL</option>
                <option value='XXL'>XXL</option>
            </select>

        </div>
        <div className='filter-by-size'>
            <span>order</span>
            <select  value={props.sort} className='filter-select'  onChange={props.handleFilterByOrder}>
                <option value="latest">Latest</option>
                <option value="lowest">lowest</option>
                <option value="highest">Highest</option>

            </select>

        </div>
    </div>
  )
}

export default Filter