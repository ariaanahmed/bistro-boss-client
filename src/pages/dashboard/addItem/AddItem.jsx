import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure()
    const { register, handleSubmit, reset } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then((res) => res.json())
            .then((imgResponse) => {
                console.log(imgResponse)
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, price, category, recipe } = data;
                    const newItem = { name, price: parseFloat(price), category, recipe, image: imgURL };
                    console.log(newItem);
                    axiosSecure.post('/menu', newItem)
                        .then((data) => {
                            console.log(data.data)
                            if(data.data.insertedId){
                                reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'menu item added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                  })
                            }
                        })
                }
            })
    }

    return (
        <div className='w-full px-10'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <SectionTitle subHeading={"What's new"} heading={"Add an Item"}></SectionTitle>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe name*</span>
                    </label>
                    <input type="text" placeholder="Recipe name" className="input input-bordered w-full" {...register("name", { required: true, maxLength: 120 })} />
                </div>
                <div className='md:flex md:space-x-2'>
                    {/* ----------category---------- */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Category*</span>
                        </label>
                        <select defaultValue="Pick one" className="select select-bordered" {...register("category", { required: true })}>
                            <option disabled>Pick one</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Drinks</option>
                            <option>Dessert</option>
                        </select>
                    </div>
                    {/* ----------price input------- */}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="text" placeholder="Price" className="input input-bordered w-full" {...register("price", { required: true })} />
                    </div>
                </div>
                {/* ---------textarea recipe details--------- */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Details*</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24 resize-none" placeholder="Description about your recipe" {...register("details", { required: true, maxLength: 120 })}></textarea>
                </div>
                {/* ----------file input----------- */}
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Item image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                </div>
                {/* input submit button */}
                <input className='btn btn-sm mt-4' type="submit" value="Add Item" />
            </form >
        </div>
    );
};

export default AddItem;