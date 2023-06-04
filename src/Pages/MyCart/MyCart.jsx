import Swal from "sweetalert2";
import useCart from "../../hooks/useCart";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { FaTrashAlt } from 'react-icons/fa';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";



const MyCart = () => {
    const [cart, refetch] = useCart();

    const total = cart?.reduce((sum, item) => { return sum + item.price }, 0)

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
                fetch(`http://localhost:5000/carts/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })
    }
    return (
        <div className="min-h-screen py-10">
            <Helmet>
                <title>Bistro Boss | My Cart</title>
            </Helmet>
            <SectionTitle title="Wanna add more?" subTitle="My Cart"></SectionTitle>
            <div className="overflow-x-auto w-full">
                <div className="flex justify-between items-center py-4">
                    <p className="font-cinzel text-xl font-bold">Total Orders: {cart.length}</p>
                    <p className="font-cinzel text-xl font-bold">Total Price: ${total}</p>
                    <Link to="/dashboard/payment">
                        <button className="btn btn-sm">Pay</button>
                    </Link>
                </div>
                <table className="table table-normal w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {cart.map((item, idx) => <tr key={item._id}>
                            <th>{idx + 1}</th>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={item.image} alt="food" />
                                    </div>
                                </div>
                            </td>
                            <td>{item.name}</td>
                            <td>${item.price}</td>
                            <th>
                                <button onClick={() => handleDelete(item._id)} className="btn  hover:bg-red-600 border-0 btn-sm"><FaTrashAlt /></button>
                            </th>
                        </tr>)}
                    </tbody>

                </table>
            </div>
        </div>

    );
};

export default MyCart;