
import { data } from 'autoprefixer';
import './App.css'

function App() {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name };
    fetch('http://localhost:1000/users', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(user, email)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  }

  return (
    <>

      <h1>Vite + React</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="name" id="" />
        <input type="email" name="email" id="" />
        <input type="submit" value="save" />
      </form>


    </>
  )
}

export default App
