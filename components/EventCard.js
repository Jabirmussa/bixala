"use client";
import Image from "next/image";
export default function EventCard() {
    return (
        <div className="card bg-base-100 shadow-xl rounded-xl">
                <Image src="/cover.jpg" alt="image" width={400} height={200} />
            <div className="card-body p-5">
                <h2 className="card-title text-xl font-bold mb-8">Bixa para fulano</h2>
                <h3 className="text-base mb-5">30/10/2025 <span>Mes & dia</span></h3>
                <a href={"/event/1"} className="btn btn-primary">Markar presença</a>
            </div>
        </div>
    );
}