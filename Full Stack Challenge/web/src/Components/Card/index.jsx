export const Card = (timeA, timeB, match) => (

    <div className="flex flex-col justify-center space-y-6 border border-grey-300 px-2 sm:px-20 md:px-40 lg: py-5 rounded-xl">
                            
                        <div className="flex flex-row justify-center">
                            <span className=" text-grey-700 font-bold">{match.time}</span>
                        </div>
                            
                        <div className="flex space-x-6 justify-center items-center">

                            <span className="uppercase font-bold">{timeA.slug}</span>
                            <img src={`./src/assets/assets-natrave/bandeiras/${timeA.slug}.png`} alt="bandeira do time" />

                            <input className="text-white font-bold text-center bg-red-500/[0.3] w-[45px] h-[35px]" type="number"></input>
                            <span className='text-red-500 font-bold'> X </span>
                            <input className="text-white font-bold text-center bg-red-500/[0.3] w-[45px] h-[35px]" type="number"></input>
                               
                            <span className="uppercase font-bold">{timeB.slug}</span>
                            <img src={`./src/assets/assets-natrave/bandeiras/${timeB.slug}.png`} alt="bandeira do time" />

                        </div>
                    </div>
)