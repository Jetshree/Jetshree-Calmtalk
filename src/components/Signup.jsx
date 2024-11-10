import React from "react";
import wave from "../images/wave.png";
import bg from "../images/signup-bg.svg";
import { Link, useNavigate } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useRegisterUserMutation } from "../services/hmsApi";
import Swal from "sweetalert2";
import axios from "axios";
export default function Signup() {
  let [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({});
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const [serverErr, setServerErr] = React.useState({});
  function handelChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }
  async function handelSubmit(e) {
    e.preventDefault();
    // console.log(formData);async function handleFormSubmit(e) {
      e.preventDefault();

      try {
        setLoading(true);
        const response = await axios.post('http://localhost:7000/api/auth/createuser', formData);
        if (response.status === 201) {
          // Handle successful registration
          Swal.fire({
            title: 'Registration Successful!',
            text: 'Your account has been created successfully. Please login to continue.',
            icon: 'success',
            confirmButtonText: 'Go to Login',
            confirmButtonColor: '#3085d6',
            background: '#f9f9f9',
            backdrop: `rgba(0, 0, 123, 0.4) url('/images/celebrate.gif') center no-repeat`,
            showCloseButton: true,
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/login');
            }
          });
        } else {
          // Handle error
          console.error('Registration failed:', response.data);
          setServerErr(response.data.errors);
        }
      } catch (error) {
        console.error('Registration error:', error);
        setServerErr(error.response.data.errors);
      } finally {
        setLoading(false);
      }
    }


  return (
    <>
      {loading ? (
        <div className="flex justify-center h-[95vh] text-center items-center">
          <ScaleLoader
            color={"#32AD94"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="h-[100vh]">
          <Link
            to="/login"
            className="lg:text-[1rem] text-xs border-2 border-[#37AE96] bg-[#37AE96] lg:duration-100 px-3 py-2 rounded-full text-[#fff] m-5 font-bold absolute right-0 hover:text-[#37AE96] hover:bg-[#fff]"
          >
            Go Back
          </Link>
          <img
            src={wave}
            alt=""
            className="h-full absolute z-[-1] lg:block hidden"
          />
          <div className="flex justify-evenly items-center h-full">
            <div className="lg:block hidden">
              <img src={bg} alt="" className="h-[40vh]" />
            </div>
            <div className="lg:w-[50%] md:w-[60%] lg:p-0 p-2 w-full flex justify-center">
              <form
                className="text-center flex flex-col lg:w-[75%] w-full p-1 md:text-md text-sm"
                onSubmit={handelSubmit}
              >
                <span className="md:text-3xl text-xl font-bold tracking-wide my-2 text-[#2AC48F]">
                  SIGN UP
                </span>
                <div className="flex justify-between">
                  <div className="flex flex-col my-2 p-2">
                    <div className="p-2 border-b-2 border-grey my-0 mx-0 flex">
                      <input
                        type="text"
                        className="ml-2 w-full border-0 outline-0 palceholder-red-500"
                        placeholder={
                          serverErr.firstname
                            ? String(serverErr.firstname[0])
                            : "Enter First Name"
                        }
                        name="firstname"
                        value={formData.name}
                        onChange={handelChange}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col my-2 p-2">
                    <div className="p-2 border-b-2 border-grey my-0 mx-0 flex">
                      <input
                        type="text"
                        className="ml-2 w-full border-0 outline-0"
                        placeholder={
                          serverErr.lastname
                            ? String(serverErr.lastname[0])
                            : "Enter Last Name"
                        }
                        name="lastname"
                        value={formData.name}
                        onChange={handelChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="text-left p-2 text-[#999]">
                  <span className="mr-2">Date of Birth :</span>
                  <input
                    type="date"
                    name="dateofbirth"
                    value={formData.name}
                    onChange={handelChange}
                  />
                  <br />
                  <span>
                    {serverErr.firstname ? String(serverErr.firstname[0]) : ""}
                  </span>
                </div>
                <div className="flex-col text-[#999] p-2">
                  <div className="w-full text-left">
                    <span className="mr-5">Gender :</span>
                    <span className="mr-5">
                      Male &nbsp;&nbsp;
                      <input
                        type="radio"
                        name="gender"
                        value="M"
                        onChange={handelChange}
                      />
                    </span>
                    <span className="mr-5">
                      Female &nbsp;&nbsp;
                      <input
                        type="radio"
                        name="gender"
                        value="F"
                        onChange={handelChange}
                      />
                    </span>
                    <span>
                      Other &nbsp;&nbsp;
                      <input
                        type="radio"
                        name="gender"
                        value="O"
                        onChange={handelChange}
                      />
                    </span>
                  </div>
                  <span className="text-left w-full">
                    {serverErr.firstname ? String(serverErr.firstname[0]) : ""}
                  </span>
                </div>

                <div className="p-2 my-0 mx-0 flex w-full">
                  <span className="text-[#999]">Email :</span>
                  <input
                    type="email"
                    className="ml-2 w-[65%] border-0 outline-0 border-b-2 border-grey"
                    name="email"
                    placeholder={
                      serverErr.email
                        ? String(serverErr.email[0])
                        : "Enter Email"
                    }
                    value={formData.name}
                    onChange={handelChange}
                  />
                </div>
                <div className="p-2 my-0 mx-0 flex w-full">
                  <span className="text-[#999]">Password :</span>
                  <input
                    type="password"
                    className="ml-2 w-[40%] border-0 outline-0 border-b-2 border-grey"
                    name="password"
                    placeholder={
                      serverErr.password
                        ? String(serverErr.password[0])
                        : "Enter Password"
                    }
                    value={formData.name}
                    onChange={handelChange}
                  />
                </div>
                <div className="p-2 my-0 mx-0 flex w-full">
                  <span className="text-[#999]">Confirm Password :</span>
                  <input
                    type="password"
                    className="ml-2 w-[40%] border-0 outline-0 border-b-2 border-grey"
                    name="password2"
                    placeholder={
                      serverErr.password2
                        ? String(serverErr.password2[0])
                        : "Enter Confirm Password"
                    }
                    value={formData.name}
                    onChange={handelChange}
                  />
                </div>
                <div className="p-2 my-0 mx-0 flex w-full">
  <span className="text-[#999]">Role :</span>
  <select
    className="ml-2 w-[65%] border-0 outline-0 border-b-2 border-grey"
    name="role"
    value={formData.role}
    onChange={handelChange}
  >
    <option value="">Select Role</option>
    <option value="User">User</option>
    <option value="intern">Mental Health Coach</option>
    <option value="doctor">Psychologist</option>
  </select>
</div>
                <button className="transition-all ease-in-out duration-100 w-[40%] mt-5 mx-auto bg-[#2AC48F] border-2 border-[#2AC48F] hover:bg-[#fff] hover:text-[#2AC48F] hover:border-2 rounded-full p-2 text-[#fff] tracking-widest font-bold">
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
