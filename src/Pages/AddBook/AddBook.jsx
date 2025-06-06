import React from "react";
import bgImg from "../../assets/SliderImg/reading-img.jpg";
import axios from "axios";
import toast from "react-hot-toast";


const AddBook = () => {
  const handleAddBook = (e) => {
    e.preventDefault();
    const form=e.target;
    const formData=new FormData(form);
    const data=Object.fromEntries(formData.entries());
    data.quantity=parseInt(data.quantity);

    
    //data sending to db
    axios.post('http://localhost:3000/books',data)
    .then((res)=>{
      if(res.data.insertedId){
        toast.success("Book Added Successfully", {
          className: "w-[300px] h-[100px] text-xl font-bold",
          removeDelay: 1000,
          iconTheme: {
            primary: "#16061e",
            secondary: "#ef54e2",
          },
          style: {
            border: "1px solid black",
            color: "white",
            backgroundImage: "linear-gradient(to bottom,#16061e, #ef54e2)",
          },
        });
      }
    })
    .catch(error=>{
      console.log(error);
    })
  };


  return (
    <div>
      <main
        style={{ backgroundImage: `url(${bgImg})` }}
        className="bg-cover bg-no-repeat py-36 bg-top"
      >
        <h1 className="text-[#feedff] container mx-auto text-center text-4xl lg:text-6xl font-bold py-12">
          Add A Book
        </h1>
        <h3 className="text-[#feedff] text-center text-xl lg:text-3xl font-medium">
          Fill Up The Form To Add A Book!
        </h3>
        <section className="max-w-9/12 mx-auto form-full mt-6 lg:mt-0 p-5 lg:p-24 ">
          <form onSubmit={handleAddBook}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <fieldset className="bg-white/10 backdrop-blur-sm fieldset rounded-box border border-pink-300 p-4">
                <label className="label text-pink-100 text-xl lg:text-2xl pb-3">
                  Book Title
                </label>
                <input
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
                  type="number"
                  max='5'
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
                  name="content"
                  placeholder="Add Book Content"
                  className="w-full textarea textarea-xs input shadow-2xl bg-white/10 backdrop-blur-sm text-pink-100 border-2 border-pink-500 py-7 placeholder:text-[17px] placeholder:text-white focus:border-cyan-500 !text-xl"
                ></textarea>
              </fieldset>
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

export default AddBook;
