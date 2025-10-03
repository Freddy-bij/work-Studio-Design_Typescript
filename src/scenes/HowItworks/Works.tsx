import type { CardsType } from "../shares/types"




const Cards:Array<CardsType> = [
   {
    "number":1,
    "title":" Share your designs",
    "description":"Sample text. Click to select the text box. Click again or double click to start editing the text.",
    "btn":"More"
   },
      {
    "number":2,
    "title":" Development",
    "description":"Sample text. Click to select the text box. Click again or double click to start editing the text.",
    "btn":"More"
   },
      {
    "number":3,
    "title":" Provide feedback",
    "description":"Sample text. Click to select the text box. Click again or double click to start editing the text.",
    "btn":"More"
   },
      {
    "number":4,
    "title":"Launch website",
    "description":"Sample text. Click to select the text box. Click again or double click to start editing the text.",
    "btn":"More"
   }
]

const Works = () => {
  return (
    <div className="bg-linear-to-r from-violet-400 to-red-300 ">
      <div className="w-7xl mx-auto py-10">
        <h1 className="text-center text-4xl text-red-600 font-bold"> How it works</h1>
        <p className="text-gray-500 text-center py-2"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
        <div className="flex gap-7 my-7">
          {Cards.map(card =>(
              <div className="bg-white">
                <div>
                  {card.number} 
                </div>
                <h1>{card.title}</h1>
                <p>{card.description}</p>
                <button>{card.btn}</button>
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Works