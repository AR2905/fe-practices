'use client'

import { useState } from "react"

const QnA = [
    {
        question: 'question 1',
        answer: 'answer 1'
    },
    {
        question: 'question 2',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cumque sint dicta unde suscipit? In atque, obcaecati cupiditate nemo exercitationem aperiam quisquam dolorem unde quo ullam blanditiis libero itaque architecto?'
    },
    {
        question: 'question 3',
        answer: 'answer 3'
    },
    {
        question: 'question 4',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam cumque sint dicta unde suscipit? In atque, obcaecati cupiditate nemo exercitationem aperiam quisquam dolorem unde quo ullam blanditiis libero itaque architecto?'
    },
]

const Page = () => {
    const [open, setOpen] = useState(null)

    const toggleOpen = (index) => {
        setOpen(open === index ? null : index)
    }

    return (
        <div className="max-w-xl mx-auto w-full p-4">
            <div className="flex flex-col gap-4">
                {QnA.map((item, index) => (
                    <div key={index} className=" border rounded-lg p-4 shadow-sm">
                        <button
                            onClick={() => toggleOpen(index)}
                            className="flex justify-between cursor-pointer items-center w-full font-medium text-left"
                        >
                            <span>{item.question}</span>
                            <span className={`transform transition-transform duration-300 ${open === index ? 'rotate-45' : ''}`}>
                                +
                            </span>
                        </button>

                        {/* Smooth Transition Container */}
                        <div
                            className={`grid transition-all duration-300 ease-in-out ${open === index ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0 mt-0'
                                }`}
                        >
                            <div className="overflow-hidden">
                                <div className="text-gray-600 text-sm border-t pt-2">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Page