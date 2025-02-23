import { ConsumptionMethod } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ConsumptionMethodOptionProps {
    slug: string;
    imageUrl: string;
    imageAlt: string;
    buttonText: string;
    option: ConsumptionMethod;
}

const ConsumptionMethodOption = ({imageUrl,imageAlt,buttonText, option , slug}: ConsumptionMethodOptionProps) =>{
    return(
        <Card>
            <CardContent className="flex flex-col items-center gap-9 py-8">
            <div className="relative h-[190px] w-[90px]">
            <Image src={imageUrl} fill alt={imageAlt} className="object-contain"/>
            </div>
            <Button variant="outline" className="rounded-full bg-[#6D031C] text-white border-[#550707]">
                <Link href={`${slug}/menu?consumptionMethod=${option}`}>{buttonText}</Link> 
            </Button>
            </CardContent>
      </Card>
    );
}

export default ConsumptionMethodOption;