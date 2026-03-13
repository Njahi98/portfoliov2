"use client"
import { GithubLogoIcon,LinkedinLogoIcon } from '@phosphor-icons/react';   

export default function Icons() {
  return (
    <div className='flex justify-center gap-6 mt-8'>
        <a 
          href="https://github.com/Njahi98" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-slate-400 transition-colors duration-300 hover:text-fuchsia-400"
        >
          <GithubLogoIcon size={32} />
        </a>
        <a 
          href="https://linkedin.com/in/oussama-njahi/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-slate-400 transition-colors duration-300 hover:text-fuchsia-400"
        >
          <LinkedinLogoIcon size={32} />
        </a>
    </div>
  )
}
