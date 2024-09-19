import React from "react";

const Register = () => {
  return (
    <>
      <form action="" method="post" className="shadow-md p-10 rounded-md">
        <h1
          className="mb-10 text-2xl font-semibold"
          style={{ textAlign: "center" }}
        >
          Registration Form
        </h1>
        <div className="flex gap-4">
          <div className="flex items-center content-center gap-4">
            <p>First Name: </p>
            <input
              type="text"
              className="border rounded-md p-2 outline-none"
              autoComplete="off"
              name="firstName"
            />
          </div>
          <div className="flex items-center content-center gap-4">
            <p>Last Name: </p>
            <input
              type="text"
              className="border rounded-md p-2 outline-none"
              autoComplete="off"
              name="lastName"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center content-center gap-4">
            <p>Email: </p>
            <input
              type="email"
              className="border rounded-md p-2 outline-none"
              autoComplete="off"
              name="email"
            />
          </div>
          <div className="flex items-center content-center gap-4">
            <p>Password: </p>
            <input
              type="password"
              className="border rounded-md p-2 outline-none"
              autoComplete="off"
              name="password"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center content-center gap-4">
            <p>Username: </p>
            <input
              type="text"
              className="border rounded-md p-2 outline-none"
              autoComplete="off"
              name="username"
            />
          </div>
          <div className="flex items-center content-center gap-4">
            <p>Contact Number: </p>
            <input
              type="text"
              className="border rounded-md p-2 outline-none"
              autoComplete="off"
              name="mobile"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default Register;
