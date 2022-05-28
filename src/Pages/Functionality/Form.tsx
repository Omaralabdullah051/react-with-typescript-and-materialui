import React, { useEffect, useRef, useState } from "react";

const Form = () => {
  const [agree, setAgree] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null!);

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    imgUrl: "",
  });

  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, name: e.target.value });
  };

  const handleEmailInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const validEmail = /^\S+@\S+\.\S+$/.test(e.target.value);
    if (validEmail) {
      setUserInfo({ ...userInfo, email: e.target.value });
      setErrors({ ...errors, emailError: "" });
    } else {
      setUserInfo({ ...userInfo, email: "" });
      setErrors({ ...errors, emailError: "Please Provide a valid Email" });
    }
  };

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const strongPassword =
      /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})/.test(e.target.value);
    if (strongPassword) {
      setUserInfo({ ...userInfo, password: e.target.value });
      setErrors({ ...errors, passwordError: "" });
    } else {
      setUserInfo({ ...userInfo, password: "" });
      setErrors({
        ...errors,
        passwordError:
          "Your password must contain at least one digit, lowercase, special character and min 8 characters and max 20 characters",
      });
    }
  };

  const handleConfirmPasswordInput = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (userInfo.password === e.target.value) {
      setUserInfo({ ...userInfo, confirmPassword: e.target.value });
      setErrors({ ...errors, confirmPasswordError: "" });
    } else {
      setUserInfo({ ...userInfo, confirmPassword: "" });
      setErrors({
        ...errors,
        confirmPasswordError: "Your two passwords doesn't matched",
      });
    }
  };

  const handleImgUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, imgUrl: e.target.value });
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  return (
    <div>
      <div>
        <form onSubmit={handleOnSubmit}>
          <h4>Please Register</h4>
          <input
            onChange={handleNameInput}
            ref={nameRef}
            type="text"
            name="userName"
            id="userName"
            placeholder="Your Name"
            autoComplete="off"
            required
          />
          <input
            onChange={handleEmailInput}
            type="email"
            name="userEmail"
            id="userEmail"
            placeholder="Your Email"
            autoComplete="off"
            required
          />
          <p>{errors?.emailError}</p>
          <input
            onChange={handlePasswordInput}
            type="password"
            name="password"
            id="password"
            placeholder="Your password"
            autoComplete="off"
            required
          />
          <p>{errors?.passwordError}</p>
          <input
            onChange={handleConfirmPasswordInput}
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            placeholder="Confirm password"
            autoComplete="off"
            required
          />
          <p>{errors?.confirmPasswordError}</p>
          <input
            onChange={handleImgUrl}
            type="text"
            name="imgUrl"
            id="imgUrl2"
            placeholder="Your image url (optional)"
            autoComplete="off"
          />
          <div>
            <input
              onClick={() => setAgree(!agree)}
              type="checkbox"
              name="checkbox"
              id="terms"
            />
            <label htmlFor="terms">
              Accept bookMart all terms and conditions
            </label>
          </div>
          <input
            disabled={!agree}
            title={!agree ? "Accept bookMart all terms and conditions" : ""}
            type="submit"
            value="Register"
          />
        </form>
      </div>
    </div>
  );
};

export default Form;
