import React, { useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data = useLoaderData()
    // const[data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/bhardwajshivang57-spec')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data); 
    //             setData(data)
    //         })
    // }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers: {data.followers} <br/>
      Following: {data.following} <br/>
      Public Repos: {data.public_repos} <br/>
      <img className='mx-auto mt-4 rounded-full' src={data.avatar_url} alt="Git picture" width="200" height="200"/>
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/bhardwajshivang57-spec')
    return response.json()
}