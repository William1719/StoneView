import React, { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Backend/FireBase";

export const HeroUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(""); // Nuevo estado para el número telefónico
  const [success, setSuccess] = useState("");

  const addTodo = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email }),
      });

      if (response.ok) {
        // El correo se envió exitosamente
        alert('Correo enviado correctamente');
      } else {
        // Error al enviar el correo
        alert('Hubo un error al enviar el correo');
      }

      const docRef = await addDoc(collection(db, "Contactanos"), {
        Nombre: name,
        Correo: email,
        Telefono: phone, // Añadir el número telefónico al documento
      });
      console.log("Documento escrito con ID: ", docRef.id);
      setSuccess("Mensaje enviado con éxito.");

      // Limpiar los campos después del envío exitoso
      setName("");
      setEmail("");
      setPhone("");

      // Configurar un temporizador para borrar el mensaje de éxito después de 3 segundos (3000 ms)
      setTimeout(() => {
        setSuccess("");
      }, 3000);

    } catch (e) {
      console.error("Error al añadir el documento: ", e);
      alert('Hubo un error al enviar el correo');
    }
  }

  return (
    <section className="text-gray-600 body-font h-screen bg-cover bg-center bg-[url('../../../src/assets/hero/NuestrosServicios.jpg')] ">
      <div className="container mx-auto flex lg:px-16 px-5 py-24 md:flex-row flex-col items-center h-full">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-0.5 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-50">Before they sold out
            <br className="hidden lg:inline-block text-gray-50" />readymade gluten
          </h1>
          <p className="mb-8 leading-relaxed text-gray-50">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 h-full">
          {/* aqui va el formulario */}
          <form className="flex flex-col justify-center items-center h-full">
            <input
              type="text"
              placeholder="Nombre"
              className="bg-gray-300 border-0 py-2 px-4 focus:outline-none rounded mb-4 w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Correo Electrónico"
              className="bg-gray-300 border-0 py-2 px-4 focus:outline-none rounded mb-4 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="text"
              placeholder="Número Telefónico"
              className="bg-gray-300 border-0 py-2 px-4 focus:outline-none rounded mb-4 w-full"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <button
              type="submit"
              className="inline-flex text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onClick={addTodo}
            >
              Enviar
            </button>
                   {/* Mostrar mensaje de éxito */}
          {success && (
            <p className="text-green-600">{success}</p>
          )}
          </form>
        </div>
      </div>
    </section>


  );
};



