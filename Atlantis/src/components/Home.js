import React from "react";
import "./css/home.css";

// const smartCity = require('./Images/home/smart-city-image.jpeg');

function Home() {
  window.scrollTo(0, 0)
  return (
    <div className="home">
      <div className="container-home">
        <div className="page-details">
          <div className="para-1"> </div>
          <div className="para-text text">
            <h1 className="para-title" id="h-1">Atlantis</h1>
            <p>
              A smart city is a municipality that makes use of information and communication technology (ICT) to boost administrative effectiveness, disseminate information to the general public, and enhance the standard of public services as well as the welfare of its residents.
              <br />
              While the precise definition varies, a smart city's primary goal is to use smart technology and data analysis to optimise local operations, spur economic growth, and enhance residents' quality of life. The smart city's worth is determined by how it chooses to use its technology, not just how much of it it may have.
            </p>
          </div>
          <div className="para-2"> </div>
          <div className="para-text text">
            <h1 className="para-title" id="h-1">A Smart Paradise</h1>
            <p>
              The success of a smart city rests on its capacity to forge a solid alliance between the public and private sectors, notably with regard to bureaucracy and rules. The majority of the labour required to establish and sustain a digital, data-driven environment is done outside of the government, thus this partnership is essential. Sensors from one business, cameras from another, and a server from a third company might all be part of the surveillance apparatus for crowded streets.
              <br />
              Additionally, it is possible to employ independent contractors to study the data and then submit their findings to the local government. This information could then influence the hiring of an application development team to incorporate a remedy for the issues identified in the examined data. If the solution needs ongoing monitoring and update, this business might join the system. As a result, developing a successful network of partnerships rather than finishing a single project becomes more important for the success of a smart city.
            </p>
          </div>
          <div className="para-3"> </div>
          <div className="para-text text">
            <h1 className="para-title" id="h-1">Redefining our future together</h1>
            <p>
              The internet of things (IoT) gadgets, software programmes, user interfaces (UI), and communication networks are all utilised by smart cities. They do, however, heavily rely on the IoT. The Internet of Things (IoT) is a network of interconnected items that can exchange data and communicate, including cars, sensors, and home appliances. The cloud or servers are used to store the data that IoT sensors and devices collect and deliver. The interconnection of these devices and the use of data analytics (DA) enable the convergence of the physical and digital city components, enhancing the effectiveness of the public and commercial sectors, generating economic gains, and enhancing the lives of citizens.
              <br />
              Edge computing is a processing feature that some IoT devices have. Edge computing makes sure that only the most crucial and pertinent information is transmitted via the communication network.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;