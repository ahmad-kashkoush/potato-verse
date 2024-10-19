import LoginForm from "@/features/authentication/LoginForm";
import { Link } from "react-router-dom";
import styled from "styled-components";
/** TODO:
 * * ✅ setup routes: takes 20mins, expected 10mins
 * * add validation using react-hook-form
 */
function Login() {
  return (
    <StyledDiv className="">
      <div className="background-wrapper"></div>
      <div className="login-wrapper">
        <h1>hello again!</h1>
        <h3>Welcome back you&apos;ve been missed</h3>

        <LoginForm />
        {/* Before and after to style it */}
        <p className="or-continue-with">Or continue with </p>
        <OtherAccounts>
          <div>
            <Link to={""}>
              <img src={"/icons/google-icon.png"} alt="google" />
            </Link>
          </div>
          <div>
            <Link to={""}>
              <img src={"/icons/facebook-icon.png"} alt="facebook" />
            </Link>
          </div>
          <div>
            <Link to={""}>
              <img src={"/icons/github-icon.png"} alt="github" className="" />
            </Link>
          </div>
        </OtherAccounts>

        <SignupForwarder>
          Not a member?
          <Link to={"/signup"}>Register</Link>
        </SignupForwarder>
      </div>
    </StyledDiv>
  );
}
// -------------styled components-------------------
const StyledDiv = styled.div`
  & .login-wrapper {
    margin-top: 4rem;
    text-align: center;
    padding: 2rem 2rem;
    & h1 {
      font-size: 3rem;
      font-weight: bold;
      text-transform: capitalize;
    }
    & h3 {
      font-size: 1.7rem;
    }
  }
  & .background-wrapper {
    display: none;
    background-image: url("/login-background.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 100vh;
  }

  @media (min-width: 764px) {
    & .background-wrapper {
      display: block;
    }
    & .login-wrapper {
      width: 100%;
    }

    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  & .or-continue-with {
    font-size: 20px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  & + .or-continue-with::before,
  & + .or-continue-with::after {
    content: "";
    width: 25%;
    height: 5px;
    background-color: blue;
  }
`;

const OtherAccounts = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  & div {
    border: 2px solid grey;
    display: flex;
    align-items: center;
    justify-content: center;
    --size: 70px;
    width: var(--size);
    height: var(--size);
    border-radius: 5px;
    background-color: white;
    & img {
      width: 32px;
    }
  }
`;

const SignupForwarder = styled.div`
  font-size: 20px;
  & a {
    color: lightblue;
    margin-left: 10px;
  }
`;

export default Login;
