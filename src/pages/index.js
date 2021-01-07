import React from "react";
import Image from "next/image";
import { ExampleImage } from "assets/images";
import { GithubLogo } from "assets/svg";

const Home = () => {
  return (
    <div>
      <GithubLogo />
      <Image 
        src={ExampleImage} 
        width={100} 
        height={100} 
      />
    </div>
  );
};

export default Home;
