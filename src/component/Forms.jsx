import React from 'react'
import './formstylecss.css'

function Forms() {
  return (
    <div>
        <div className="power">
        <h3> We required some employ fof different purpose if any one interested to work with us then fill the form and click apply now</h3>

        </div>
       

      <div className="container">
        
        <div className="material">
            <h1> job application
                <span className="titlesmall"> (web)</span>
            </h1>
            <form>
                <div class="form-container">
                    <div className="form-control">
                        <label for="Date"> your name</label>
                        <input  type='text' id="Date" name="Date" placeholder="enter name.."></input>

                    </div>
                    <div className="form-control">
                        <label for="last">last name</label>
                        <input id="last" name="last" placeholder="enter last .."></input>

                    </div>
                    <div className="form-control">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="enter email.."></input>

                    </div>
                    <div className="form-control">
                        <label for="job">Job role</label>
                        <select id="job" name="job">
                            <option value="">select job profile</option>
                            <option value="front-END">billing operator</option>
                            <option value="back-end">stock managert</option>
                            <option value="Full stack web developer">customer adviser</option>

                        </select>

                    </div>
                    <div className="form-control">
                        <label for="adress">Adress </label>
                        <textarea id="adress" cols="50" rows="4" placeholder="enter adress"></textarea>


                    </div>

                    <div className="form-control">
                        <label for="city">city name</label>
                        <input id="city" name="city" placeholder="enter city.."></input>

                    </div>

                    <div className="form-control">
                        <label for="pincode">pincode</label>
                        <input id="pincode" type="number" name="Date" placeholder="enter pincode.."></input>

                    </div>

                    <div className="form-control">
                        <label for="Date">Date </label>
                        <input id="Date" type="date" name="Date" value="2024-04-30"></input>

                    </div>
                    
                    <div className="button-container">
                        <button type="submit">apply now</button>
                    </div>
                </div>





            </form>

        </div>
    </div>
    </div>
  )
}

export default Forms
