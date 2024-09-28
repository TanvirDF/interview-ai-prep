export default function Post({ params }:{params:{postId:string}}) { 
    return (
        <div>
            <h1>Post with an {params.postId}</h1>
        </div>
    );
}  