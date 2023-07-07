import "./header.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { DateRange } from "react-date-range"
import { useState } from "react"
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faSmile,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons"
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import { format } from "date-fns"

const Header = ({type}) => {
    const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
            adult: 1,
            children: 0,
            rooms: 1
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
        return {
            ...prev, [name] : operation === 'i'? options[name] +1 : options[name] -1
        }
    })
  }

  return (
    <div className="header">
      <div className={type==='list'? "header-container listMode" : "header-container"}>
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

     { type !== 'list' && 
      <> 
        <h1 className="headerTitle">
          Great Discounts on Sreedhar Credit Card!!
        </h1>
        <p className="headerDesc">
          Get rewareded upto 20% cashback to paytm upon booking hotels from our
          website <FontAwesomeIcon className="headerIcon2" icon={faSmile} />
        </p>
        <button className="headerBtn">Sign In / Register</button>

        <div className="headerSearch">
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faBed} className="headerIcon" />
            <input
              type="text"
              placeholder="where are you going ?"
              className="headerSerInput"
            />
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
            <span onClick={()=> setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate, "dd/mm/yyyy")} to ${format(date[0].endDate, "dd/mm/yyyy")}`} </span>
            {openDate && <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className="date"
            />}
          </div>
          <div className="headerSearchItem">
            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
            <span onClick={()=>setOpenOptions(!openOptions)}  className="headerSearchText">{`${options.adult} adult . ${options.children} children . ${options.rooms} rooms`}</span>
           {openOptions && <div className="options">
                  <div className="optionList">
                    <span className="optionText">Adult</span>
                    <div className="counterOptions">
                    <button className="optionCounterBtn" onClick={()=>handleOption("adult", "d")}
                    disabled={options.adult <=1}
                    >-</button>
                    <span className="optionCounterNumber">{options.adult}</span>
                    <button className="optionCounterBtn" onClick={()=>handleOption("adult", "i")}>+</button>
                </div>
                    </div> 
                <div className="optionList">
                    <span className="optionText">Children</span>
                    <div className="counterOptions">
                    <button className="optionCounterBtn" 
                    onClick={()=>handleOption("children", "d")}
                    disabled={options.children <=0}
                    >-</button>
                    <span className="optionCounterNumber">{options.children}</span>
                    <button className="optionCounterBtn" onClick={()=>handleOption("children", "i")}>+</button>
                </div>
                </div>
                <div className="optionList">
                    <span className="optionText">Rooms</span>
                    <div className="counterOptions">
                    <button className="optionCounterBtn" onClick={()=>handleOption("rooms", "d")}
                    disabled={options.rooms <=1}
                    >-</button>
                    <span className="optionCounterNumber">{options.rooms}</span>
                    <button className="optionCounterBtn" onClick={()=>handleOption("rooms", "i")}>+</button>
                </div>
                    </div>
                </div>
            }</div>
          <div className="headerSearchItem">
            <button className="headerBtn">Search</button>
          </div>
        </div>
        </>}
      </div>
    </div>
                    
  );
};

export default Header;
