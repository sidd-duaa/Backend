import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [githubData, setgithubData] = useState([])

  useEffect(() => {
    axios.get('/api/github')
    .then((response) => {
      setgithubData(response.data)
    })
    .catch((error) => {
      console.log(error)
    })
  })

  return (
    <>
      <h1>Chai and Full Stack</h1>
      <p>Data: {githubData.length}</p>

      {
        githubData.map((data, index) => (
          <div key={data.id}>
            <h3>{data.login}</h3>
            <img src={data.avatar_url} alt="" /> <br />
            <a href={data.url}>Profile</a>
          </div>
        ))
      }
    </>
  )
}

export default App
