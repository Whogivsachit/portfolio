'use client';
import Card from "@/components/ui/Card"
import experience from "@/data/workExperience.json"

export default function WorkExperience() {
    return (
        <div className="container mx-auto text-primary mb-12">
            <div className="flex flex-row pb-4 text-left place-content-between items-center">
                <h1 className="text-4xl font-bold text-primary">Work Experience</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                { experience.map((experience, index) => (
                    <Card key={index} className={`flex flex-row gap-6 shadow-md`}>
                        <div className="flex flex-col space-y-1">
                            <div className="flex flex-col md:flex-row place-content-between">
                                <h1 className="text-2xl">{experience.position}</h1>
                                { experience.link && <a href={experience.link} className="bg-background text-primary hover:text-accent/75 hover:cursor-pointer px-2 py-1 text-sm w-fit mt-2 md:mt-0">Visit Website</a> }
                            </div>
                            <h2 className="text-xl text-muted">{experience.company} <span className="text-sm">{experience.date}</span></h2>
                            <p className="text-muted">{experience.description}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    )

}