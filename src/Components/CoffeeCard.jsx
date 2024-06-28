import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
    const { _id, photo, name, taste } = coffee;

    const handleDelete = _id => {
        console.log('Clicked', _id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
             
              fetch(`http://localhost:5000/coffee/${_id}`,{
                method: "DELETE"
              })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                // Following part isn't working
                        const remaining = coffees.filter(cof => cof._id !== _id)
                        setCoffees(remaining)
                    }
                })
            }
          });
    }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                    <img className='w- h-52'
                        src={photo}
                        alt="Movie" />
                </figure>
                <div className="flex justify-between w-full">
                    <div className='w-full p-2'>
                        <h2 className="card-title">Name: {name}</h2>
                        <p>{taste}</p>
                        <div className="card-actions">
                            <button className="btn btn-primary">Watch</button>
                        </div>
                    </div>
                    <div className="join join-vertical space-y-4">
                        <button className="btn ">Edit</button>
                        <Link to={`/updateCoffee/${_id}`}><button className="btn ">Update</button></Link>
                        <button onClick={() => handleDelete(_id)} className="btn ">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;

CoffeeCard.propTypes = {
    coffee: PropTypes.object,
    coffees: PropTypes.array,
    setCoffees: PropTypes.func
    
}



