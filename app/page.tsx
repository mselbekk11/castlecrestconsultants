import { InputWithButton } from '@/components/InputWithButton';
import Image from 'next/image';
import { Linkedin } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';

export default function Home() {
  return (
    <main className='min-h-lvh'>
      <div className='invisible lg:visible lg:h-lvh lg:grid lg:grid-cols-2'>
        <div className='invisible lg:visible bg-gradient-to-r from-[#081735] to-[#070B13] relative isolate overflow-hidden'>
          <svg
            className='absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]'
            aria-hidden='true'
          >
            <defs>
              <pattern
                id='983e3e4c-de6d-4c3f-8d64-b9761d1534cc'
                width={200}
                height={200}
                x='50%'
                y={-1}
                patternUnits='userSpaceOnUse'
              >
                <path d='M.5 200V.5H200' fill='none' />
              </pattern>
            </defs>
            <svg x='50%' y={-1} className='overflow-visible fill-gray-800/20'>
              <path
                d='M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z'
                strokeWidth={0}
              />
            </svg>
            <rect
              width='100%'
              height='100%'
              strokeWidth={0}
              fill='url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)'
            />
          </svg>
        </div>
        <div className='invisible lg:visible bg-[#fff]'></div>
      </div>

      <div className='relative lg:absolute lg:max-w-[1300px] w-full lg:top-0 lg:left-0 lg:right-0 lg:m-auto h-full flex items-center justify-center'>
        <div className='grid grid-cols lg:grid-cols-2 w-full'>
          <div className='text-white flex flex-col justify-center p-10 bg-gradient-to-r from-[#081735] to-[#070B13] lg:bg-none'>
            <Image
              className='mb-6'
              src='/cc-logo.png'
              width='70'
              height='100'
              alt=''
            />
            <h1 className='mb-6 text-2xl'>
              CastleCrest <span className='text-[#7DD3FC]'>Consultants</span>
            </h1>
            <p className='mb-6 text-[#d1d5db] text-sm lg:text-base font-light'>
              Castlecrest Consultants offer a rang of services for small and
              large projects in the global telecommunications (mobile and fixed
              line) Internet and software development industries
            </p>
            <InputWithButton />

            {/* <div className='flex flex-row text-[#fff] text-xs'>
              <div className='flex mr-4 items-center justify-center '>
                <Linkedin className='w-4 h-4 mr-2' color='#7DD3FC' />
                LinkedIn
              </div>
              <div className='flex mr-4 items-center justify-center'>
                <Mail className='w-4 h-4 mr-2' color='#7DD3FC' />
                Email
              </div>
              <div className='flex mr-4 items-center justify-center'>
                <Phone className='w-4 h-4 mr-2' color='#7DD3FC' />
                Phone
              </div>
            </div> */}

            {/* <div className='mt-4 flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start text-[#fff] text-xs'>
              <a className='flex-none group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-[#d1d5db] transition-colors hover:text-sky-300 gap-x-3'>
                <Linkedin className='w-4 h-4' color='#7DD3FC' />
                <span className='self-baseline '>Linkedin</span>
              </a>
              <a className='flex-none group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-[#d1d5db] transition-colors hover:text-sky-300 gap-x-3'>
                <Mail className='w-4 h-4' color='#7DD3FC' />
                <span className='self-baseline '>Email</span>
              </a>
              <a className='flex-none group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-[#d1d5db] transition-colors hover:text-sky-300 gap-x-3'>
                <Phone className='w-4 h-4' color='#7DD3FC' />
                <span className='self-baseline '>Phone</span>
              </a>
            </div> */}
          </div>
          <div className='p-10'>
            <div className='flex flex-col items-center'>
              <div className='bg-[#eaeaea] inline-block rounded-full mb-6 shadow-md shadow-slate-400'>
                <Image
                  className='rounded-full'
                  src='/per-circle.png'
                  width='150'
                  height='100'
                  alt=''
                />
              </div>
              <h2 className='mb-6 text-xl font-medium text-[#6d6e70]'>
                Per Selbekk
              </h2>
            </div>
            <p className='mb-6 text-[#909397] text-sm font-light leading-6'>
              Per has approximately 30 years of experience in the telecoms and
              IT industry. He has advised tier 1 telcos across the globe on new
              and innovative products and services, BSS and OSS applications,
              and customer experiences, amongst other things. He has also worked
              with several smaller start-up companies. Per was also instrumental
              in the divestiture of the Symbian development team from Nokia to
              Accenture, which involved more than 2,000 people and a 5 year
              cooperation programme between the two companies. He has, on a
              number of occasions, assessed companies on behalf of VCs/PEs in
              sales and fundraising situations.
            </p>
            <p className='mb-6 text-[#909397] text-sm font-light leading-6'>
              As a VP at Nokia Per was responsible for the development of the
              Symbian Operating System. He managing over 2,000 staff in more
              than 15 locations across the globe. Prior to this, he was IT
              Development Director at the mobile operator Three UK for 4 years.
              At Three he contributed to state-of-the-art BSS/OSS solutions,
              which built on many best-in-class applications, and scaled the
              company’s IT infrastructure ahead of rapid customer growth.
            </p>
            <p className='mb-6 text-[#909397] text-sm font-light leading-6'>
              He has previously held European CIO roles for telecoms provider
              Carrier1 and UUnet as well as positions in management consulting
              including assisting new ISPs launch their new services in the
              ‘90s. The most prominent of those launches was BluFin (Swisscom).
              Per has an MBA from Oslo Business School and an MIM from
              Thunderbird School of Global Management, Arizona.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
