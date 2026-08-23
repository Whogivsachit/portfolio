import Card from '@/components/ui/Card';
import { Icon } from '@iconify/react';
import technologies from '@/data/technologies.json';

export default function Stacks() {
    return (
        <div className="container mx-auto text-white mb-12">
            <h1 className="text-4xl font-bold text-white text-left">Technologies</h1>
            <h2 className="text-lg text-muted pb-4 text-left">Over the years, I have worked with a variety of technologies. Here are some of the featured technologies I have experience with:</h2>
            
            <h1 className="text-muted text-2xl py-2">Backend</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2">
                {technologies.backend.map((tech) => (
                    <Card key={tech.name} className="flex flex-row items-center gap-2 text-sm md:text-base min-w-0 overflow-hidden">
                        <div className="rounded-lg shrink-0" style={{ backgroundColor: `${tech.color}20` }}>
                            <Icon icon={tech.image} className="size-10 md:size-12 p-2" />
                        </div>
                        <span className="truncate">{tech.name}</span>
                    </Card>
                ))}
            </div> 

            <h1 className="text-muted text-2xl py-2">Frontend</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2">
                {technologies.frontend.map((tech) => (
                    <Card key={tech.name} className="flex flex-row items-center gap-2 text-sm md:text-base min-w-0 overflow-hidden">
                        <div className="rounded-lg shrink-0" style={{ backgroundColor: `${tech.color}20` }}>
                            <Icon icon={tech.image} className="size-10 md:size-12 p-2" />
                        </div>
                        <span className="truncate">{tech.name}</span>
                    </Card>
                ))}
            </div> 

            <h1 className="text-muted text-2xl py-2">Tools</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2">
                {technologies.tools.map((tech) => (
                    <Card key={tech.name} className="flex flex-row items-center gap-2 text-sm md:text-base min-w-0 overflow-hidden">
                        <div className="rounded-lg shrink-0" style={{ backgroundColor: `${tech.color}20` }}>
                            <Icon icon={tech.image} className="size-10 md:size-12 p-2" />
                        </div>
                        <span className="truncate">{tech.name}</span>
                    </Card>
                ))}
            </div> 
        </div>
    )
}