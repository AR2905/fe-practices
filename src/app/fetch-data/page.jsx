
const page = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/posts')

    if (!res.ok) {
        return <p className="text-red-500">Failed to load posts.</p>;
    }

    const data = await res.json()

    console.log(data)
    return <>
        {
            data && data.length > 0 && (<div className="p-6">
                {data.map((item) => <li key={item.id}>{item.title}</li>)}
            </div>)
        }
    </>
}

export default page