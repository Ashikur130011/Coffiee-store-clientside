import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleSubmit= e => {
        e.preventDefault();
        
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo}
        console.log(newCoffee)

        fetch('http://localhost:5000/coffee',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success',
                        text: 'Item added successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                      })
                }
            })


    }
    return (
        <div className='bg-[#f7f6f5] p-24'>
            <h1 className='text-5xl text-success mb-6 font-serif font-bold'>Coffee Store</h1>
            <form onSubmit={handleSubmit}>
            <div className='md:flex gap-5 mb-8'>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-bold font-serif text-black">Coffee Name</span>
                    </label>
                    <label className="input-group input-group-vertical">
                        <input type="text" name='name' placeholder="name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-bold text-black font-serif">Available Quantity</span>
                    </label>
                    <label className="input-group input-group-vertical">
                        <input type="text" name='quantity' placeholder="Available Quantity" className="input input-bordered md:w-full" />
                    </label>
                </div>
            </div>
            <div className='md:flex gap-5 mb-8'>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-bold text-black font-serif">Supplier Name</span>
                    </label>
                    <label className="input-group input-group-vertical">
                        <input type="text" name='supplier' placeholder="Supplier" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-bold text-black font-serif">Taste</span>
                    </label>
                    <label className="input-group input-group-vertical">
                        <input type="text" name='taste' placeholder="Taste" className="input input-bordered md:w-full" />
                    </label>
                </div>
            </div>
            <div className='md:flex gap-5 mb-8'>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-bold text-black font-serif">Category</span>
                    </label>
                    <label className="input-group input-group-vertical">
                        <input type="text" name='category' placeholder="Category" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-bold text-black font-serif">Details</span>
                    </label>
                    <label className="input-group input-group-vertical">
                        <input type="details" name='details' placeholder="Details" className="input input-bordered md:w-full" />
                    </label>
                </div>
            </div>
            <div className='grid justify-items-center mb-8'>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text font-bold text-black font-serif">Photo URL</span>
                    </label>
                    <label className="input-group input-group-vertical">
                        <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className='grid justify-items-center mb-8'>
                <div className="form-control md:w-1/2">
                    
                    <button className="btn btn-outline btn-success text-xl font-serif">Add Coffee</button>
                </div>
            </div>
        </form>
        </div>
    );
};

export default AddCoffee;