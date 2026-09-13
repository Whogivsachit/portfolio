import Header from '@/components/Header';
import { Icon } from '@iconify/react';
import { fetchOne } from "@/lib/posts";

export default async function Home({params}: any) {
    const { slug } = await params;
    const post = fetchOne(slug);
    
    return (
        <>
        <Header>
            <h1 className="text-5xl font-bold">{post.title}</h1>
            <h2 className="text-xl pt-2 text-muted">{post.description}</h2>
        </Header>

        <div className="container mx-auto">
            <div className="flex flex-col text-primary px-4 md:px-0">
                <div className="flex flex-row flex-wrap gap-3 md:gap-6 text-muted pt-2 place-content-between">
                    <span className="flex items-center gap-2"><Icon icon="mdi:calendar" />{post.date}</span>
                    <span className="flex items-center gap-2"><Icon icon="mdi:clock-outline" /> {post.ttr} Minute Read</span>
                    <span className="flex items-center gap-2"><Icon icon="mdi:person" /> {post.author}</span>
                </div>
              <main className={`w-full py-4 text-primary bg-foreground rounded-md p-5 mt-3`}>
                <article className={`prose dark:prose-invert max-w-none pt-2`} dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
                <div className="border-t border-borders mt-5 pt-2">
                    <span className="flex items-center gap-2"><Icon icon="mdi:clock-outline" /> Last Updated On {post.date}</span>
                </div>
              </main>
            </div>
        </div>
        </>
    )
}