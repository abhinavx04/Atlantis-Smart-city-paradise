import React from "react";
import "./css/reservations.css";

function TheatreReservations() {
  return (
    <div className="reservations">
      <section class="res-header theatre-res-header">
        <div class="container">
          <h1 className="res-title">CINEMA HALL RESERVATION</h1>
          <form className="res-form" action="https://formspree.io/f/xrgdzgdd" method="POST">
            <table>
              <tr>
                <td>
                  Name:
                </td>
                <td>
                  <input types="text" placeholder="Full Name" name=""/>
                </td>
              </tr>
              <tr>
                <td>
                  E-mail:
                </td>
                <td>
                  <input types="mail" placeholder="Email" name=""/>
                </td>
              </tr>
              <tr>
                <td>
                  Contact no.
                </td>
                <td>
                  <select>
                    <option>+91</option>
                    <option>+1</option>
                    <option>+973</option>
                    <option>+91</option>
                    <option>+86</option>
                    <option>+93</option>
                  </select>
                  <input types="Phone" placeholder="82735****" name="" required/>
                </td>
              </tr>
              <tr>
                <td>
                  Cinema Hall:
                </td>
                <td>
                  <select>
                    <option>South City Mall</option>
                    <option>Forum</option>
                    <option>Atlantis Mall</option>
                    <option>Quest Mall</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  Movie:
                </td>
                <td>
                  <select>
                    <option>Spiderman: Far From Home</option>
                    <option>2012</option>
                    <option>The Incredibles 2</option>
                    <option>Avengers: Endgame</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  Seats:
                </td>
                <td>
                  <input types="number" name=""/>
                </td>
              </tr>
              <tr>
                <td>
                  Date :
                </td>
                <td>
                  <input type="date" placeholder="DD/MM/YY" name="" required/>
                </td>
              </tr>
              <tr>
                <td>
                  Time :
                </td>
                <td>
                  <input type="Time" placeholder="9:00" name="" required/>
                    <select>
                      <option>am</option>
                      <option>pm</option>
                    </select>
                </td>
              </tr>
              <tr>
                <td>
                  Additional details:
                </td>
                <td>
                  <textarea name="Message" placeholder="Write here..."></textarea>
                </td>
              </tr>
              <tr>
                <td>
                  <button className="res-button" type="SUBMIT">Send</button>
                </td>
              </tr>
            </table>
          </form>
        </div>

      </section>
    </div >
  );
}

export default TheatreReservations;
