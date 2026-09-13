import Header from '@/components/Header';
import { Icon } from '@iconify/react';
import { fetchAllPosts } from "@/lib/posts";
import Link from 'next/link';

export default function Home() {
    const posts = fetchAllPosts();
    posts.sort((a, b) => b.date.localeCompare(a.date));
    const hasPosts = posts.length > 0;

        return (
            <>
            <Header>
                <h1 className="text-5xl font-bold">Welcome to my blog</h1>
                <h2 className="text-xl pt-2 text-muted">I post my thoughts and opinions on a diverse range of topics from<br /> Gaming, Coding,
                System Administration and more.</h2>
            </Header>

            <div className="container mx-auto">
                <div className="flex flex-col gap-2">
                    {!hasPosts && (
                        <div className="text-center">
                            <h2 className="text-primary text-4xl font-bold">No posts found</h2>
                            <p className="text-muted">Looks like I haven't written anything yet. Check back later!</p>
                        </div>
                    )}

                    {posts.map((post) => (
                        <Link href={`/blog/${post.id}`} key={post.id} className="bg-foreground rounded-lg p-4 mb-4 anim-up">
                            <h2 className="text-primary text-2xl font-bold">{post.title}</h2>
                            <p className="text-muted">{post.description}</p>
                            <div className="flex flex-row flex-wrap gap-3 md:gap-6 text-muted pt-2">
                                <span className="flex items-center gap-2"><Icon icon="mdi:calendar" />{post.date}</span>
                                <span className="flex items-center gap-2"><Icon icon="mdi:clock-outline" /> {post.ttr} Minute Read</span>
                                <span className="flex items-center gap-2"><Icon icon="mdi:person" /> {post.author}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            </>
        )

}