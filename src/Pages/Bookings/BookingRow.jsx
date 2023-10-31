import { AiFillDelete } from "react-icons/ai";


const BookingRow = ({ order, handleDelete, handleConfirm }) => {
    const { _id, customerName, img, service_title, email, price, date, status } = order;

    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-outline text-xl btn-error"><AiFillDelete /></button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{service_title}</div>
                    </div>
                </div>
            </td>
            <td>{price}</td>
            <td >
                <p>{customerName}</p>
                <p className="badge badge-ghost badge-sm">{email}</p>
            </td>
            <td>{date}</td>
            <th>
                {
                    status==='Confirm'? <span className="text-primary font-bold">Confirmed</span>:
                    <button onClick={() => handleConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
                }
            </th>
        </tr>
    );
};

export default BookingRow;