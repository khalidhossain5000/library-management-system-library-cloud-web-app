import React from 'react';
import { Link } from 'react-router';

const AllBooksCard = ({book}) => {
    const {
  title,
  imageUrl,
  quantity,
  author,
  category,
//   description,
  rating, 
  _id
  //content  //--->dynamic rating will be added later
} = book;

const handleDelete=()=>{
  fetch(`http://localhost:3000/allBooks-delete/${_id}`,{
    method:"DELETE"
  })
  .then((result)=>{
    alert("deleted")
    console.log(result);
  })
  .then(error=>{
    console.log(error);
  })
}
    return (
        <div className='border-2 p-6 rounded-2xl'>
            <img src={imageUrl} alt="" />
            <h1>{title}</h1>
            <h3>Quantity : {quantity}</h3>
            <h3>Author : {author}</h3>
            <h3>Category : {category}</h3>
            <h3>Rating : {rating}</h3>
            <Link to={`/update-book/${_id}`} className='mx-6 my-6 btn btn-warning font-bold text-black text-2xl'>Update</Link>
            <button onClick={handleDelete} className='my-6 mx-6 btn btn-error font-bold text-black text-2xl'>Delete</button>
        </div>
    );
};

export default AllBooksCard;