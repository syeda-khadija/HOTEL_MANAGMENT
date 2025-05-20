import React from 'react'
import { Link } from 'react-router-dom'

export default function Booking() {
  return (
    <div>  <div class="booking_ocline">
    <div class="container">
       <div class="row">
          <div class="col-md-5">
             <div class="book_room">
                <h1>Book a Room Online</h1>
                <form class="book_now" id="booking-form">
<div class="row">
<div class="col-md-12">
 <span>Arrival</span>
 <img class="date_cua" src="./images/date.png"/>
 <input class="online_book" id="arrival-date" placeholder="dd/mm/yyyy" type="date" name="arrival"/>
</div>
<div class="col-md-12">
 <span>Departure</span>
 <img class="date_cua" src="./images/date.png"/>
 <input class="online_book" id="departure-date" placeholder="dd/mm/yyyy" type="date" name="departure"/>
</div>
<div class="col-md-12">
<Link to="/book">   <button class="book_btn" type="submit">Book Now</button></Link>

</div>
</div>
</form>
             </div>
          </div>
       </div>
    </div>
 </div></div>
  )
}
