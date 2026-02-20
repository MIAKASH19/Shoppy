import React from 'react'

const ButtonGradient = ({text}) => {
    return (
        <button className="px-6 py-3 rounded-xl bg-linear-to-r from-purple-600 to-pink-600 text-white font-medium shadow-lg hover:opacity-90 transition">
            {text}
        </button>
    )
}

export default ButtonGradient