import { useState } from "react";

function App() {
  const [count, setCount] = useState(0)
// (/api/auth,{
//   method:'POST',
//   headers:{
//     'Content-Type':'application/json'
//   },
//   body:JSON.stringify({
//     email:'',
//     password:''
//   })
// })
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  return (
    <div>
      <p>Good !!</p>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="name"
        placeholder="Enter name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        type="password"
        value={pass}
        placeholder="Enter the password"
        onChange={(e) => {
          setPass(e.target.value);
        }}
      />
      <button
        type="submit"
        onClick={async function send() {
          const res = await fetch(`http:localhost:5000/api/signup`, {
            method: "POST",
            body: {
              name: { name },
              password: { pass },
              email: { email },
            },
          });
        }}
      >
        {" "}
        Submit
      </button>
      <p>this.com</p>
    </div>
  );
}
export default App;
