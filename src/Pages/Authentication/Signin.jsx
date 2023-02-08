import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
const Signin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (user) {
    console.log(user);
  }
  if (error) {
    console.log(error);
  }

  if (loading) {
    return <p>loading...</p>;
  }
  return (
    <div>
      <button onClick={() => signInWithGoogle()}>Google Login</button>
    </div>
  );
};

export default Signin;
