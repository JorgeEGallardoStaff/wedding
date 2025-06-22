"use client";
import { useState } from "react";
import ImageTextCard from "../components/modules/ImageTextCard";
import ModalHearth from "../components/modules/ModalHearth";

const GiftTable = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  return (
    <div className="gift-table">
      <div className="w-full h-1/2 bg-backjumbo flex flex-col items-center justify-center text-white space-y-4 text-center p-9">
        <div className="flex items-center w-full justify-center space-x-2">
        </div>
        <p
          className="text-6xl tracking-[0.06em] text-center my-10"
          style={{ fontFamily: "vidaloka" }}
        >
          Detalles a tener en cuenta
        </p>
        <div className="flex flex-col w-full md:w-1/2  justify-center items-stretch space-y-10 py-6">
          <ImageTextCard
            title=""
            text="Información adicional para tener en cuenta"
            imageUrl="notas.svg"
            backcolor="bg-backsection"
            cardTitle="Tips y Notas"
            buttonText="Ver Info"
            action={() => setShowModal(true)}
          />
          <ModalHearth showModal={showModal} title="Recomendaciones">
            <ul className="list-disc list-inside text-xl text- px-4 text-gray-600">
              <li>
                {" "}
                Te invitamos a llegar temprano a los eventos programados ya que
                contamos con un protocolo y actividades que nos gustaría
                compartir en su totalidad con todos nuestros invitados.
              </li>

              <li>
                {" "}
                Trae contigo tus tenis favoritos para la hora de bailar y
                divertirte con comodidad.
              </li>
              <li>
                {" "}
                Te recordamos que la hora de termino del evento es a las 4am,
                nos encantaría que estuvieras presente durante toda la duración
                del mismo (tenemos muchas sorpresas).
              </li>
              <li>
                {" "}
                Si dentro de tus acompañantes se encuentran niños pequeños te
                agradeceríamos mantenerlos en calma y bajo tu supervisión
                durante la duración del protocolo para evitar accidentes.
              </li>
              <li>
                {" "}
                ¡Las fotos nos encantan! Compártelas en el código QR que se te
                proporcionará para que sean parte de nuestros recuerdos, te
                agradeceríamos cuidar y no interferir con las tomas
                profesionales del fotógrafo.
              </li>
              <li>
                {" "}
                El evento contará con bebidas para disfrutar pero también puedes
                ingresar bebidas alcohólicas de tu preferencia al evento, te
                sugerimos evitar envases de vidrio en cerveza para evitar
                accidentes.
              </li>
              <li>
                {" "}
                Los novios te asignaron un lugar especial e importante.. por
                ello todas las mesas tienen número y acomodo personal, por favor
                respeta el mismo por logística y comodidad de todos.
              </li>
              <li>
                {" "}
                Los novios tienen actividades favoritas en su vida diaria y las
                quieren compartir contigo... ¡baila, diviértete y come mucho!
              </li>
            </ul>
            <button
              onClick={() => setShowModal(false)}
              className="px-6 py-2 text-2xl my-5 bg-[#891d35] text-white font-semibold rounded-full hover:bg-[#6d182a] transition"
            >
              Aceptar
            </button>
          </ModalHearth>
          <ImageTextCard
            cardTitle="Obsequios"
            text="Si está a su disposición brindar una muestra de cariño, estaremos muy  agradecidos."
            imageUrl="regalo.svg"
            backcolor="bg-backsection"
            buttonText="Ver más"
             action={() => setShowModal2(true)}
          />
        </div>
        <ModalHearth showModal={showModal2} title="Mesas de Regalos">
               <button
  onClick={() => {
     setShowModal2(false)
    window.open('https://mesaderegalos.liverpool.com.mx/milistaderegalos/51613287', '_blank');
  }}
  className="px-6 py-2 text-4xl my-5 bg-[#891d35] text-white font-semibold rounded-full hover:bg-[#6d182a] transition"
>
  Liverpool
</button><br></br>
          <button
  onClick={() => {
     setShowModal2(false)
    window.open('https://www.sears.com.mx/Mesa-de-Regalos/181588/te-invito-a-mi-boda-deyanira-idaly-omar-orlando    ', '_blank');
  }}
  className="px-6 py-2 text-4xl my-5 bg-[#891d35] text-white font-semibold rounded-full hover:bg-[#6d182a] transition"
>
  Sears
</button>
        </ModalHearth>
      </div>
    </div>
  );
};

export default GiftTable;
