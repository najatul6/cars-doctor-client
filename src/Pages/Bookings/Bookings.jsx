import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import { BsArrow90DegLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const Orders = () => {
    const { user } = useContext(AuthContext);
    const [order, setOrder] = useState([]);

    const url = `http://localhost:5000/orders?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [url]);
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/orders/${id}`, {
                    method: 'DELETE',

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = order.filter(remainingOrder => remainingOrder._id !== id)
                            setOrder(remaining)
                        }
                    })

            }
        })
    }

    const handleConfirm = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to confirm this!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Confirm it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/orders/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ status: 'Confirm' })

                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            Swal.fire(
                                'Confirmed!',
                                'Your file has been confirmed.',
                                'success'
                            )
                            const remaining = order.filter(remainingOdr => remainingOdr._id !== id);
                            const updated = order.find(remainingOdr => remainingOdr._id === id);
                            updated.status = 'Confirm'
                            const updatedOrder = [updated, ...remaining]
                            setOrder(updatedOrder)
                        }
                    })

            }
        })
    }
    return (
        <div>
            <h2 className="text-center font-bold text-2xl text-[#FF3811]">Total Order : {order.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Service</th>
                            <th>Price</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            order.map(order => <BookingRow key={order._id} order={order} handleConfirm={handleConfirm} handleDelete={handleDelete}></BookingRow>)
                        }

                    </tbody>
                </table>
            </div>
            <Link to='/'>
                <button className="flex items-center gap-5 text-xl font-bold text-[#FF3811] my-5">
                    <BsArrow90DegLeft />
                    Continue Shopping
                </button>
            </Link>
        </div>
    );
};

export default Orders;