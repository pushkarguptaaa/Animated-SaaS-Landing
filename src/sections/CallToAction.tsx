import ArrowRight from "../assets/arrow-right.svg"
import starImage from "../assets/star.png"
import springImage from "../assets/spring.png"
import Image from "next/image";

export const CallToAction = () => {
  return <section className="bg-gradient-to-b from-white to-[rgb(210,220,255)] py-24 overflow-x-clip">
    <div className="container">
      <div className="section-heading relative">
        <h2 className="section-title">Sign up for free today</h2>
        <p className="section-description mt-5">Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
        <Image src={starImage} alt="Star image" width={360} className="hidden md:block absolute -left-[350px] -top-[137px]"/>
        <Image src={springImage} alt="Spring image" width={360} className="hidden md:block absolute -right-[331px] -top-[19px]"/>
      </div>
      

      <div className="flex justify-center gap-2 mt-10">
        <button className="btn btn-primary">Get for free</button>
        <button className="btn btn-text gap-1">
          <span>Learn More</span>
          <ArrowRight className="h-5 w-5"/>
        </button>
      </div>
    </div>
  </section>
};
