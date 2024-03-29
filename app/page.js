'use client'
import { Cards } from "@/components/Cards";
import MainForm from "@/components/MainForm";
import { MarcaBanner } from "@/components/MarcaBanner";
import { Whatsapp } from "@/components/Whatsapp";

export default function Home() {

  const handleCall = () => {
    // Número de teléfono al que se va a llamar
    const phoneNumber = "+527776002745";
    // Abrir la aplicación de teléfono para realizar una llamada
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <>
      <div className="flex flex-col items-center shadow-2xl p-3 pb-4 rounded-b-2xl absolute bg-white z-20 w-full">
        <h1 className="text-blue-lth font-bold text-2xl lg:text-4xl lg:pt-4 mb-2 lg:mb-4">¿TE QUEDASTE SIN BATERÍA?</h1>
        <p className="mb-2 text-lg lg:text-2xl lg:mb-4">No te preocupes, ¡llámanos!</p>
        <button onClick={handleCall} className="text-red-lth font-bold text-2xl lg:text-4xl lg:mb-4 cursor-pointer hover:text-blue-800 transition-all duration-150 underline">7776002745</button>
        <h2 className="lg:text-2xl lg:mb-4">Te cambiamos tu batería a domicilio</h2>
      </div>
      <MainForm />
      <MarcaBanner />
      <Cards page="landing" />


      <Whatsapp />
    </>
  );
}
