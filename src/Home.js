import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'

function Home() {
    return(
        <div className="home">
            < Banner/>

            <div className="home-section">
                < Card 
                src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" title="Wonderful Experience" description="Enjoy your staying and feel the difference"/>
                < Card
                src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" title="Unique Stays" description="Bring your family and friends for unforgettable moments"/>
                < Card 
                src="https://images.pexels.com/photos/161758/governor-s-mansion-montgomery-alabama-grand-staircase-161758.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" title="Modern Rooms" description="Amazing and comfortable rooms waiting for you"/>
            </div>

            <div className="home-section">
                < Card 
                src="https://images.pexels.com/photos/271643/pexels-photo-271643.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" title="3 bedrooms in flat" description="Comfortable Rooms" price="100$/Night"/>
                < Card 
                src="https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" title="1 single room" description="Rest And Enjoy" price="50$/Night"/>
                < Card 
                src="https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" title="Room for couples" description="Enjoy Your Night" price="150$/Night"/>
            </div>

        </div>
    )
}

export default Home;