import { useState } from "react"
import { useLoaderData} from "react-router-dom"
import Dragon from "./Dragon"



export default function DragonNews() {
   const {data} = useLoaderData()
  return (
    <div>
        <p className="text-DarkCharcoal text-xl font-semibold mb-5">Dragon News Home</p>
        <div>
            {
                data.map(news=><Dragon news={news} key={news._id}></Dragon>)
            }
        </div>
    </div>
  )
}
