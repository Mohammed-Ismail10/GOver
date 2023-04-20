import gameover from "../../img/gaming.ebaf2ffc84f4451d.jpg";
import { useFormik } from "formik";
import React, { useState } from "react";
import { object, string } from "yup";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postReister } from "../Redux/RegisterSlice.js";
import Helmet from "react-helmet";

export default function Register() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(``);

  async function submit(values) {
    setLoading(true);
    let { payload } = await dispatch(postReister(values));
    console.log(payload);
    if (payload === undefined) {
      setError(`Account Already Exists`);
      setLoading(false);
    } else {
      navigate(`/login`);
      setLoading(false);
    }
  }

  let validationSchema = object({
    name: string()
      .required(`name is required`)
      .min(3, `name minimum length is 3`)
      .max(15, `name maximum length is 15`),
    email: string().required(`email is required`).email(`email is invalid`),
    phone: string()
      .required(`phone is required`)
      .matches(/^[0-9]{10}$/, `phone must be valid number`),
    password: string()
      .required(`password is required`)
      .matches(/^.{8,}$/, `password must be at least 8 charecter`),
    rePassword: string()
      .required(`rePassword is required`)
      .oneOf([Yup.ref(`password`)], `password and repassword is not match`),
  });
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    },
    validationSchema,
    onSubmit: submit,
  });

  return (
    <>
    <Helmet>
      <title>Register</title>
    </Helmet>
      <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 p-0 d-none d-lg-block">
          <div className="h-100">
            <img className="w-100 h-100" src={gameover} alt="" />
          </div>
        </div>
        <div className="col-lg-6 p-0">
          <div className="p-3 text-center bg-login">
            <h1 className="h4 text-white-50 my-3">Create My Account!</h1>
            <form onSubmit={formik.handleSubmit}>
              <div className="row">
                <div className="col-sm-6">
                  <input
                    className="text-white form-control bg-dark border-0 py-1 my-1 my-sm-0"
                    placeholder="Name"
                    type="text"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                  />
                  {formik.errors.name && formik.touched.name ? (
                    <div className="alert alert-warning mt-1 py-0">
                      {formik.errors.name}
                    </div>
                  ) : null}
                </div>
                <div className="col-sm-6">
                  <input
                    className="text-white form-control bg-dark border-0 py-1 my-1 my-sm-0"
                    placeholder="Email Address"
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
                </div>
              </div>
              <input
                className="text-white form-control bg-dark border-0 py-1 my-3"
                placeholder="Phone"
                type="tel"
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
              />
              {formik.errors.phone && formik.touched.phone ? (
                <div className="alert alert-warning mt-1 py-0">
                  {formik.errors.phone}
                </div>
              ) : null}
              <input
                className="text-white form-control bg-dark border-0 py-1 my-3"
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
              <input
                className="text-white form-control bg-dark border-0 py-1 my-3"
                placeholder="Repassword"
                type="password"
                name="rePassword"
                value={formik.values.rePassword}
                onChange={formik.handleChange}
              />
              {formik.errors.rePassword && formik.touched.rePassword ? (
                <div className="alert alert-warning mt-1 py-0">
                  {formik.errors.rePassword}
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
                  `Create Account`
                )}
              </button>
            </form>
            <p className="text-muted fs-14 border-bottom border-light py-3">
              This site is protected by reCAPTCHA and the Google <a className="text-muted" href="https://policies.google.com/privacy">Privacy Policy </a>
              and <a className="text-muted" href="https://policies.google.com/terms">Terms of Service</a> apply.
            </p>
            <p className="text-white-50 fs-14">Already a member? <Link className="text-info text-decoration-none" to={`/login`}>Log In<i class="fa-solid fa-chevron-right"></i></Link></p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
