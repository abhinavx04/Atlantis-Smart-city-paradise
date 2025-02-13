import React from "react";
import "./css/reservations.css";

function HomeReservations() {
  return (
    <div className="reservations">
      <section class="home-res-header res-header">
        <div class="container">
          <h1 className="res-title">HOME SERVICES RESERVATION</h1>
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
                  Services:
                </td>
                <td>
                  <select>
                    <option>Air Conditioner Repair</option>
                    <option>Water Purifier Repair</option>
                    <option>Home Clean</option>
                    <option>Plumbing Repair</option>
                    <option>Other (Write in Additional Details)</option>

                  </select>
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

export default HomeReservations;
