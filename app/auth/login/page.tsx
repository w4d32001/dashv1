import React from "react";
import SignIn from "../components/Sign-in/SignIn";
import Link from "next/link";

export default function page() {
  return (
    <div className="bg-gray-900 dark:bg-secondary-500 rounded-lg p-8 text-gray-100 dark:text-gray-900 text-sm min-w-80">
      <div>
        <h2 className="text-gray-100 text-3xl uppercase tracking-[5px] font-bold text-center mb-4">Iniciar <span  className="text-primary">sesión</span></h2>
      </div>
      <SignIn />
      <div className="mt-8 flex items-center">
        <button className="bg-primary/70 text-gray-100 rounded-lg w-full py-2 text-xl hover:bg-primary transition-colors">Ingresar</button>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        <span className="text-gray-100 text-sm text-center block">Aun no tiene una cuenta? <Link href="" className="text-primary hover:underline hover:cursor-pointer transition-all">registrate</Link></span>
        <span className="text-gray-100 text-sm text-center block">Has olvidado tu contraseña? <Link href="" className="text-primary hover:underline hover:cursor-pointer transition-all">click aqui</Link></span>
      </div>
    </div>
  );
}
