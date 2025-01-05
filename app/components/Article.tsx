import Image from "next/image";
import React from "react";

const Article = ({
  src,
  title,
  desc,
  date,
  type,
}: {
  src: string;
  title: string;
  desc: string;
  date: string;
  type: "main" | "sub";
}) => {
  if (type === "main") {
    return (
      <div>
        <div className="w-full h-72 relative">
          <Image src={src} alt="" fill />
        </div>
        <div className="py-5 space-y-2">
          <p className="text-white/50">{date}</p>
          <h3 className="text-3xl text-white font-bold">{title}</h3>
          <p className="text-xl text-white/50">{desc}</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex space-x-8">
        <div className="w-1/2 h-52 relative">
          <Image src={src} alt="" fill />
        </div>
        <div className="py-3 w-1/2 flex flex-col justify-center space-y-2">
          <p className="text-white/50">{date}</p>
          <h3 className="text-2xl text-white font-bold">{title}</h3>
        </div>
      </div>
    );
  }
};

export default Article;
