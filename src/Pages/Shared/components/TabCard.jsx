import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../../hooks/useCart";


const TabCard = ({item}) => {
    const { name, recipe, image, price, _id } = item;
    const {user} = useContext(AuthContext);
    const [, refetch] = useCart();
    const location = useLocation();
    const navigate = useNavigate();

    const handleAddToCart = item => {
        console.log(item);
        const cartItem = {menuItemId: _id, name, image, price, email: user?.email}
        if(user) {
            fetch("http://localhost:5000/carts", {
                method: "POST",
                headers: {
                    "content-type" : "application/json"
                },
                body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    refetch()
                    Swal.fire(
                        'Good job!',
                        'Added to cart successfully!',
                        'success'
                      )
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to order food.',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login" , {state: {from: location}})
                }
              })
        }
    }
    return (
        <div className="card card-compact rounded-none w-full bg-base-200">
            <figure><img src={image} alt="food" /></figure>
            <p className="bg-slate-900 px-4 py-2 absolute top-4 right-4 text-white">${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handleAddToCart(item)} className="btn bg-base-300 text-black border-0 border-b-2 border-yellow-600 hover:text-white">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default TabCard;