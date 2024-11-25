
function Services() {
    const data = [
        {
            title: 'UI/UX Design',
            text: "Get the best modern products design and perfect user-friendly Prototyping of your project. let's turn your dream idea into reality"
        },
        {
            title: 'Project Management',
            text: "Get the best modern products design and perfect user-friendly Prototyping of your project. let's turn your dream idea into reality"
        },
    ]
    
  return (
    <div className="pad1 w-full bg-main-color flex items-center justify-center">

        <div className="flex flex-col mt-20 gap-8 mb-20 justify-center items-center w-[65%] tablet:w-[95%]">
            <h1 className="text-[#FF8F0F] text-[36px] font-extrabold">Our Services</h1>

            {/**SWIPER */}
            <div className="flex items-center gap-12 mt-8 mb-8 flex-wrap justify-center">
                {
                    data.map((item, idx) => (
                        <div className="w-[468px] h-[480px] phone:w-[98%] bg-[#3E4149] flex flex-col px-8 py-10 items-center justify-between rounded-[30px]">
                            <h2 className="text-[25px] font-extrabold text-white text-center">{item.title}</h2>

                            <h3 className="text-white text-[20px] font-semibold text-center">{item?.text}</h3>
                        
                            <div className="">
                                <button className='bg-[#FF8F0F] text-white rounded-[15px] py-2 px-6 flex items-center justify-center hover:shadow-2xl cursor-pointer font-medium text-[30px] tablet:text-[24px]'>
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
      
    </div>
  )
}

export default Services
