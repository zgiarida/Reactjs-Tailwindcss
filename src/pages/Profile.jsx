import { getAuth, updateProfile } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import { FcHome } from "react-icons/fc";

export default function Profile() {
  // inisial method getAuth dari firebase untuk mengecek autentikasi apakah user telah login
  const auth = getAuth();
  const navigate = useNavigate();
  const [changeDetails, setChangeDetails] = useState(false);
  // inisialisasai objek dalam formDara dengan data nama current user dan email
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  // mengeluarkan objek dari formData menjadi variabel
  const { name, email } = formData;
  // function logout menggunakan method signOut dari firebase base on auth/user login
  const logOut = () => {
    auth.signOut();
    navigate("/");
  };
  // function edit name untuk merubah value saat ini dengan form input yg di rubah user dengan menjalanan hook setFormData dan melakukan spread value dan menargetkan dengan array value id dan replace dengan input user
  const editName = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  const onSubmit = async () => {
    // karena mengakses dari firebase akan membuat promise dan harus menggunakan asyn/await dengan try and catch
    try {
      if (auth.currentUser.displayName !== name) {
        // cek authentikasi nama user saat ini dengan nama pada form data
        // updare dispay Name  in firebase
        // true -> jalankan method firebase updateProfile yg berisi parameter user saat ini dan update displayName dengan name
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
        // update name in firestore
        // defin doc method dari firestore dengan parameter database, user, dan user.uid
        const docRef = doc(db, "users", auth.currentUser.uid);
        // update doc menggunakan method updateDoc dari firestore nama dengan nama dari formData
        await updateDoc(docRef, {
          name, // name == name -> karena variabel sama maka dituluskan hanya satu variabel
        });
      }
      toast.success("Profile name updated");
    } catch (error) {
      toast.error("Cannot update name");
    }
  };
  return (
    <>
      <section className="max-w-6xl mx-auto flex justify-center items-center flex-col">
        <h1 className="text-center my-4 text-2xl font-bold">My Profile</h1>
        <div className="w-full md:w-[50%] px-4 ">
          <form>
            {/* form nama */}
            <input
              className={`w-full px-4 py-2 text-xl text-gray-400 border-gray-400 bg-white rounded-md transition ease-in-out ${
                changeDetails && "bg-orange-200 focus:bg-orange-200 text-black"
              }`}
              type="text"
              // value berisi nama dari formData sesuai user saat ini
              value={name}
              id="name"
              // jika changeData true maka form input akan disable dan jika false akan enable
              disabled={!changeDetails}
              // onChange untuk merubah profile nama setelah enabel dengan function editName
              onChange={editName}
            />
            {/* form email */}
            <input
              className="w-full px-4 my-4 py-2 text-xl text-gray-400 border-gray-400 bg-white rounded-md transition ease-in-out"
              type="email"
              value={email}
              id="email"
              disabled
            />
            <div className="flex justify-between">
              <p>
                Do you want to change your name ?
                <span
                  // update name
                  onClick={() => {
                    changeDetails && onSubmit(); // jika cahangeDetails is true execute function onSubmit for update profile base on database
                    setChangeDetails((prevState) => !prevState); // if setChangeDetails clicked parameter will change true or false
                  }}
                  className="text-blue-800 font-semibold hover:text-blue-400 cursor-pointer transition ease-in-out duration-200"
                >
                  {changeDetails ? " Apply change" : " Edit"}
                </span>
              </p>
              <p
                onClick={logOut}
                className="text-red-700 hover:text-red-400 cursor-pointer transition ease-in-out duration-200"
              >
                Sign Out
              </p>
            </div>
          </form>
          <button
            type="submit"
            className="mt-8 bg-purple-500 w-full border text-white font-semibold py-3 rounded-md hover:bg-purple-600 shadow-md hover:shadow-lg border-b-4 border-purple-700 transition duration-150 ease-in-out "
          >
            <Link
              to="/create-listing"
              className="flex justify-center items-center"
            >
              <FcHome className="text-2xl bg-white rounded-full mr-2" />
              RENT OR SEEL YOUR HOME
            </Link>
          </button>
        </div>
      </section>
    </>
  );
}
