import axios from "axios";
import React, { useState } from "react";
import { sendSignUp } from "../utile/DAO/user";
import { useNavigate } from "react-router-dom";

const url = "http://localhost:8080";

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    password: "",
    email: "",
    birthDate: "",
    phoneNumber: "",
    sex: "",
    // type: "1",
  });

  const SignUp = async () => {
    if (!validate()) return;

    sendSignUp(form)
      .then((Response) => {
        navigate("/signin");
      })
      .catch((Error) => {
        setError("아이디가 중복되요");
      });
  };

  const validate = () => {
    if (form.name.length <= 0) {
      setError("이름을 입력해주세요");
      return false;
    }
    if (form.email.length <= 0) {
      setError("이메일을 입력해주세요");
      return false;
    }
    if (form.password.length < 8) {
      setError("비밀번호는 8자리 이상으로 만들어주세요");
      return false;
    }
    if (form.birthDate.length <= 0 || form.birthDate.length > 6) {
      setError("생일은 6자리로 입력해주세요");
      return false;
    }
    if (form.phoneNumber.length <= 0) {
      setError("핸드폰번호를 입력해주세요");
      return false;
    }
    if (form.sex.length <= 0) {
      setError("성별을 선택해주세요");
      return false;
    }
    setError("");
    return true;
  };

  return (
    <div className="form-structor">
      <div className="signup">
        <h2 className="form-title" id="signup">
          {error.length > 0 ? error : "Sign up"}
        </h2>
        <div className="form-holder">
          <input
            type="text"
            className="input"
            placeholder="Name"
            value={form.name}
            onChange={(event) => setForm({ ...form, name: event.target.value })}
          />
          <input
            type="email"
            className="input"
            placeholder="Email"
            value={form.email}
            onChange={(event) =>
              setForm({ ...form, email: event.target.value })
            }
          />
          <input
            type="password"
            className="input"
            placeholder="Password"
            value={form.password}
            onChange={(event) =>
              setForm({ ...form, password: event.target.value })
            }
          />
          <input
            type="text"
            className="input"
            placeholder="Birth"
            value={form.birthDate}
            onChange={(event) =>
              setForm({ ...form, birthDate: event.target.value })
            }
          />
          <input
            type="text"
            className="input"
            placeholder="PhoneNumber"
            value={form.phoneNumber}
            onChange={(event) =>
              setForm({ ...form, phoneNumber: event.target.value })
            }
          />
          <select
            className="input"
            value={form.sex}
            onChange={(event) => setForm({ ...form, sex: event.target.value })}
          >
            <option value="">성별선택</option>
            <option value="1">남자</option>
            <option value="2">여자</option>
          </select>
        </div>
        <button className="submit-btn" onClick={SignUp}>
          Sign up
        </button>
      </div>
    </div>
  );
};

export default SignUp;
