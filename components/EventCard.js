"use client";
import Image from "next/image";
export default function EventCard() {
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <Image src="/cover.jpg" alt="image" width={400} height={200} />
                <h2 className="card-title">Bixa para fulano</h2>
                <h3>30/10/2025 <span>Mes & dia</span></h3>
                <div className="card-actions justify-end">
                    <a href={"/event/1"} className="btn btn-primary">Markar presença</a>
                </div>
            </div>
        </div>
    );
}