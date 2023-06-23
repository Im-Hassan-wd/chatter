import { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";

// hooks
import { useSignup } from "../../hooks/useSignup";
import GoogleButton from "../../components/GoogleButton";

// styles
import "./Signup.css";
import { useGoogle } from "../../hooks/useGoogle";

const userCategories = [
  { value: "writer", label: "Writer" },
  { value: "reader", label: "Reader" },
];

interface Option {
  value: string;
  label: string;
}

export default function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [textType, setTextType] = useState(false);
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [thumbnailError, setThumbnailError] = useState<string | null>(null);
  const [userCategory, setUserCategory] = useState<Option | null>(null);
  const { signup, isPending, error }: any = useSignup();
  const {
    googleSignUp,
    signupError,
    isPending: signupPending,
  }: any = useGoogle();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    signup(firstName, lastName, email, password, thumbnail);
  };

  const handleInputType = (e: any) => {
    setTextType(!textType);
    textType
      ? e.target.previousElementSibling?.setAttribute("type", "password")
      : e.target.previousElementSibling?.setAttribute("type", "text");
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setThumbnail(null);
    let selected = e.target.files?.[0];

    if (!selected) {
      setThumbnailError("Please select a file");
      return;
    }
    if (!selected.type.includes("image")) {
      setThumbnailError("Selected file must be an image");
      return;
    }
    if (selected.size > 1000000) {
      setThumbnailError("Image file size must be less than 1MB");
      return;
    }

    setThumbnailError(null);
    setThumbnail(selected);
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form sign-form">
      <div className="auth-img-div">
        <div className="text">
          <h1>Chatter</h1>
          <p>
            Unleash the Power of Words, Connect with Like-minded Readers and
            Writers
          </p>
        </div>
        <img src="./img/bg.png" alt="intro" className="auth-img" />
      </div>

      <div className="auth-content">
        <div className="link">
          <Link className="active" to="/signup">
            Register
          </Link>
          <Link to="/login">Login</Link>
        </div>

        <h3>Register as a Writer/Reader</h3>

        <div className="inputs-wrapper">
          <div className="input-div">
            <label htmlFor="first-name">
              <i className="fi fi-rr-id-card-clip-alt"></i>
            </label>
            <input
              id="first-name"
              required
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              placeholder="First name"
            />
          </div>

          <div className="input-div">
            <label htmlFor="last-name">
              <i className="fi fi-rr-user"></i>
            </label>
            <input
              id="last-name"
              required
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              placeholder="Last name"
            />
          </div>

          {/* <div className="input-div">
            <Select options={userCategories}
            onChange={(option) =>
              setUserCategory(option as ValueType<Option, false>)
            } />
          </div> */}

          <div className="input-div">
            <label htmlFor="email">
              <i className="fi fi-rr-envelope"></i>
            </label>
            <input
              id="email"
              required
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="Email Address"
            />
          </div>

          <div className="input-div">
            <label htmlFor="password">
              <i className="fi fi-rr-lock"></i>
            </label>
            <input
              id="password"
              required
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Password"
            />
            <i
              onClick={handleInputType}
              className={textType ? "fi fi-rr-eye-crossed" : "fi fi-rr-eye"}
            ></i>
          </div>

          <div className="input-div">
            <label htmlFor="file">
              <i className="fi fi-rr-picture"></i>
            </label>
            <input id="file" required type="file" onChange={handleFileChange} />
            {thumbnailError && <div className="error">{thumbnailError}</div>}
          </div>
        </div>

        {!isPending && <button className="btn">Sign up</button>}
        {isPending && (
          <button className="btn" disabled>
            Signing Up...
          </button>
        )}

        <GoogleButton
          handleSign={googleSignUp}
          error={signupError}
          isPending={signupPending}
          text="Sign up with Google"
        />

        {error && <div className="error">{error}</div>}
      </div>
    </form>
  );
}
