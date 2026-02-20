import React from 'react'

const ButtonFilled = ({text}) => {
    return (
        <button
            className="px-6 py-3 rounded-lg bg-white text-blue-600 font-medium shadow-lg hover:shadow-xl hover:bg-gray-100 transition"
        >
            {text}
        </button>
    )
}

export default ButtonFilled