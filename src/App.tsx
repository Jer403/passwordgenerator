import { ReactNode, useEffect, useState } from "react";
import { Toggle } from "./components/Toggle";
import {
  clamp,
  generateRandomEasePassword,
  generateRandomPassword,
  generateRandomPinPassword,
} from "./utils";
import {
  BarChart2,
  CheckCircle2Icon,
  Copy,
  Hash,
  Lightbulb,
} from "lucide-react";
import { Reload } from "./components/Reload";

const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ";
const nums = "1234567890";

type Types = "random" | "ease" | "pin";

const copy = async (
  texto: string,
  setCopiado: React.Dispatch<React.SetStateAction<boolean>>
) => {
  try {
    await navigator.clipboard.writeText(texto);
    setCopiado(true);
  } catch (err) {
    console.error("Error al copiar:", err);
  }
};

function genPass(
  type: Types,
  switchNumbers: boolean,
  switchSymbols: boolean,
  switchEs: boolean,
  randomChars: number,
  easeChars: number,
  pinChars: number,
  setGen: React.Dispatch<React.SetStateAction<string>>
) {
  if (type == "random")
    setGen(generateRandomPassword(switchNumbers, switchSymbols, randomChars));
  else if (type == "ease")
    setGen(generateRandomEasePassword(switchEs, easeChars));
  else setGen(generateRandomPinPassword(pinChars));
}

function App() {
  const [type, setType] = useState<Types>("random");
  const [copied, setCopied] = useState(false);

  const [randomChars, setRandomChars] = useState(14);
  const [easeChars, setEaseChars] = useState(5);
  const [pinChars, setPinChars] = useState(6);

  const [switchNumbers, setSwitchNumbers] = useState(true);
  const [switchSymbols, setSwitchSymbols] = useState(false);
  const [switchEs, setSwitchEs] = useState(false);

  const [gen, setGen] = useState(
    generateRandomPassword(switchNumbers, switchSymbols, randomChars)
  );

  useEffect(() => {
    genPass(
      type,
      switchNumbers,
      switchSymbols,
      switchEs,
      randomChars,
      easeChars,
      pinChars,
      setGen
    );
    setCopied(false);
  }, [
    randomChars,
    easeChars,
    pinChars,
    switchNumbers,
    switchSymbols,
    type,
    switchEs,
  ]);

  return (
    <>
      <div className="w-full h-full flex items-center justify-center pt-24">
        <div className="h-fit max-w-lg bg-white shadow-lg border border-indigo-500 shadow-indigo-300 rounded-xl p-6">
          <p className="text-gray-800 select-none">Tipo de contraseña</p>
          <div className="bg-gray-100 my-2 p-3 rounded-xl flex items-center justify-around gap-2">
            <TypeButton
              id="random"
              setType={setType}
              type={type}
              children={
                <>
                  <BarChart2 className="w-5 h-5"></BarChart2>
                  <p className="text-sm">Aleatorio</p>
                </>
              }
            ></TypeButton>
            <TypeButton
              id="ease"
              setType={setType}
              type={type}
              children={
                <>
                  <Lightbulb className="w-5 h-5"></Lightbulb>
                  <p className="text-sm">Facil de recordar</p>
                </>
              }
            ></TypeButton>
            <TypeButton
              id="pin"
              setType={setType}
              type={type}
              children={
                <>
                  <Hash className="w-5 h-5"></Hash>
                  <p className="text-sm">PIN</p>
                </>
              }
            ></TypeButton>
          </div>
          <p className="mt-5 text-gray-800 select-none">Personalizacion</p>
          <CharactInput
            value={
              type == "random"
                ? randomChars
                : type == "ease"
                ? easeChars
                : pinChars
            }
            setValue={
              type == "random"
                ? setRandomChars
                : type == "ease"
                ? setEaseChars
                : setPinChars
            }
            min={type == "random" ? 5 : type == "ease" ? 3 : 4}
            max={type == "random" ? 40 : type == "ease" ? 16 : 8}
          ></CharactInput>
          <div className={`py-3 gap-4 ${type == "random" ? "flex" : "hidden"}`}>
            <div className="flex items-center justify-center gap-3">
              <p className="text-gray-900 select-none">Números</p>
              <Toggle
                checked={switchNumbers}
                onChange={() => {
                  setSwitchNumbers(!switchNumbers);
                }}
              ></Toggle>
            </div>
            <div className="flex items-center justify-center gap-3">
              <p className="text-gray-900 select-none">Símbolos</p>
              <Toggle
                checked={switchSymbols}
                onChange={() => {
                  setSwitchSymbols(!switchSymbols);
                }}
              ></Toggle>
            </div>
          </div>
          <div className={`py-3 gap-4 ${type == "ease" ? "flex" : "hidden"}`}>
            <div className="flex items-center justify-center gap-3">
              <p className="text-gray-900 select-none">Español</p>
              <Toggle
                checked={switchEs}
                onChange={() => {
                  setSwitchEs(!switchEs);
                }}
              ></Toggle>
            </div>
          </div>
          <div className="my-4">
            <p className="text-gray-800 select-none">Contraseña generada</p>
            <div className="border border-gray-300 p-4 rounded-xl flex items-center justify-center">
              {Array.from(gen).map((c) => {
                return chars.includes(c) ? (
                  <span className="text-gray-950 text-lg contents">{c}</span>
                ) : nums.includes(c) ? (
                  <span className="text-blue-600 text-lg contents">{c}</span>
                ) : (
                  <span className="text-amber-600 text-lg contents">{c}</span>
                );
              })}
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 mt-2">
            <button
              className="w-full p-2 flex items-center gap-2 justify-center select-none border border-gray-400 rounded-xl hover:shadow-gray-300 hover:scale-[101%] active:scale-[99%] shadow-md shadow-transparent transition-[box-shadow,scale]"
              onClick={() => {
                copy(gen, setCopied);
              }}
            >
              {copied ? (
                <CheckCircle2Icon className="w-5 h-5 text-green-500"></CheckCircle2Icon>
              ) : (
                <Copy className="w-5 h-5"></Copy>
              )}
              {copied ? (
                <span className="text-green-500">Copiado</span>
              ) : (
                <span className="">Copiar</span>
              )}
            </button>
            <button
              className="w-full p-2 flex gap-2 items-center justify-center select-none bg-indigo-500 hover:shadow-indigo-400 hover:scale-[101%] active:scale-[99%] shadow-md shadow-transparent transition-[box-shadow,scale] text-white rounded-xl"
              onClick={() => {
                genPass(
                  type,
                  switchNumbers,
                  switchSymbols,
                  switchEs,
                  randomChars,
                  easeChars,
                  pinChars,
                  setGen
                );
                setCopied(false);
              }}
            >
              <Reload className="w-5 h-5 text-white"></Reload>
              <span>Nueva Contraseña</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function TypeButton({
  id,
  type,
  children,
  setType,
}: {
  id: Types;
  type: Types;
  children: ReactNode;
  setType: React.Dispatch<React.SetStateAction<Types>>;
}) {
  return (
    <button
      className={`border select-none ${
        type == id ? "bg-white border-gray-300" : "hover:border-gray-300"
      }  rounded-xl p-4 py-2 flex items-center justify-center gap-2`}
      onClick={() => {
        setType(id);
      }}
    >
      {children}
    </button>
  );
}

function CharactInput({
  value,
  setValue,
  min,
  max,
}: {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  min: number;
  max: number;
}) {
  return (
    <div className="border border-gray-300 my-2 p-2 px-4 rounded-xl flex items-center justify-around gap-4">
      <p className="text-md text-gray-600 select-none">Caracteres</p>

      <input
        value={value}
        onChange={(e) => setValue(clamp(min, max, Number(e.target.value)))}
        min={min}
        max={max}
        type="range"
        className="accent-indigo-500 z-20 w-full"
      />
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(clamp(min, max, Number(e.target.value)))}
        className="border border-gray-300 p-3 flex items-center justify-center rounded-xl w-12 h-8 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none focus:outline-none focus:border-indigo-500"
        min={min}
        max={max}
      />
    </div>
  );
}

export default App;
