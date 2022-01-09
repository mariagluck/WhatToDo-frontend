import "./Form.scss";
import React, { useState} from 'react';
import axios from "axios";
import { useUserContext } from "../../context/UserContext";
import { FaCloudUploadAlt } from "react-icons/fa";
import { Link } from "react-router-dom";



export default function Form(){
    const [ listing, setListing] = useState({});
    const [ image, setImage] = useState({raw:"", preview:false});
    const [err, setErr] = useState([]);
    const { user } = useUserContext();
    const [ isRegister, setIsRegister ] = useState()
    // console.log(user, "hi");

    const changeHandler = (e) => {
        setListing({...listing, [e.target.name] : e.target.value})
    }

    const fileChangeHandler = (e) => {
        if(e.target.files.length){
            setImage({
                raw:e.target.files[0],
                preview: URL.createObjectURL(e.target.files[0])
            })
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();

        let fd = new FormData();
        fd.append("name", listing.name);
        fd.append("address", listing.address);
        fd.append("category", listing.category)
        fd.append("summary", listing.summary);
        fd.append("description", listing.description);
        fd.append("start_date", "2022-01-08 16:30");
        // fd.append("start_date", listing.start_date);
        fd.append("end_date", "2022-01-08 18:30");
        // fd.append("end_date", listing.end_date);
        fd.append("start_time", "2022-01-08 16:30");
        // fd.append("start_time", listing.start_time);
        fd.append("end_time", "2022-01-08 18:30");
        fd.append("end_time", listing.end_time);
        fd.append("free_event", listing.free_event);
        fd.append("price", listing.price);
        fd.append("booking_required", listing.booking_required);
        fd.append("booking_site", listing.booking_site)
        fd.append("website", listing.website);
        fd.append("email", listing.email);
        fd.append("phone", listing.phone);
        fd.append("instagram", listing.instagram);
        fd.append("facebook", listing.facebook);
        //fd.append("image", image.raw, image.preview);



        axios({
            url: `/users/${user._id}/events`,
            method: "POST",
            data: fd,
            headers: {
                "Content-type":"multipart/formdata",
                "Authorization": "bearer " + localStorage.getItem("token")
            }
        }).then(response => {
              console.log(response.data, "submitted")
              setIsRegister(!isRegister)
            })
          .catch((err) => {
              console.log(err.response);
              if(err.response.data.errors) {
                  setErr(err.response.data.errors)
              }
          })

    }

    if(isRegister) {
      return ( 
          <div className="submitted">
              <h2>Your listing is submitted</h2>
              <p>We'll review your listing and let you know the outcome by email in the next 24 hours.</p>
              <Link to="/">Go back to main page</Link>
          </div>
      )
  }

    return(
        <div className="form">
            <h1><span>CREATE LISTING</span></h1>
            <form encType="multipart/form-data" onSubmit={submitHandler}>
                <div>
                    <label htmlFor="name">Listing Name</label>
                    <input
                        type="text" 
                        id="name" 
                        name="name"
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="address">Address</label>
                    <input 
                        type="text" 
                        id="address" 
                        name="address"
                        onChange={changeHandler}
                    />
                </div>

                <div>
                    <label htmlFor="categories">Categories</label>

                    <div className="container">
                        <input 
                            className="hide-box" 
                            id="1" type="radio" 
                            name="category" 
                            value="Free" 
                            onChange={changeHandler}
                        />
                        <label htmlFor="1" className="categ-radio">
                            <div className="display-box">
                                <div className="type">FREE</div>
                            </div>
                        </label>

                        <input 
                            className="hide-box" 
                            id="2" type="radio" 
                            name="category" 
                            value="Workshop" 
                            onChange={changeHandler}
                        />
                        <label htmlFor="2" className="categ-radio">
                            <div className="display-box">
                                <div className="type">WORKSHOP</div>
                            </div>
                        </label>

                        <input 
                            className="hide-box" 
                            id="3" 
                            type="radio" 
                            name="category" 
                            value="Family" 
                            onChange={changeHandler}
                        />
                        <label htmlFor="3" className="categ-radio">
                            <div className="display-box">
                                <div className="type">FAMILY</div>
                            </div>
                        </label>
                        <input 
                            className="hide-box" 
                            id="4" 
                            type="radio" 
                            name="category" 
                            value="Market"
                            onChange={changeHandler}
                        />
                        <label htmlFor="4" className="categ-radio">
                            <div className="display-box">
                                <div className="type">MARKET</div>
                            </div>
                        </label>

                        <input 
                            className="hide-box" 
                            id="5" type="radio" 
                            name="category" 
                            value="Food"
                            onChange={changeHandler}
                        />
                        <label htmlFor="5" className="categ-radio">
                            <div className="display-box">
                                <div className="type">FOOD AND DRINKS</div>
                            </div>
                        </label>

                        <input 
                            className="hide-box"  
                            id="6" type="radio" 
                            name="category" 
                            value="Reading"
                            onChange={changeHandler}
                        />
                        <label htmlFor="6" className="categ-radio">
                            <div className="display-box">
                                <div className="type">READING</div>
                            </div>
                        </label>

                        <input 
                            className="hide-box" 
                            id="7" type="radio" 
                            name="category" 
                            value="Exhibition" 
                            onChange={changeHandler}
                        />
                        <label htmlFor="7" className="categ-radio">
                            <div className="display-box">
                                <div className="type">EXHIBITION</div>
                            </div>
                        </label>

                        <input 
                            className="hide-box" 
                            id="8" type="radio" 
                            name="category" 
                            value="Performing_arts"
                            onChange={changeHandler}
                        />
                        <label htmlFor="8" className="categ-radio">
                            <div className="display-box">
                                <div className="type">PERFORMING ARTS</div>
                            </div>
                        </label>

                        <input 
                            className="hide-box" 
                            id="9" type="radio" 
                            name="category" 
                            value="Music" 
                            onChange={changeHandler}
                            />
                        <label htmlFor="9" className="categ-radio">
                            <div className="display-box">
                                <div className="type">MUSIC</div>
                            </div>
                        </label>

                        <input 
                            className="hide-box" 
                            id="10" type="radio" 
                            name="category" 
                            value="Party"
                            onChange={changeHandler}
                        />
                        <label htmlFor="10" className="categ-radio">
                            <div className="display-box">
                                <div className="type">PARTY</div>
                            </div>
                        </label>

                        <input 
                            className="hide-box" 
                            id="11" 
                            type="radio" 
                            name="category" 
                            value="Opening"
                            onChange={changeHandler}
                        />
                        <label htmlFor="11" className="categ-radio">
                            <div className="display-box">
                                <div className="type">OPENING</div>
                            </div>
                        </label>

                        <input 
                            className="hide-box" 
                            id="12" type="radio" 
                            name="category" 
                            value="Film"
                            onChange={changeHandler}
                            />
                        <label htmlFor="12" className="categ-radio">
                            <div className="display-box">
                                <div className="type">FILM</div>
                            </div>
                        </label>
                    </div>

                </div>

                <h2>DESCRIPTION</h2>
                <div>
                    <label htmlFor="summary">Summary</label>
                    <p>This brief overview of your listing will appear in search results.</p>
                    <textarea 
                        className="summary" 
                        id="summary"
                        name="summary"
                        onChange={changeHandler}
                    />
                    <p className="characters-limit">max. 100</p>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <textarea 
                        className="description" 
                        id="description" 
                        name="description"
                        onChange={changeHandler}
                    />
                    <p className="characters-limit">max. 1000</p>
                </div>

                <h2>DATE AND TIME</h2>
                <div>
                    <label htmlFor="start">When does the event start?</label>
                    <input 
                        type="date" 
                        name="start_date" 
                        id="start"
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="end">When does the event end?</label>
                    <input 
                        type="date" 
                        name="end_date" 
                        id="end"
                        onChange={changeHandler}
                    />
                </div>
                {/* <div>
                    <label htmlFor="occurs">How often does it occur?</label>
                </div> */}
                <div>
                    <label htmlFor="time-start">What time does the event start?</label>
                    <input 
                        type="time" 
                        name="start_time" 
                        id="start_time"
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="time-end">What time does the event end?</label>
                    <input 
                        type="time" 
                        name="end_time" 
                        id="end_time"
                        onChange={changeHandler}
                    />
                </div>

                <h2>PRICES AND BOOKING</h2>
                <div>
                    <label htmlFor="free">Is this a free event or tour ?</label>
                    <div className="container">
                        <input 
                            className="hide-box" 
                            id="yes-free" 
                            type="radio" 
                            value="yes" 
                            name="free_event" 
                            onChange={changeHandler}
                        />
                        <label htmlFor="yes-free" className="free-radio">
                            <div className="display-box">
                                <div className="free">YES</div>
                            </div>
                        </label>

                        <input 
                            className="hide-box" 
                            id="no-free" 
                            type="radio" 
                            value="no" 
                            name="free_event" 
                            onChange={changeHandler}
                        />
                        <label htmlFor="no-free" className="free-radio">
                            <div className="display-box">
                                <div className="free">NO</div>
                            </div>
                        </label>
                    </div>
                </div>

                <div>
                    <label htmlFor="price">Price</label>
                    <input 
                        type="number" 
                        id="price" 
                        name="price"
                        onChange={changeHandler}
                    />€
                </div>

                <div>
                    <label htmlFor="bookings">Are bookings required?</label>
                    <div className="container">
                        <input 
                            className="hide-box" 
                            id="yes-booking" 
                            type="radio" 
                            value="yes" 
                            name="booking_required"
                            onChange={changeHandler}
                        />
                        <label htmlFor="yes-booking" className="booking-radio">
                            <div className="display-box">
                                <div className="booking">YES</div>
                            </div>
                        </label>

                        <input 
                            className="hide-box" 
                            id="no-booking" 
                            type="radio" 
                            value="no" 
                            name="booking_required"
                            onChange={changeHandler}
                        />
                        <label htmlFor="no-booking" className="booking-radio">
                            <div className="display-box">
                                <div className="booking">NO</div>
                            </div>
                        </label>
                    </div>
                </div>

                <div>
                    <label htmlFor="bookingLink">Booking link</label>
                    <input 
                        type="text" 
                        id="bookingLink" 
                        name="booking_site"
                        onChange={changeHandler}
                    />
                </div>
                

                <h2>CONTACT DETAILS</h2>
                <div>
                    <label htmlFor="website">Website</label>
                    <input 
                        type="text" 
                        id="website" 
                        name="website"
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text" 
                        id="email" 
                        name="email"
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input 
                        type="tel" 
                        id="phone" 
                        name="phone"
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="instagram">Instagram</label>
                    <input 
                        type="text" 
                        id="instagram" 
                        name="instagram"
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="facebook">Facebook</label>
                    <input 
                        type="text" 
                        id="facebook" 
                        name="facebook"
                        onChange={changeHandler}
                    />
                </div>
               
      

                <h2>ADD IMAGE</h2>
                <div className='file'>
                    
                    <label htmlFor='input-file'>
                        {image.preview 
                            ?  <img src={image.preview} alt="event" className="event-picture" />
                            : <div><FaCloudUploadAlt className="upload-icon" />Select an image</div>
                        }
                    </label>
                    <input 
                        id='input-file' 
                        type='file' 
                        name="uploaded_image"
                        onChange={fileChangeHandler}
                    />
                </div>


                <h2>REVIEW AND SUBMIT</h2>

                <p>Please review your listing before you submit and ensure it meets our guidelines.</p>
                <p>We'll review your listing and let you know the outcome by email.</p>
                
                <ul>
                    {err?.map((e) => (
                    <li>{e}</li>
                    ))}
                </ul>


                <input type="submit" value="SUBMIT"/>
            </form>
        </div>
    );
}
