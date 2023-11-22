import { useAuth0 } from "@auth0/auth0-react";

export const UserLogin = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <div className="section-login">
        <h2 className="heading-secondary u-margin-bottom">Please login to continue...</h2>
        <button className="btn-primary" onClick={() => loginWithRedirect()}>
          Login
        </button>
      </div>
    </>
  );
};
