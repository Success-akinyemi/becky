
function About() {
  return (
    <div className="pad1 w-full bg-[#3E4149] flex items-center justify-center">

        <div className="flex flex-col mt-20 gap-8 mb-20 justify-center items-center w-[65%] tablet:w-[95%]">
            <h1 className="text-[#FF8F0F] text-[36px] tablet:text-[28px] font-extrabold">About Me</h1>

            <h2 className="text-white text-[30px] tablet:text-[24px] font-semibold">UI/UI Designer and Project Manager</h2>

            <p className="text-white text-[24px] tablet:text-[18px] font-medium">
                As a creative problem solver, I’m passionate about crafting good user experience 
                that delight and inspire. With strong foundation in design principles and project management
                I excel in collaborative environments, driving projects from concept to launch
            </p>

            <div className="mr-auto mt-8">
                <button className='bg-[#FF8F0F] text-white rounded-[15px] py-2 px-6 flex items-center justify-center hover:shadow-2xl cursor-pointer font-medium text-[30px] tablet:text-[24px]'>
                    View CV
                </button>
            </div>
        </div>
      
    </div>
  )
}

export default About
