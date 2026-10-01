'use client'

const page = () => {
    return <>
        <div className="container w-full relative ">
            <div className="box w-2xl mx-auto h-24 bg-red-400 flex relative">
                <div className="item flex justify-center items-center border-1 border-blue-800 flex-1">1</div>
                <div className="item flex justify-center items-center border-1 border-blue-800 flex-1">2</div>
                <div className="item flex justify-center items-center border-1 border-blue-800 flex-1">3</div>
                <div className="item flex justify-center items-center border-1 border-blue-800 flex-1">4</div>

                <div className="box w-1/4 absolute -bottom-16"
                    style={{
                        transform: 'translateX(100%)'
                    }}>
                    <div className="box h-8 w-8 bg-red-600 font-bold text-lg text-center rounded-md text-white border-green-400 border-2"

                    >
                        F
                    </div>
                </div>

            </div>



        </div>
    </>
}

export default page;