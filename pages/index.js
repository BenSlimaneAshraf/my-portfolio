import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import clsx from "clsx";
import Lottie from "react-lottie";
import Compositions from "../utils/compositions";
import useWindowSize from "../hooks/useWindowSize";

const defaultOptions = {
  loop: true,
  autoplay: true,
  // animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Home() {
  const { width } = useWindowSize();

  useEffect(() => {
    console.log(width);
  }, [width]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <p>
            <span className={styles.hello}>Hello,</span>
            <br />
            <span className={styles.myName}>I&apos;m Ashraf Ben Slimene,</span>
            <br />
            <span className={styles.jobTitle}>
              UX/UI Designer and Frontend Developer based in Tunisia.
            </span>
          </p>
          <p>
            With 6 years + of experience developping web apps in e-learning
            industries. <br /> I have extensive knowledge in Javascript and
            browser API&apos;s as well as significant experience <br /> with
            popular frameworks and libraries like React and Redux.
          </p>
          <p>
            I&apos;m ambitious, creative, curious, motivated, cooperative,
            intelligent and hardworker. <br /> Outside of programming I&apos;m
            passioned about new technologies, arts and cars.
          </p>
          <p>You can follow me on Facebook, Instagram and Youtube.</p>
        </div>

        <div className={styles.background}>
          <div className={styles.row}>
            <div className={clsx(styles.composition, styles.comp1)}>
              <Lottie
                options={{
                  ...defaultOptions,
                  animationData: Compositions.animationData1,
                }}
                height={200}
                width={200}
              />
            </div>
            <div className={clsx(styles.composition, styles.comp2)}>
              <Lottie
                options={{
                  ...defaultOptions,
                  animationData: Compositions.animationData2,
                }}
                height={200}
                width={200}
              />
            </div>
            <div className={clsx(styles.composition, styles.comp3)}>
              <Lottie
                options={{
                  ...defaultOptions,
                  animationData: Compositions.animationData3,
                }}
                height={200}
                width={200}
              />
            </div>
            <div className={clsx(styles.composition, styles.comp4)}>
              <Lottie
                options={{
                  ...defaultOptions,
                  animationData: Compositions.animationData4,
                }}
                height={200}
                width={200}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={clsx(styles.composition, styles.comp5)}>
              <Lottie
                options={{
                  ...defaultOptions,
                  animationData: Compositions.animationData5,
                }}
                height={200}
                width={200}
              />
            </div>
            <div className={clsx(styles.composition, styles.comp6)}>
              <Lottie
                options={{
                  ...defaultOptions,
                  animationData: Compositions.animationData6,
                }}
                height={200}
                width={200}
              />
            </div>
            <div className={clsx(styles.composition, styles.comp7)}>
              <Lottie
                options={{
                  ...defaultOptions,
                  animationData: Compositions.animationData7,
                }}
                height={200}
                width={200}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={clsx(styles.composition, styles.comp8)}>
              <Lottie
                options={{
                  ...defaultOptions,
                  animationData: Compositions.animationData8,
                }}
                height={200}
                width={200}
              />
            </div>
            <div className={clsx(styles.composition, styles.comp9)}>
              <Lottie
                options={{
                  ...defaultOptions,
                  animationData: Compositions.animationData9,
                }}
                height={200}
                width={200}
              />
            </div>
          </div>
          <div className={styles.row}>
            <div className={clsx(styles.composition, styles.comp10)}>
              <Lottie
                options={{
                  ...defaultOptions,
                  animationData: Compositions.animationData10,
                }}
                height={200}
                width={200}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
