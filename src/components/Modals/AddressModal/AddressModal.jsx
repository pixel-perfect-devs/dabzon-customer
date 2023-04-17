import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const AddressModal = ({ setMddal }) => {
    const [data, setData] = useState([])


    return (
        <div>
            <div className=" fixed inset-0 z-10 overflow-y-auto">
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                        <div className="absolute inset-0 bg-gray-500 opacity-75"
                            onClick={() => setMddal(false)
                            }></div>
                    </div>
                    <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-center justify-center">
                                <div className="Modal--Container mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                    <h3 className="container_heading text-lg  leading-6 font-medium text-gray-900" id="modal-headline">
                                        Add Adress
                                    </h3>
                                    <div className="mt-2">
                                        <form className="form--container w-full max-w-lg">
                                            <div className="form_line1 customer__email flex flex-col ">
                                                <label
                                                    className="text-gray-900 "
                                                    htmlFor="Address_line"
                                                >
                                                    Address line 1
                                                </label>
                                                <textarea className="border-green-500 border rounded-md p-2 outline-0  bg-transparent w-[300px] " id="w3review" name="w3review" rows="2" cols="50">
                                                </textarea>
                                            </div>
                                            <div className=" form_line2 flex flex-col ">
                                                <label
                                                    className="text-gray-900 "
                                                    htmlFor="Address_line"
                                                >
                                                    Address line 2
                                                </label>
                                                <textarea className="border-green-500 border rounded-md p-2 outline-0  bg-transparent w-[300px] " id="w3review" name="w3review" rows="2" cols="50">
                                                </textarea>
                                            </div>
                                            <div className='form_cities mt-4 flex flex-col'>
                                                <label htmlFor="mySelect" >Select city:</label>
                                                {/* <select id="mySelect" onChange={getStateID} className=''> */}
                                                <select id="mySelect"  className=''>
                                                    
                                                    <option value="" selected>Delhi</option>
                                                    <option value="" selected>Mumbai</option>
                                                    <option value="" selected>Kanpur</option>
                                                
                                                </select>

                                            </div>
                                            <div className='form_PinCode mt-4 flex flex-col'>
                                                <label htmlFor='input'>Pin Code</label>
                                                <input type="text" class="border border-solid border-green-500"></input>

                                            </div>
                                            <div className='form_phoneNo mt-4 flex flex-col'>
                                                <label htmlFor='input'>Phone Number</label>
                                                <input type="text" class="border border-solid border-green-500"></input>
                                            </div>


                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                            <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm " onClick={() => setMddal(false)}>
                                Send
                            </button>
                            <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                onClick={() => setMddal(false)}       >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AddressModal