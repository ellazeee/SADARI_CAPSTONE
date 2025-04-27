import React from 'react'

export const ArticleCard = () => {
  return (
    <div className="card bg-white border rounded-lg p-3 shadow-md">
        <figure>
            <img
                src="/cover-article.jpg"
                alt="Article"
                className="rounded-lg mb-2 w-full h-20"
            />
        </figure>
        <div className="card-body">
            <h3 className="text-start font-semibold text-xl">Judul</h3>
            <p className="text-start text-gray-700 text-xs">text</p>
            <div className="flex justify-end mt-2 gap-2">
                <button className="bg-pink-600 text-white text-xs py-1 px-4 rounded">
                    Edit</button>
                <button className="bg-red-600 text-white text-xs py-1 px-2 rounded">
                    Delete</button>
            </div>
        </div>
    </div>
  )
}
