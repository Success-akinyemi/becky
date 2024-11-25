import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { GrTwitter } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import ProfileImg from '../assets/becky.png'

function Hero() {

    const [text] = useTypewriter({
        words: ['UI/UX Designer and Project Manager'],
        loop: {},
        typeSpeed: 90,
        deleteSpeed: 80,
    });

    const links = [
        {
            icon: GrTwitter,
            link: ''
        },
        {
            icon: AiFillInstagram,
            link: ''
        },
        {
            icon: BsLinkedin,
            link: ''
        },
        {
            icon: FaFacebook,
            link: ''
        }
    ]
  return (
    <div className="w-full min-h-[100vh] bg-main-color pad1 flex items-center justify-between gap-12 tablet:flex-col tablet:py-20">
      {/**LEFT SIDE */}
      <div className="flex flex-1 flex-col gap-12 tablet:w-full">
        <div className="flex flex-col gap-4">
            <h2 className="font-extrabold text-[37px] tablet:text-[24px] text-white">Hello It’s Me</h2>
            <h1 className="text-[47px] tablet:text-[30px] text-white font-bold">Rebecca Olawumi Owolawase</h1>
            <h2 className="flex items-center phone:flex-col phone:items-start text-[24px] tablet:text-[16px] font-extrabold text-white gap-2 w-fit">
                And I’m a 
                <span className='text-[26px] tablet:text-[17px]  text-[#FF8F0F]'>
                    {text}
                    <Cursor cursorColor='#FF8F0F' cursorStyle='' />
                </span>
            </h2>

        </div>

        <div className="flex flex-col gap-7">

            <div className="flex items-center gap-[3rem] tablet:gap-[2rem]">
                {
                    links.map((item, idx) => {
                        const Icon = item.icon

                        return (
                            <a href={item?.link} key={idx} target='_blank'>
                                <Icon className='text-[#FF8F0F] text-[28px] tablet:text-[21px] hover:text-white duration-300' />
                            </a>
                        )
                    })
                }
            </div>

        </div>

        <div className="">
            <button className='bg-[#FF8F0F] text-white rounded-[15px] py-2 px-6 flex items-center justify-center hover:shadow-2xl cursor-pointer font-medium text-[30px] tablet:text-[24px]'>
                View CV
            </button>
        </div>

      </div>
      
      {/**RIGHT SIDE */}
      <div className="flex flex-1 items-center justify-center">
        <div className="relative w-[425px] h-[435px] tablet:w-[325px] tablet:h-[335px] phone:w-[225px] phone:h-[235px] rounded-bl-[173px] tablet:rounded-bl-[140px] phone:rounded-bl-[110px] bg-[#FF8F0F]">

            <div className="absolute top-8 right-10 w-[425px] h-[435px] tablet:w-[325px] tablet:h-[335px] phone:w-[225px] phone:h-[235px] rounded-bl-[173px] tablet:rounded-bl-[140px] phone:rounded-bl-[110px] bg-[#d9d9d9] overflow-hidden">
                <img src={ProfileImg} alt='Rebecca Olawumi Owolawase' className='absolute right-0 bottom-0' />
            </div>

        </div>
      </div>
    </div>
  )
}

export default Hero