import Image from 'next/image';
import { CustomButton } from '../../components';
import styles from './HeroSection.module.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import Wrapper from '../Wrapper';

const HeroSection = () => {
  const handleDownloadBtn = () => {
    let fileUrl = '/assets/Charles_Ejiegbu_Resume.PDF';

    // create an A tag in DOM tree
    const link = document.createElement('a');
    link.href = fileUrl;
    link.setAttribute('download', 'My_CV.pdf');

    // Append to the DOM
    document.body.appendChild(link);

    // Start download
    link.click();

    // Clean up and remove the link
    link.parentNode!.removeChild(link);
  };

  const handleContactBtn = () => {
    console.log('Yes');
  };

  return (
    <Wrapper>
      <section className={styles.container}>
        <div>
          {/* <span>Hello I&apos;m</span> */}
          <h1 className={styles.title}>Bringing Ideas To Life</h1>
          <span className={styles.description}>
            Hello, I&apos;m Charles, and I&apos;m a Fullstack Javacsript
            Developer
          </span>
        </div>
        <div className={styles.buttonWrapper}>
          <CustomButton
            title="Download CV"
            state="inactive"
            onClick={handleDownloadBtn}
          />
          <CustomButton
            title="Let's Talk"
            state="active"
            onClick={handleContactBtn}
          />
        </div>
        <div className={styles.socials}>
          <a
            href="https://www.linkedin.com/in/charles-ejiegbu-2b6644204/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/keleris32"
            target="_blank"
            rel="noreferrer noopener"
          >
            <BsGithub />
          </a>
        </div>

        <div className={styles.imageContainer}>
          <Image
            src="/images/heroSectionImg.png"
            alt="Myself"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <a href="#contact" className={styles.scrollDown}>
          Scroll Down
        </a>
      </section>
    </Wrapper>
  );
};

export default HeroSection;
