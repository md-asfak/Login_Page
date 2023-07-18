import React from 'react'

export default function Form() {
    return (
        <>
            <div className="container">
                <div className="apply_box">
                    <h1>Job Application <span className='small_tittle'> ( Web ) </span></h1>
                    <form action="#">
                        <div className="form_container">

                            <div className="form_control">
                                <label htmlFor=""> First Name</label>
                                <input type="text" name='first_name' id='first_name' placeholder='Ashfakue...' />
                            </div>

                            <div className="form_control">
                                <label htmlFor=""> Last Name</label>
                                <input type="text" name='Last_Name' id='Last_name' placeholder='Rahman...' />
                            </div>

                            <div className="form_control">
                                <label htmlFor=""> Email Id </label>
                                <input type="email" name='email' id='email' placeholder='Example@gmail.com...' />
                            </div>

                            <div className="form_control">
                                <label htmlFor="Job_role"> Job Role</label>
                                <select name="" id="">
                                    <option value="select">Select Your Job Role</option>
                                    <option value="FrontEnd Developer">FrontEnd Developer</option>
                                    <option value="BackEndEnd Developer">BackEndEnd Developer</option>
                                    <option value="FrontEnd Developer">FrontEnd Developer</option>
                                    <option value="Full Stack Developer">Full Stack Developer</option>
                                    <option value="Mern Stack Developer">Mern Stack Developer</option>
                                </select>
                            </div>

                            <div className="text_control">

                                <label htmlFor="address">Address</label>
                                <textarea name="address" id="address" cols="30" rows="4" placeholder='Enter Address'></textarea>
                                <div />
                            </div>

                            <div className="form_control">
                                <label htmlFor="">City</label>
                                <input type="text" placeholder='Kolkata' />
                            </div>

                            <div className="form_control">
                                <label htmlFor="">Pincode</label>
                                <input type="text" placeholder='711316' />
                            </div>

                            <div className="form_control">
                                <label htmlFor="">Date Of Birth</label>
                                <input type="date" value="1998-06-27" />
                            </div>

                            <div className="form_control">
                                <label htmlFor="">Upload Your Cv</label>
                                <input type="file" id='upload' name='upload' />
                            </div>

                        </div >
                        <div className="button_container">
                            <button type='submit'> Apply Now</button>
                        </div>
                    </form>

                </div>
            </div >


        </>
    )
}
