import Image from "next/image";
import Plus from "@/assets/plus-button.png"


export function BotaoNovaPub () {

    return (
        <>
            <section>
                <button onClick={"função aqui"}>
                    <div className=" flex items-center justify-between bg-pool-green p-[10px] rounded-[10px] border-[3px] border-ligther-green hover:bg-lighter-green hover:border-pool-green text-[20px] text-white font-black ml-[20px] hover:text-darker-purple">
                        <div>
                            <Image className=" w-[40px]"
                            src={ Plus }
                            ></Image>
                        </div>
                        <div className=" ml-[10px]">
                            <p>Criar publicação</p>
                        </div>
                    </div>
                </button>
            </section>
        </>
    )
}