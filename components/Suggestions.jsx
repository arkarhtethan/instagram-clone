import React, { useEffect, useState } from 'react'
import * as faker from 'faker'

const Suggestions = () => {
  const [suggestions, setSuggestions] = useState([])
  useEffect(() => {
    const suggestions = [...Array(5)].map((_, index) => ({
      ...faker.helpers.contextualCard(),
      id: index,
    }))
    setSuggestions(suggestions)
  }, [])

  return (
    <div className="mt-4 ml-10">
      <div className="mb-5 flex justify-between text-sm">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="font-semibold text-gray-600">See All</button>
      </div>
      {suggestions.map((suggestion) => (
        <div
          key={suggestion.id}
          className="mt-3 flex items-center justify-between"
        >
          <img
            className="h-10 w-10 rounded-full border p-[2px]"
            src={'https://robohash.org/set_set3/bgset_bg1/JNth88PrhGDhwp4LNQMt'}
            alt={suggestion.username}
          />
          <div className="ml-4 flex-1">
            <h2 className="text-sm font-semibold">{suggestion.username}</h2>
            <h3 className="text-xs text-gray-400">
              Works at {suggestion.company.name}
            </h3>
          </div>
          <button className="text-blue-400">Follow</button>
        </div>
      ))}
    </div>
  )
}

export default Suggestions
