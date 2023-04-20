import React, { useContext, useState } from "react";
import gameover from "../../img/gaming.ebaf2ffc84f4451d.jpg";
import logo from "../../img/logo.png";
import { Formik, useFormik } from "formik";
import { object, string } from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changePassword, postLogin } from "../Redux/LoginSlice.js";
import { loginContext } from "../../Context/loginContext.js";
import Helmet from "react-helmet";

export default function Login() {
  let {saveUserData}=useContext(loginContext);
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(``);

  async function submit(values) {
    setLoading(true);
    let {payload} = await dispatch(postLogin(values))
    if (payload == undefined) {
      setError(`Incorrect email or password`);
      setLoading(false);
    } else {
      localStorage.setItem(`userToken`,payload.token);
      saveUserData();
      navigate(`/`);
    }
  }

  let validationSchema = object({
    email: string().required(`email is required`).email(`email is invalid`),
    password: string()
      .required(`password is required`)
      .matches(/^.{8,}$/, `password must be at least 8 charecter`),
  });

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: submit,
  });

  return (
    <>
    <Helmet>
      <title>Login</title>
    </Helmet>
      <div className="container py-5 mt-4">
      <div className="row">
        <div className="col-lg-6 p-0 d-none d-lg-block">
          <div className="h-100">
            <img className="w-100 h-100" src={gameover} alt="" />
          </div>
        </div>
        <div className="col-lg-6 p-0">
          <div className="p-4 text-center bg-login">
            <img height={72} src={logo} alt="" />
            <h1 className="h4 text-white-50 my-3">Log in to GameOver</h1>

            <form
              className="border-bottom border-light pb-3"
              onSubmit={formik.handleSubmit}
            >
              <input
                className="form-control bg-white border-0 py-1 my-1 my-sm-0"
                placeholder="Email"
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email && formik.touched.email ? (
                <div className="alert alert-warning mt-1 py-0">
                  {formik.errors.email}
                </div>
              ) : null}

              <input
                className="form-control bg-white border-0 py-1 my-3"
                placeholder="Password"
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
              {formik.errors.password && formik.touched.password ? (
                <div className="alert alert-warning mt-1 py-0">
                  {formik.errors.password}
                </div>
              ) : null}

              {error ? (
                <div className="alert alert-danger mt-1 py-0">{error}</div>
              ) : null}

              <button
                type="submit"
                className="btn btn-primary form-control btn-login text-white"
              >
                {loading ? (
                  <span className="rounded d-inline-block text-white">
                    <i className="fas fa-spinner fa-spin"></i>
                  </span>
                ) : (
                  `Login`
                )}
              </button>
            </form>

            <div className="py-3">
              <a
                onClick={() => {
                  dispatch(changePassword());
                }}
                className="text-info fs-14 text-decoration-none"
                href=""
              >
                Forgot Password?
              </a>
              <p className="text-muted fs-14">
                Not a member yet?{" "}
                <Link
                  className="text-info fs-14 text-decoration-none"
                  to={`/register`}
                >
                  Create Account<i class="fa-solid fa-chevron-right"></i>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
