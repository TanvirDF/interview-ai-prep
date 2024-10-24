
'use client';

import Link from 'next/link';

const NewPostButton = () => {
    return (
        <>
        <Link href='/posts/new' className='btn'>New post</Link>
        </>
    );
};

export default NewPostButton;