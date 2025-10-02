import HText from "../shares/HText"


type Props = {
    title:string,
    description:string
    subt:string
}

const DesigStudio = ({title , description,subt}: Props) => {
  return (
    <div className="bg-[url(./src/images/bg1.png)] h-[704px] bg-no-repeat">

      
          <div className="w-7xl mx-auto flex  gap-10 ">
        <div className=" h-180 items-center flex">
            <img src="./src/images/imgBg.png" alt="" className="" />
        </div>
          
        <div className="py-40 mx-4">
          <div className="border-red-500/100 border-b-3 w-20 mb-3"></div>
            <h1 className="text-red-500/100 font-medium text-7xl w-30 pb-5">{title} {" "} <span>{subt} </span></h1>
            <p className="py-2 font-medium ">{description}</p>
            <p className="py-6">Image from <span className="underline underline-offset-3 hover:text-red-400">freepik</span></p>
           
           <div>
             <HText>Contact Us</HText>
            </div>
        </div>
    </div>
      </div>

  
    
    
  )
}

export default DesigStudio