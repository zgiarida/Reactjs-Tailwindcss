import {FcGoogle} from "react-icons/fc"

export default function OAuth() {

    return (
        <button type="submit" className="flex justify-center items-center  w-full mt-1 bg-red-900 rounded h-9 text-white hover:bg-red-600 shadow-md transition duration-200 ease-in-ou font-medium text-sm">
            <FcGoogle className="text-lg bg-white rounded-full mr-2"/>
            CONTINUE WITH GOOGLE
            </button>
    )
}