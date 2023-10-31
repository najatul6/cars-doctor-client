import { Link, useLoaderData } from "react-router-dom";
import checkout from "../../../assets/images/checkout/checkout.png"
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { BsArrow90DegLeft, BsArrow90DegRight } from "react-icons/bs";

const Checkout = () => {
    const checkoutData = useLoaderData();
    const { price, _id, title, img } = checkoutData;
    const { user } = useContext(AuthContext);

    const handleCheckOut = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const message = form.message.value;
        const order = {
            customerName: name,
            service_id: _id,
            service_title: title,
            date,
            img,
            email,
            message,
            price: price
        }
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(order)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire(
                        'Success',
                        'Order Confirmed',
                        'success'
                    )
                    form.reset();
                } else {
                    Swal.fire(
                        'Opps!',
                        'Sorry Order not Confirmed',
                        'warning'
                    )
                }
            })
    }

    return (
        <div>
            <div>
                <div className='relative w-full'>
                    <img className='w-full h-[200px] lg:h-auto' src={checkout} alt="" />
                    <div className='absolute flex items-center top-0 h-full bg-gradient-to-r rounded-xl from-[#151515] to-[rgba(21, 21, 21, 0.00)]'>
                        <h2 className='text-4xl font-bold text-white pl-10'>Check Out</h2>
                    </div>
                    <div className='absolute text-xl font-bold text-white bottom-0 w-full flex justify-center'>
                        <h2 className=' px-10 py-4 rounded-t-3xl bg-[#FF3811]'>Home/Checkout/{checkoutData.title}</h2>
                    </div>
                </div>
            </div>
            <div className="my-10 lg:my-32">
                <div className="bg-[#F3F3F3]  rounded-xl">
                    <form onSubmit={handleCheckOut} className="py-10 px-2 lg:p-20">
                        <div className="grid md:grid-cols-2 gap-6">
                            <input className="w-full p-4 rounded-xl" type="text" defaultValue={user?.displayName} name="name" placeholder="First Name" id="" />
                            <input className="w-full p-4 rounded-xl" type="date" name="date" id="" />
                            <input className="w-full p-4 rounded-xl" type="text" name="phone" placeholder="Your Phone" id="" />
                            <input className="w-full p-4 rounded-xl" type="email" defaultValue={user?.email} name="email" placeholder="Your Email" id="" />
                        </div>
                        <textarea name="message" id="" className="w-full p-6 rounded-xl my-6" placeholder="Your Message"></textarea>
                        <input className="bg-[#FF3811] w-full cursor-pointer text-white text-xl font-bold py-4 rounded-xl" type="submit" value="Order Confirm" />
                    </form>
                </div>
                <div className="flex justify-between">
                    <Link to='/'>
                        <button className="flex items-center gap-5 text-xl font-bold text-[#FF3811] my-5">
                            <BsArrow90DegLeft />
                            Continue Shopping
                        </button>
                    </Link>
                    <Link to='/bookings'>
                        <button className="flex items-center gap-5 text-xl font-bold text-[#FF3811] my-5">
                            See you Orders
                            <BsArrow90DegRight />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Checkout;