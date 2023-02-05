
import { useSession, signOut, signIn } from 'next-auth/react';

const saveTitle = async (title) => {
    const mutation = [
        {
            create: {
                _type: 'hunter',
                title: title,
                name: title
            }
        }
    ]

    const url = `http://1q0xyy8m.api.sanity.io/v2023-02-05/data/mutate/production`;

    const response = await fetch(url, {
        method: 'post',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${process.env.SANITY_WRITE_TOKEN}`,
        },
        body: JSON.stringify({mutation}),
    });

    const result = await response.json();
}

const Profilepic = () => {
    const {data:session} = useSession();

    if(!session) return (
        <button onClick={() => signIn()} className=" border-2 h-10 mt-4 px-4 rounded-lg border-red-700 text-red-700 hover:text-black hover:bg-red-700 transition-all font-bold">Log in</button>
    );

    return (
        <div className=' bg-red-700 rounded-full my-4 p-[2px]'>
            <img onClick={() => saveTitle('test')} src={session?.user?.image} alt="" className=' w-12 rounded-full'/>
        </div>
    )
}

export default Profilepic