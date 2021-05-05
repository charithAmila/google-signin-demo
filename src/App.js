import logo from "./logo.svg";
import { useGoogleLogin } from "react-google-login";
import "./App.css";

function App() {
  const onSuccess = (data) => {
    console.log("data", data);
  };
  const onFailure = (data) => {
    console.log("OnFailue", data);
  };
  const { signIn, loaded } = useGoogleLogin({
    onSuccess,
    clientId:
      "871153974453-gujtm07ngn2hmff4dpjjim4ukoepf2gk.apps.googleusercontent.com",
    // scope,
    onFailure,
  });
  console.log("loaded", loaded);
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={signIn}>Google login</button>
      </header>
    </div>
  );
}

export default App;
