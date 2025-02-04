import Image from "next/image";
import EventCard from "@/components/EventCard";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Home() {
  return (
    <>
    <AspectRatio ratio={16 / 9} className="bg-muted mb-10 md:mb-20">
      <Image
        src="/image.webp"
        alt="Photo by Drew Beamer"
        fill
        className="h-full w-full rounded-md object-cover"
      />
    </AspectRatio>
    <div className="grid self-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12">
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
      <EventCard />
    </div>
    </>
  );
}
