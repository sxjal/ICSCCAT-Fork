import Link from "next/link";
import Image from "next/image";
import CountdownTimer from "./CountdownTimer";
import bg from "@/public/hero-bg.jpg";
import icsccatLogo from "@/public/icsccat.png";
import icsccatLogotransparent from "@/public/icsccatlogo.png";
import styles from './AddressCard.module.css';
import './CountdownTimer.css';
export default function HeroSection() {
  const THREE_DAYS_IN_MS = 236* 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  return (
    <>
      <section
        className="bg-no-repeat bg-cover relative"
        id="hero"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(233, 233, 245, 0.7), rgba(233, 233, 245, 0.8)), url(${bg.src})`,
        }}
      >
        <div className="container relative flex flex-col-reverse md:flex-row justify-center items-start px-6 mx-auto pt-12 space-y-0 md:justify-start">
          <div className="flex flex-col mb-20 mx-auto items-center">
            <div className="flex flex-col items-center mb-2">
              {/* <Image
                className="w-32 md:w-64 mb-4 p-4 rounded-lg shadow-md flex items-center object-contain"
                src={icsccatLogotransparent}
                width={256}
                quality={100}
                priority
              /> */}
              <div className="flex flex-col mx-auto md:mx-0">
                <p className="text-2xl text-center md:text-3xl">
                  1<sup>st</sup> International Conference
                </p>
                <p className="text-center text-lg text-black md:text-xl my-4">
                  on
                </p>
                <h1 className="text-center font-bold text-4xl text-black md:text-5xl my-4">
                  "Pioneering Developments in Computer Science <br/> 
                  & Digital Technologies"
                  {/* "Emerging Technologies in Computer Science & Digital World" */}
                  {/* "Emerging Frontiers in Computer Science & Digital Technologies" */}
                </h1>
                <p className="text-center text-lg text-black md:text-2xl mt-4 mb-4">
                  26<sup>th</sup> - 28<sup>th</sup> April, 2024
                </p>
                <p className="text-2xl text-center md:text-3xl">
                    Coming Soon
                </p>
              </div>
            </div>
            <div className="flex pt-6 justify-center">
                <CountdownTimer targetDate={dateTimeAfterThreeDays} /> {/* Use the CountdownTimer component here */}
            </div>
            {/* <div className="flex pt-8 justify-center">
              <Link href="/register"
                  className="p-3 pt-3 text-xl uppercase text-primary05 bg-gray-400 rounded-full baseline md:block px-6 disabled">Registration Closed
              </Link>
            </div> */}
          </div>
        </div>
          <div className={styles.addressCard}>
            <h2 className={styles.addressTitle}>Venue</h2>
            <div className={styles.addressDetails}>
              <p className={styles.addressText}>
                Department of Computer Science & Engineering<br />
                Administrative Block, National Institute of Technology Delhi <br />
                Plot No. FA7, Zone, P1, GT Karnal Road, Delhi, 110036
              </p>
            </div>
          </div><br />
      </section>
    </>
  );
}
