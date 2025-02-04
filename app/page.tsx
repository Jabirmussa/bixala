'use client'
import Image from "next/image";
import EventCard from "@/components/EventCard";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Calendar } from "@/components/ui/calendar"


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
    <div>
      <div className="relative flex items-center justify-between mb-5">
         <h2 className="text-3xl font-bold mb-8">Bixas disponíveis</h2>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            const calendar = document.querySelector(".calendar");
            if (calendar) {
              calendar.classList.toggle("hidden");
            }
          }}
        >
          Ver calendário
        </button>
        <div className="hidden calendar absolute top-0 right-50 bg-white p-4 rounded-md shadow-md z-50">
          <Calendar  />
        </div>
      </div>
      <div className="grid self-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>
    </div>
    </>
  );
}
