import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const AllUsers = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: users = [], refetch } = useQuery(["users"], async () => {
        const res = await axiosSecure.get("/users")
        return res.data;
    })

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: `${user.name} is an Admin now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    
                    refetch()
                }
            })
    }

    const handleDeleteUser = id =>{
        console.log(id)
    }
    return (
        <div className="min-h-screen py-10">
            <Helmet>
                <title>Bistro Boss | All Users</title>
            </Helmet>
            <SectionTitle title="Manage All Users" subTitle="How many??"></SectionTitle>
            <div className="overflow-x-auto w-full">
                <div className="flex justify-between items-center py-4">
                    <p className="font-cinzel text-xl font-bold">Total Users: {users.length}</p>
                </div>
                <table className="table table-normal w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {users.map((user, idx) => <tr key={user._id}>
                            <th>{idx + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                {user.role === "admin" ? "Admin" :
                                    <button onClick={() => handleMakeAdmin(user)} className="btn bg-orange-600  hover:bg-gray-600 border-0 btn-sm"><FaUserShield /></button>}
                            </td>
                            <th>
                                <button onClick={() => handleDeleteUser(user._id)} className="btn bg-red-600 hover:bg-gray-600 border-0 btn-sm"><FaTrashAlt /></button>
                            </th>
                        </tr>)}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllUsers;