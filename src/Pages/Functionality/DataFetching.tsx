import { useEffect, useState } from "react";

interface Posts {
    userId : number,
    id: number,
    title: string,
    body: string
}


const DataFetching = () => {

    const [posts, setPosts] = useState<Posts[] | null>(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[]);

    return (
        <div>
             {
                 posts?.map(post => <div key={post.id}>
                     <h3>{post.id}</h3>
                     <h5>{post.title}</h5>
                      <p>{post.body}</p>
                 </div>)
             }
        </div>
    );
};

export default DataFetching;