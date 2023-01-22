import { useState } from "react";
import { FiUpload } from "react-icons/fi";

export default function CreateListing() {
  const [formData, setFormData] = useState({
    type: "rent",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    purnished: false,
    offers: false,
    address: "",
    description: "",
    regularPrice: 0,
    discountPrice: 0,
  });
  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    purnished,
    address,
    description,
    offers,
    regularPrice,
    discountPrice,
  } = formData;
  const clicked = () => {};
  return (
    <main className="mx-auto px-2 max-w-md">
      <h1 className="mt-4 text-3xl text-center font-bold">Create Listing</h1>
      <form>
        <p className="mt-6 text-xl font-semibold">Sell / Rent</p>
        <div className="flex">
          <button
            type="button"
            id="type"
            value="sale"
            onClick={clicked}
            className={` mr-2 border p-3 w-full shadow-md rounded-sm hover:shadow-lg font-medium text-lg active:shadow-lg transition duration-150 ease-in-out uppercase ${
              type === "rent"
                ? "bg-white text-black"
                : "bg-purple-600 text-white"
            }`}
          >
            sell
          </button>
          <button
            type="button"
            id="type"
            value="sale"
            onClick={clicked}
            className={`ml-2 border p-3 w-full shadow-md rounded-sm hover:shadow-lg font-medium text-lg active:shadow-lg transition duration-150 ease-in-out uppercase ${
              type === "sale"
                ? "bg-white text-black"
                : "bg-purple-600 text-white"
            }`}
          >
            rent
          </button>
        </div>
        <p className="mt-3 text-xl font-semibold">Name</p>
        <input
          type="text"
          id="name"
          value={name}
          onChange={clicked}
          placeholder="Your name"
          maxLength="30"
          minLength="10"
          required
          className="w-full rounded py-3 px-4 text-xl text-gray-600 border border-gray-600 bg-white focus:border-purple-600 mb-4"
        />
        <div className="flex space-x-7">
          <div>
            <p className="text-xl font-semibold">Beds</p>
            <input
              type="number"
              value={bedrooms}
              id="bedrooms"
              min="1"
              max="30"
              required
              onChange={clicked}
              className="text-xl w-full py-3 px-4 rounded text-gray-600 border border-gray-600 bg-white focus:border-purple-600 mb-4 text-center"
            />
          </div>
          <div>
            <p className="text-xl font-semibold">Bath</p>
            <input
              type="number"
              value={bathrooms}
              id="bathrooms"
              min="1"
              max="30"
              required
              onChange={clicked}
              className="text-xl w-full py-3 px-4 rounded text-gray-600 border border-gray-600 bg-white focus:border-purple-600 mb-4 text-center"
            />
          </div>
        </div>
        <p className="mt-6 text-xl font-semibold">Parking Spot</p>
        <div className="flex">
          <button
            type="button"
            id="parking"
            value={parking}
            onClick={clicked}
            className={` mr-2 border p-3 w-full shadow-md rounded-sm hover:shadow-lg font-medium text-lg active:shadow-lg transition duration-150 ease-in-out uppercase ${
              !parking ? "bg-white text-black" : "bg-purple-600 text-white"
            }`}
          >
            yes
          </button>
          <button
            type="button"
            id="type"
            value={parking}
            onClick={clicked}
            className={`ml-2 border p-3 w-full shadow-md rounded-sm hover:shadow-lg font-medium text-lg active:shadow-lg transition duration-150 ease-in-out uppercase ${
              parking ? "bg-white text-black" : "bg-purple-600 text-white"
            }`}
          >
            no
          </button>
        </div>
        <p className="mt-6 text-xl font-semibold">Furnished</p>
        <div className="flex">
          <button
            type="button"
            id="purnished"
            value={purnished}
            onClick={clicked}
            className={` mr-2 border p-3 w-full shadow-md rounded-sm hover:shadow-lg font-medium text-lg active:shadow-lg transition duration-150 ease-in-out uppercase ${
              !purnished ? "bg-white text-black" : "bg-purple-600 text-white"
            }`}
          >
            yes
          </button>
          <button
            type="button"
            id="purnished"
            value={purnished}
            onClick={clicked}
            className={`ml-2 border p-3 w-full shadow-md rounded-sm hover:shadow-lg font-medium text-lg active:shadow-lg transition duration-150 ease-in-out uppercase ${
              purnished ? "bg-white text-black" : "bg-purple-600 text-white"
            }`}
          >
            no
          </button>
        </div>
        <p className="mt-3 text-xl font-semibold">Address</p>
        <textarea
          type="text"
          id="address"
          value={address}
          onChange={clicked}
          placeholder="Your address"
          required
          className="w-full rounded py-3 px-4 text-xl text-gray-600 border border-gray-600 bg-white focus:border-purple-600 mb-4"
        />
        <p className="mt-3 text-xl font-semibold">Description</p>
        <textarea
          type="text"
          id="description"
          value={description}
          onChange={clicked}
          placeholder="Description"
          required
          className="w-full rounded py-3 px-4 text-xl text-gray-600 border border-gray-600 bg-white focus:border-purple-600 mb-4"
        />
        <p className="mt-6 text-xl font-semibold">Offers</p>
        <div className="flex">
          <button
            type="button"
            id="offers"
            value={offers}
            onClick={clicked}
            className={` mr-2 border p-3 w-full shadow-md rounded-sm hover:shadow-lg font-medium text-lg active:shadow-lg transition duration-150 ease-in-out uppercase ${
              !offers ? "bg-white text-black" : "bg-purple-600 text-white"
            }`}
          >
            yes
          </button>
          <button
            type="button"
            id="offers"
            value={offers}
            onClick={clicked}
            className={`ml-2 border p-3 w-full shadow-md rounded-sm hover:shadow-lg font-medium text-lg active:shadow-lg transition duration-150 ease-in-out uppercase ${
              offers ? "bg-white text-black" : "bg-purple-600 text-white"
            }`}
          >
            no
          </button>
        </div>
        <div className="">
          <div className="">
            <p className="text-xl font-semibold mt-6">Regular Price</p>
            <div className="flex items-center justify-center space-x-6">
              <input
                type="number"
                value={regularPrice}
                id="regularprice"
                min="50"
                max="400000000"
                required
                onChange={clicked}
                className="text-xl w-full py-3 px-4 rounded text-gray-600 border border-gray-600 bg-white focus:border-purple-600 mb-4 text-center"
              />
              {type === "rent" && (
                <div>
                  <p className="font-semibold w-full whitespace-nowrap">
                    $ / Month
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        {offers && (
          <div className="">
            <div className="">
              <p className="text-xl font-semibold mt-6">Discount Price</p>
              <div className="flex items-center justify-center space-x-6">
                <input
                  type="dicountPrice"
                  value={discountPrice}
                  id="discountPrice"
                  min="50"
                  max="400000000"
                  required={offers}
                  onChange={clicked}
                  className="text-xl w-full py-3 px-4 rounded text-gray-600 border border-gray-600 bg-white focus:border-purple-600 mb-4 text-center"
                />
                {type === "rent" && (
                  <div>
                    <p className="font-semibold w-full whitespace-nowrap">
                      $ / Month
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        <div className="mb-6">
          <p className="text-xl font-semibold">Images</p>
          <p className="text-gray-500 italic">
            The first image will be cover (max 6)
          </p>
          <input
            className="w-full border border-gray-300 px-3 bg-white py-1.5 rounded focus:border-purple-600 active:border-purple-600"
            type="file"
            id="images"
            accept=".jpg,.jpeg,.png"
            required
            onChange={clicked}
            multiple
          />
        </div>
        <div className="mb-6">
            <button
              type="submit"
              className=" justify-center flex items-center  bg-purple-500 w-full border text-white font-semibold py-3 rounded-md hover:bg-purple-600 shadow-md hover:shadow-lg border-b-4 border-purple-700 transition duration-150 ease-in-out uppercase "
            >
              <FiUpload className=" text-2xl mr-3" /> Create Listing
            </button>
        </div>
      </form>
    </main>
  );
}
