import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { DateRange } from 'react-date-range';
import { useState } from 'react';
import { faBed, faCalendarDays, faCar, faPerson, faPlane, faSmile, faTaxi } from '@fortawesome/free-solid-svg-icons';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file


const Header = () => {

    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: 'selection'
        }
      ]);

  return (
    <div className="header">
    <div className="header-container">
        <div className="headerList">
            <div className="headerListItems active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
            </div>
            <div className="headerListItems">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
            </div>
            <div className="headerListItems">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
            </div>
            <div className="headerListItems">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
            </div>
            <div className="headerListItems">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport Taxis</span>
            </div>
        </div>
        <h1 className="headerTitle">Great Discounts on Sreedhar Credit Card!!</h1>
        <p className="headerDesc">Get rewareded upto 20% cashback to paytm upon booking hotels from our website <FontAwesomeIcon className='headerIcon2' icon={faSmile}/></p>
        <button className="headerBtn">Sign In / Register</button>
        
        <div className="headerSearch">
        <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className='headerIcon'/>
            <input type='text' 
            placeholder='where are you going ?' 
            className='headerSerInput' />
        </div>
        <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className='headerIcon'/>
        <span className='headerSearchText'>date to date</span>
        <DateRange
           editableDateInputs={true}
           onChange={item => setDate([item.selection])}
           moveRangeOnFirstSelection={false}
           ranges={date}
        />
        </div>
        <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className='headerIcon'/>
            <span className='headerSearchText'>2 adult 2 children 2 rooms</span>
        </div>
        <div className="headerSearchItem">
            <button className='headerBtn'>Search</button>
        </div>
     </div>
    </div>
    </div>
  )
}

export default Header