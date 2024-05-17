import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { blogPosts } from '../blogsPosts/blogPosts'

const URL = 'https://jsonplaceholder.typicode.com/users'

export default function BlogPostPage() {
  const { slug } = useParams()
  const { title, imgUrl, content } = blogPosts[slug]
  const [upVotes, setUpVotes] = useState(0)
  const [name, setName] = useState()

  useEffect(() => {
    fetch(URL)
      .then((result) => result.json())
      .then((json) => {
        setTimeout(() => {
          setName(json[0].name)
        }, 1000)
      })
  }, [])

  useEffect(() => {
    console.log('use effect')
  }, [upVotes])

  function upVote() {
    setUpVotes(upVotes + 1)
  }

  function downVote() {
    if (upVotes > 0) {
      setUpVotes(upVotes - 1)
    }
  }

  return (
    <div className="flex flex-col items-center space-y-4 p-10">
      <img className="h-96 w-96 rounded-full object-cover" src={imgUrl} alt={imgUrl} />
      <h1 className="font-bold text-4xl">{title}</h1>
      <h2>{name == null ? 'Loading...' : 'Written by' + name}</h2>
      <p className="text-lg">{content}</p>
      <div className="flex flex-row items-center space-x-4">
        <button onClick={upVote} className="border rounded p-2">
          👍
        </button>
        <p>{upVotes}</p>
        <button onClick={downVote} className="border rounded p-2">
          👎
        </button>
      </div>
    </div>
    // <div className="w-ful flex flex-col items-center p-4">
    //   <h1>{title}</h1>
    //   <img src={imgUrl} alt="y" />
    //   <p>{content}</p>
    // </div>
  )
}
