import React from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import '../style/startup-section-style.scss'
import { gsap } from 'gsap';
import { BlueCircle, OrangeMatrix } from '../../../components/theme/theme-component';
import { StaticImage } from 'gatsby-plugin-image';

const StartupSection = () => {
  const {t} = useTranslation()

  React.useEffect(() => {
    gsap.from('.circle-animation-ctn', {
      scale: 0.5,
      opacity: 0.5,
      scrollTrigger: {
        trigger: '.circle-animation-ctn',
        scrub: 1,
        start: "top 100%",
        end: 'top 70%',
      }
    })
  }, [])

  return (
    <section className="section-ctn">
      <div className="theme-ctn startup-theme-ctn">
        <OrangeMatrix className="orange-matrix"/>
        <BlueCircle className="theme-circle"/>
      </div>
      <div className="ctn startup-section-ctn">
        <div className="circle-animation-ctn">
          <div className="circle-tag-main-ctn">
            <div className="circle">
              <StaticImage
                src="../../../images/home/cut-costs.png"
                alt="Cut costs dollar sign"
                placeholder="none"
                loading="lazy"
              />
            </div>
            <div className="tag-ctn tag1">
              <h3>your<br/>idea</h3>
            </div>
            <div className="tag-ctn tag2">
              <h3>concept</h3>
            </div>
            <div className="tag-ctn tag3">
              <h3>proof of<br/>principle</h3>
            </div>
            <div className="tag-ctn tag4">
              <h3>proof of<br/>concept</h3>
            </div>
            <div className="tag-ctn tag5">
              <h3>MVP</h3>
            </div>
            <div className="tag-ctn tag6">
              <h3>support</h3>
            </div>
          </div>
        </div>
        <div className="text-ctn">
          <span className="section-label">{t`home.steps_label`}</span>
          <h2>Turning startup ideas into successful applications</h2>
          <p>
            Our software house is dedicated to helping startups succeed. We offer technical support and ongoing guidance to help startups navigate the challenges of building and growing a successful business. Our team of skilled developers has a track record of helping startups create MVP projects that demonstrate the viability and potential of their ideas.
<br/>
<br/>
            In addition to providing technical support, we work closely with our clients to understand their goals and develop custom software solutions that meet their needs. We are committed to being a valuable partner to our clients and helping them succeed.
          </p>
        </div>
      </div>
    </section>
  );
}

export default StartupSection;
