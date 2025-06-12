import bgImg from "../../assets/SliderImg/reading-img.jpg";
import {  useParams } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";

const UpdateBook = () => {
  const {id}=useParams()
  const {user}=useAuth()
  const [existingData,setExistingData]=useState({})
  const {
    title,
    imageUrl,
    rating,
    author,
    quantity,
    category,
    _id,
    description,
    content,
  } = existingData || {};
 
  //fetching this books singlle data
  useEffect(()=>{
    axios(`http://localhost:3000/allBooks/${id}`,{
      headers:{
        authorization:`Bearer ${user?.accessToken}`
      }
    })
    .then((res)=>{
      const data=res.data;
      console.log(data);
      setExistingData(data)
    })
    .catch(error=>{
      console.log(error)
    })
  },[id])
  const handleUpdateGroup = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedData = Object.fromEntries(formData.entries());
    updatedData.quantity = parseInt(updatedData.quantity);
    

    //UPDATE DATA STRATS
    axios
      .put(`http://localhost:3000/all-books/${_id}`, updatedData)
      .then((res) => {
        console.log(res.data);
        Swal.fire({
          title: "Book has been updated successfully",
          icon: "success",
          theme: "dark",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <main
        style={{ backgroundImage: `url(${bgImg})` }}
        className="bg-cover bg-no-repeat py-36 bg-top "
      >
        <h2 className="text-center text-5xl font-bold text-pink-700 py-12">
          FIll The Form To Update The Book
        </h2>
        <section className="max-w-9/12 mx-auto form-full mt-6 lg:mt-0 p-5 lg:p-24 ">
          <form onSubmit={handleUpdateGroup}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <fieldset className="bg-white/10 backdrop-blur-sm fieldset rounded-box border border-pink-300 p-4">
                <label className="label text-pink-100 text-xl lg:text-2xl pb-3">
                  Book Title
                </label>
                <input
                  defaultValue={title}
                  type="text"
                  name="title"
                  className="input w-full shadow-2xl bg-white/10 backdrop-blur-sm text-pink-100 border-2 border-pink-500 py-7 placeholder:text-[17px] placeholder:text-white focus:border-cyan-500 text-xl"
                  placeholder="Enter Your Book Name"
                />
              </fieldset>
              <fieldset className="bg-white/10 backdrop-blur-sm fieldset rounded-box border border-pink-300 p-4">
                <label className="label text-pink-100 text-xl lg:text-2xl pb-3">
                  Book Image URL
                </label>
                <input
                  defaultValue={imageUrl}
                  type="url"
                  name="imageUrl"
                  className="input w-full shadow-2xl bg-white/10 backdrop-blur-sm text-pink-100 border-2 border-pink-500 py-7 placeholder:text-[17px] placeholder:text-white focus:border-cyan-500 text-xl"
                  placeholder="Image URL"
                />
              </fieldset>
              {/* quantity */}
              <fieldset className="bg-white/10 backdrop-blur-sm fieldset rounded-box border border-pink-300 p-4">
                <label className="label text-pink-100 text-xl lg:text-2xl pb-3">
                  Enter Book Quantity
                </label>
                <input
                  defaultValue={quantity}
                  type="number"
                  name="quantity"
                  className="input w-full shadow-2xl bg-white/10 backdrop-blur-sm text-pink-100 border-2 border-pink-500 py-7 placeholder:text-[17px] placeholder:text-white focus:border-cyan-500 text-xl"
                  placeholder="Max Members"
                />
              </fieldset>
              {/* quantity */}
              {/* author name */}
              <fieldset className="bg-white/10 backdrop-blur-sm fieldset rounded-box border border-pink-300 p-4">
                <label className="label text-pink-100 text-xl lg:text-2xl pb-3">
                  Author Name
                </label>
                <input
                  defaultValue={author}
                  type="text"
                  name="author"
                  placeholder="Author Name"
                  className="input w-full shadow-2xl bg-white/10 backdrop-blur-sm text-pink-100 border-2 border-pink-500 py-7 placeholder:text-[17px] placeholder:text-white focus:border-cyan-500 text-xl"
                />
              </fieldset>
              {/* author name */}

              {/* Category */}
              <fieldset className="bg-white/10 backdrop-blur-sm fieldset rounded-box border border-pink-300 p-4">
                <label className="label text-pink-100 text-xl lg:text-2xl pb-3">
                  Select Book Category
                </label>
                <select
                  defaultValue={category}
                  name="category"
                  className="w-full shadow-2xl bg-white/10 backdrop-blur-sm  text-black font-semibold border-2 border-pink-500 py-3 placeholder:text-[17px] placeholder:text-white focus:border-cyan-500 text-xl"
                >
                  {/* <option disabled={true}>Hobby Category</option> */}
                  <option value="" hidden>
                    Select Book Category
                  </option>
                  <option>Computer & Programming</option>
                  <option>Science-Fiction</option>
                  <option>Sports & Games</option>
                  <option>Self-Development & Meditation</option>
                </select>
              </fieldset>
              {/* Category */}

              {/* descriptions */}
              <fieldset className="bg-white/10 backdrop-blur-sm fieldset rounded-box border border-pink-300 p-4">
                <label className="label text-pink-100 text-xl lg:text-2xl pb-3">
                  Add Short Description
                </label>
                <textarea
                  defaultValue={description}
                  name="description"
                  placeholder="Description"
                  className="w-full textarea textarea-xs input shadow-2xl bg-white/10 backdrop-blur-sm text-pink-100 border-2 border-pink-500 py-7 placeholder:text-[17px] placeholder:text-white focus:border-cyan-500 !text-xl"
                ></textarea>
              </fieldset>
              {/* Rating  */}
              <fieldset className="bg-white/10 backdrop-blur-sm fieldset rounded-box border border-pink-300 p-4">
                <label className="label text-pink-100 text-xl lg:text-2xl pb-3">
                  Enter A Rating
                </label>
                <input
                  defaultValue={rating}
                  type="number"
                  max="5"
                  name="rating"
                  className="input w-full shadow-2xl bg-white/10 backdrop-blur-sm text-pink-100 border-2 border-pink-500 py-7 placeholder:text-[17px] placeholder:text-white focus:border-cyan-500 text-xl"
                  placeholder="Enter a rating"
                />
              </fieldset>
              <fieldset className="bg-white/10 backdrop-blur-sm fieldset rounded-box border border-pink-300 p-4">
                <label className="label text-pink-100 text-xl lg:text-2xl pb-3">
                  Add Book Content
                </label>
                <textarea
                  defaultValue={content}
                  name="content"
                  placeholder="Add Book Content"
                  className="w-full textarea textarea-xs input shadow-2xl bg-white/10 backdrop-blur-sm text-pink-100 border-2 border-pink-500 py-7 placeholder:text-[17px] placeholder:text-white focus:border-cyan-500 !text-xl"
                ></textarea>
              </fieldset>
              <div className="return-date">
                
              </div>
            </div>

            <input
              type="submit"
              className="border-3 border-cyan-600 w-full bg-white/10 backdrop-blur-sm p-6 text-2xl font-bold cursor-pointer text-pink-100 rounded-xl mt-4 hover:bg-gradient-to-tl hover:from-[#07233c] hover:via-[#1cc0de] hover:to-[#020611] transition duration-500"
              value="Create Group"
            />
          </form>
        </section>
      </main>
    </div>
  );
};

export default UpdateBook;
