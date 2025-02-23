
import Image from "next/image";
import { notFound } from "next/navigation";

import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";

import ConsumptionMethodOption from "./componennts/consumption-methd";

interface RestaurantPageProps {
  params: Promise<{ slug: string }>;
}

const RestaurantPage = async ({ params }: RestaurantPageProps) => {
  const { slug } = await params;
  const restaurant = await getRestaurantBySlug(slug,);
  if (!restaurant) {
    return notFound()
  }
  return (
    <div className=" flex h-screen flex-col items-center justify-center px-6 pt-24" style={{ backgroundImage: "url('/imag/backgraund.jpg')",  backgroundSize: "cover",backgroundPosition: "center",backgroundRepeat: "no-repeat" }}>
      {/* logo e titulo */}
      <div className="flex flex-col itens-center gap-2">
        {/* <Image src={restaurant?.avatarImageUrl} alt={restaurant?.name} width={82} height={82} /> */}
        <Image src="/imag/logo.svg" width={284} height={45} alt={"winebar"}/>

        {/* <h2 className="font-semibold">{restaurant.name}</h2> */}
      </div>
      {/* seja bem vindo */}
      <div className="pt-24 text-center space-y-2 ">
        <h3 className="text-2xl font-semiblod text-white">
          Seja Bem vindo
        </h3>
        <p className="opacity-55 text-white opacity-2">Escolha como prefere aproveitar sua refeição. Estamos aqui para oferecer praticidade e sabor em cada detalhe!
        </p>
      </div>
      <div className=" grid grid-cols-2 gap-5 pt-14">
        <ConsumptionMethodOption
          slug={slug}
          option="DINE_IN"
          buttonText="Degustar aqui"
          imageAlt="comer aqui"
          imageUrl="imag/dine_in.svg"
        />
        <ConsumptionMethodOption
          slug={slug}
          option="TAKEAWAY"
          buttonText="para levar"
          imageAlt="para viagem"
          imageUrl="imag/DrinkOut.svg"
        />
      </div>
    </div>
  )
}



export default RestaurantPage;

