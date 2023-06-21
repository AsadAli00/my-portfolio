import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Artificial Intelligence Engineer | AWS Sagemaker (ML) | FULL Stack Developer"],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 5,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Asad Ali</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        I am a passionate and dedicated [ Artificail Intelligence | AWS ML | Frontend & backend] 
        developer with 2+ years of experience in Python, Machine learning & Deep learning,
         tensorflow, scikit learn, pandas, numpy, reactjs, nodejs , mongoDB, Expressjs, react native, django ,
          flask and so on . I have a strong background in Artificial Inteligence,currently enrolled Master in AI.
           My goal is to create efficient and scalable solutions that solve real-world problems.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner