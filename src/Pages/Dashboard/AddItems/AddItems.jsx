import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;


const AddItems = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const [axiosSecure] = useAxiosSecure();

    const img_upload_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0]);
        fetch(img_upload_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if(imgResponse.success){
                    const imgUrl = imgResponse.data.display_url;
                    const {name, price, category, recipe} = data;
                    const newItem = {name, price: parseFloat(price), category, recipe, image: imgUrl}
                    console.log(newItem)
                    axiosSecure.post('/menu', newItem)
                    .then(data => {
                        if(data.data.insertedId){
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: 'Menu Item has been saved',
                                showConfirmButton: false,
                                timer: 1500
                              })
                            reset()
                        }
                    })
                }
            })
    };


    return (
        <div>
            <SectionTitle title="Add an Item" subTitle="What's New?"></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-8">
                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text font-semibold">Recipe Name*</span>
                        </label>
                        <input type="text" placeholder="Recipe Name" {...register("name", { required: true, maxLength: 120 })} className="input input-bordered w-full max-w-md" />
                    </div>
                    <div className="flex gap-4">
                        <div className="form-control w-full max-w-md">
                            <label className="label">
                                <span className="label-text font-semibold">Category*</span>
                            </label>
                            <select defaultValue="Select One" {...register("category", { required: true })} className="select select-bordered">
                                <option disabled>Select One</option>
                                <option>Salad</option>
                                <option>Pizza</option>
                                <option>Soups</option>
                                <option>Desserts</option>
                                <option>Drinks</option>
                            </select>
                        </div>
                        <div className="form-control w-full max-w-md">
                            <label className="label">
                                <span className="label-text font-semibold">Price*</span>
                            </label>
                            <input type="number" placeholder="Price" {...register("price", { required: true })} className="input input-bordered w-full max-w-md" />
                        </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Recipe Details*</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-24" {...register("recipe", { required: true })} placeholder="Type here"></textarea>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text font-semibold">Item Image</span>
                        </label>
                        <input {...register("image", { required: true })} type="file" className="file-input file-input-bordered w-full max-w-md" />
                    </div>
                    <input className="btn btn-neutral" type="submit" value="Add Item" />
                </form>
            </div>
        </div>
    );
};

export default AddItems;