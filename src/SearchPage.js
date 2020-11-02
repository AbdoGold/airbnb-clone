import React from 'react';
import './SearchPage.css';
import {Button} from '@material-ui/core';
import SearchResult from './SearchResult.js'

function SearchPage() { 
    return(
        <div className="searchPage">
            <div className="searchPage-info">
                <p>62 Stays . From 25 October To 30 October. 2 Guests</p>
                <h1>Stays Nearby</h1>
                <Button 
                variant="outlined"> Cancellation Flexibility

                </Button>

                <Button 
                variant="outlined"> Type Of Place

                </Button>

                <Button 
                variant="outlined"> Price

                </Button>

                <Button 
                variant="outlined"> Rooms And Beds

                </Button>

                <Button 
                variant="outlined"> More Filters

                </Button>

            </div>
            <SearchResult 
            img="https://images.pexels.com/photos/584399/living-room-couch-interior-room-584399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            location="Private room in New York"
            title="Stay at this inspiring room"
            description="1 Guest . 1 Bedroom . 1 Shared Bathroom . Wifi . Kitchen . Washing Maching . Free Parking"
            star={4.98} 
            price="$40 / Night"
            total="$123 total"
            />
            <SearchResult 
            img="https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            location="Beautiful Hall"
            title="Stay Together "
            description="1 Guest . 1 Bedroom . 1 Shared Bathroom . Wifi . Kitchen . Washing Maching . Free Parking"
            star={5.4} 
            price="$30 / Night"
            total="$130 total"
            />
            <SearchResult 
            img="https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            location="Amazing Seen "
            title="Room On The Beach"
            description="1 Guest . 1 Bedroom . 1 Shared Bathroom . Wifi . Kitchen . Washing Maching . Free Parking"
            star={3.89} 
            price="$45 / Night"
            total="$150 total"
            />
            <SearchResult 
            img="https://images.pexels.com/photos/276671/pexels-photo-276671.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            location="Calm And Relaxing"
            title="Unique Relaxing"
            description="1 Guest . 1 Bedroom . 1 Shared Bathroom . Wifi . Kitchen . Washing Maching . Free Parking"
            star={4.50} 
            price="$40 / Night"
            total="$115 total"
            />
            <SearchResult 
            img="https://images.pexels.com/photos/2598638/pexels-photo-2598638.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            location="Fresh Air"
            title="Beach Looking Room"
            description="1 Guest . 1 Bedroom . 1 Shared Bathroom . Wifi . Kitchen . Washing Maching . Free Parking"
            star={7.99} 
            price="$50 / Night"
            total="$200 total"
            />
        </div>
    )
}

export default SearchPage;