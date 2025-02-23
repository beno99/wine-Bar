import { db } from "@/lib/prisma";


interface RestaurantMenuPage {
    params: Promise<{slug:string}>
}

    const RestaurantMenuPage = async ({params}: RestaurantMenuPage) =>{
        const {slug} = await params;
        const restaurant = await db.restaurant.findUnique({ where: { slug } });
        return(<h1>{slug}</h1>);
    }