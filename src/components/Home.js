import React from 'react';
import Showcase from './subcomponents/Showcase';
import Features from './subcomponents/Features';

const Home = () => {
    return(
        <React.Fragment>
            <div className="container-fluid" id="showcase-gallery">
                <Showcase/>
            </div>
            <div className="container-fluid" id="features">
                <Features/>
            </div>
        </React.Fragment>

    );
}

export default Home;