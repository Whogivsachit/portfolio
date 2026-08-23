import { Icon } from '@iconify/react';
import Image from 'next/image';

export default function Header() {
    const available = true; // This should be replaced with a real check for availability

    return (
        <div className="flex flex-col items-center text-white pt-16 pb-8 mb-12 text-center bg-foreground px-4 md:px-0">
            <Image src="/images/raccoonSpin.gif" alt="Whogi" width={256} height={256} unoptimized className="w-64 h-64 rounded-full border-[12px] border-borders/50" />
            <div className="bg-borders/50 px-2 py-2 rounded-full text-sm relative -top-5 w-fit flex items-center">
                <Icon icon="icon-park-outline:dot" className={`anim-flashing size-6 ${available ? 'text-green-600' : 'text-red-600'}`} />
                {available ? 'Available For Work' : 'Not Available For Work'}
            </div>
            <h1 className="text-6xl font-bold">My name's Whogi.</h1>
            <h2 className="text-xl pt-2 text-muted">I'm a second-year computer science student and freelance web developer with a passion for coding,<br/> system administration, and raccoons. I love building clean, functional web experiences and constantly learning new<br/> things along the way.</h2>
        
            {/* Social media */}
            <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-4 w-full max-w-4xl pt-5 px-4">
                <div className="flex items-center gap-2 text-xl lg:text-2xl shrink-0">
                    <Icon icon="bxl:discord-alt" className="size-9 shrink-0" />
                    <a href="https://discordapp.com/users/202967961298927616" className="hover:text-accent">Whogi</a>
                </div>

                <div className="flex items-center gap-2 text-xl lg:text-2xl shrink-0">
                    <Icon icon="bxl:github" className="size-9 shrink-0" />
                    <a href="https://github.com/WhogiTheRaccoon" className="hover:text-accent">WhogiTheRaccoon</a>
                </div>
                <div className="flex items-center gap-2 text-xl lg:text-2xl shrink-0">
                    <Icon icon="ic:baseline-email" className="size-9 shrink-0" />
                    <a href="mailto:contact@chit.sh" className="hover:text-accent">whogi@chit.sh</a>
                </div>
                <div className="flex items-center gap-2 text-xl lg:text-2xl shrink-0">
                    <Icon icon="bxl:steam" className="size-9 shrink-0" />
                    <a href="https://steamcommunity.com/id/Whogi" className="hover:text-accent">Whogi</a>
                </div>
            </div>
        </div>
    )
}