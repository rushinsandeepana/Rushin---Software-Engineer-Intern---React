import React from 'react'
import Header from '../Components/Header'
import BelowHeader from '../Components/BelowHeader'
import BackgroundCarousel from '../Components/Carousel'


function OpenPage() {
  return (
    <div>
      <Header />
      <BelowHeader />
      {/* <Carousel /> */} 
      
      <BackgroundCarousel />
      <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center flex-col">
        <div className="text-5xl font-medium text-white">Extensive and events space</div>
        <div className="text-xl font-medium text-white mt-3">Discover a large and versatile event space in Sri Lanka</div>
        <div className='absolute right-48 bottom-32 text-white text-lg font-semibold'>
          <a href='#'>Discover more</a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center mt-48 top-96">
        
        {/* <h1 className="text-4xl font-bold text-white">Your Content Goes Here</h1> */}
        <div class="flex flex-row bg-slate-500 w-4/5 h-3/6 gap-2 p-2 ">

  <div class="basis-5/12 bg-blue-100 justify-center  grid grid-cols-2 gap-1">
  <div className='flex flex-row pt-4 pl-2 bg-white'>
    
    <div className=' basis-1/4'>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
  </svg>
  </div>
  <div class="text-base text-gray-900 dark:text- right-4 basis-/4">10 jun 2021</div>
    </div>
  <div className='pt-4 bg-white pl-14'>11 Jun 2021</div>
    </div>
    
  <div class="basis-1/4 bg-white pt-5 pl-2 flex flex-row">
    <div>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>
</div>
    <div className='ml-3'>1 Room, 1 Adult, 0 Children</div>
    </div>
    
  <div class="basis-1/4 bg-white  flex flex-row">
    <div className='pt-5 pl-2'>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
</svg>
    </div>
    <div className='pt-3 pl-3'>
    <input type="text" class=" rounded p-2 placeholder-gray-500" placeholder="Enter your text..." />

    </div>
    </div>
  <div class="basis-1/12 ">
  <button class="bg-yellow-700 hover:bg-yellow-900 text-white font-bold py-2 px-4 rounded w-full h-full">
  Search
</button>
    </div>
</div>
      </div>
    </div>
  )
}

export default OpenPage
