import React from "react";
import Layout from "../components/Layout";
import * as Button from "../components/Button";

const Login = () => {
  return (
    <Layout title="Tailwind CSS 2 | Login">
      <section className="container">
        <article className="flex">
          <div className="w-full lg:w-1/3">
            <div className="p-4 bg-white border rounded-lg">
              <form>
                <div className="mb-5">
                  <label htmlFor="email" className="block mb-2 text-sm">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-lg border-gray-300 shadow-sm transition duration-200 focus:ring focus:ring-blue-100 focus:border-blue-500"
                    id="email"
                    placeholder="Email"
                  />
                  {/* <input
                    type="email"
                    className="w-full border shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-100 transition duration-200 rounded-lg h-10 focus:outline-none px-3"
                    id="email"
                  /> */}
                </div>
                <div className="mb-5">
                  <label htmlFor="gender" className="block mb-2 text-sm">
                    Gender
                  </label>
                  <select
                    className="w-full rounded-lg border-gray-300 shadow-sm transition duration-200 focus:ring focus:ring-blue-100 focus:border-blue-500"
                    id="gender"
                  >
                    <option selected>Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  {/* <select
                    className="w-full border shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-100 transition duration-200 rounded-lg h-10 focus:outline-none px-3"
                    id="gender"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select> */}
                </div>
                <Button.primary>Login</Button.primary>
              </form>
            </div>
          </div>
        </article>
      </section>
    </Layout>
  );
};

export default Login;
