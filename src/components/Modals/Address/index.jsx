import React,{useState,useEffect} from "react";

const index = ({ setModal }) => {
    const [getData, setGetData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch('/api/address/get');
          const data = await response.json();
          console.log(data.allData);
          setGetData(data.allData);
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        //   console.log(faqData[0]);
        }
      }
  
      fetchData();
    }, []);

    const [postData, setPostData] = useState({
        name:"",
        number:"",
        email:"",
        pincode:"",
        address:"",
        city:"",
    })
    const onSubmit = async (e) => {
      e.preventDefault();
      // console.log(postData)
      if(postData.city === '' || postData.address === '' || postData.email === '' || postData.name === '' || postData.number === '' || postData.pincode === ''){ 
        alert('choose city');
        return;
      }
        const res = await fetch(`/api/address/post`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json', 
            },
            body: JSON.stringify(postData),
          });
          const data = await res.json();
          if (res.status === 200) {
            alert("Product Created");
          }
          console.log(data);
    }
  return (
    <div className="Modal_container flex items-center h-[100vh] py-8 z-">
      <form onSubmit={(e) => onSubmit(e)} className="flex flex-col border-2 border-dabgreen justify-center items-center space-y-4 w-[40rem] h-[38rem] p-6 mx-auto bg-gray-100 rounded-md shadow-md">
        <div className="customer__name flex flex-col">
          <label className="text-gray-900 " htmlFor="name">
            Your Name
          </label>
          <input
              onChange={(e) =>
                setPostData((prev) => (prev = { ...prev, name: e.target.value }))
              }
            className="border-gray-300 border rounded-md p-2 outline-0 bg-transparent w-[300px] "
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="customer__number flex flex-col">
          <label className="text-gray-900 " htmlFor="mobile">
            Mobile no.
          </label>
          <input
              onChange={(e) =>
                setPostData((prev) => (prev = { ...prev, number: e.target.value }))
              }
            className="border-gray-300 border rounded-md p-2 outline-0 bg-transparent w-[300px] "
            type="number"
            id="mobile"
            name="mobile"
            placeholder="Enter your Mobile no."
            required
          />
        </div>
        <div className=" customer__email flex flex-col ">
          <label className="text-gray-900 " htmlFor="email">
            Your Email
          </label>
          <input
              onChange={(e) =>
                setPostData((prev) => (prev = { ...prev, email: e.target.value }))
              }
            className="border-gray-300 border rounded-md p-2 outline-0  bg-transparent w-[300px] "
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email..."
            required
          />
        </div>

        <div className=" customer__pincode flex flex-col ">
          <label className="text-gray-900 " htmlFor="pincode">
            Pin Code
          </label>
          <input
              onChange={(e) =>
                setPostData((prev) => (prev = { ...prev, pincode: e.target.value }))
              }
            className="border-gray-300 border rounded-md p-2 outline-0  bg-transparent w-[300px] "
            type="number"
            id="pincode"
            name="pincode"
            placeholder="Enter your pincode..."
            required
          />
        </div>

        <div className=" customer__pincode flex flex-col ">
          <label className="text-gray-900 " htmlFor="address">
            Full Address
          </label>
          <input
              onChange={(e) =>
                setPostData((prev) => (prev = { ...prev, address: e.target.value }))
              }
            className="border-gray-300 border rounded-md p-2 outline-0  bg-transparent w-[300px] "
            type="text"
            id="address"
            name="address"
            placeholder="Enter your address"
            required
          />
        </div>
        <div className="flex flex-col">

        <label className="text-gray-900 " htmlFor="dropdown">City</label>
        <select onChange={(e) => setPostData((prev) => prev = {...prev, city: e.target.value})} className="border-gray-300 border rounded-md p-2 outline-0  bg-transparent w-[300px]" id="dropdown" required defaultValue={'not'}>
          <option disabled value="not">Chooose your city</option>
          <option value="Agra">Agra</option>
          <option value="Delhi">Delhi</option>
          <option value="Banglore">Banglore</option>
        </select>

        </div>
        <div className="flex justify-between w-72">
          <button
          onClick={(e) => onSubmit(e)}
            className="flex justify-center items-center text-green-50 bg-dabgreen rounded-full w-24 h-9"
            type="submit"
          >
            Save
          </button>
          <button
            onClick={() => setModal(false)}
            className="flex justify-center items-center text-green-50 bg-dabgreen rounded-full w-24 h-9">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default index;
