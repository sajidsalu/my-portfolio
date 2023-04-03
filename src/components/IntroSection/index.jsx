import File from "../../file/resume_sajid_m.pdf";
const IntroSection = () => {
  return (
    <section class="resume-section" id="about">
      <div class="resume-section-content">
        <h1 class="mb-0">
          Saj
          <span class="text-primary">ID.M</span>
        </h1>
        <div class="subheading mb-5">
          Quilon .KERALA. INDIA(91) 9656-889173 ·
          <a href="mailto:name@email.com">sajidprimero@gmail.com</a>
        </div>
        <p class="lead mb-5">
          <ul>
            <li>
              Experienced{" "}
              <b>
                <u>Android Application Developer</u>{" "}
              </b>
              with <b>5</b> years of experience designing and developing
              high-quality mobile applications for Android devices.
            </li>

            <li>
              Skilled in various aspects of Android application development,
              including user interface design, coding, testing, debugging, and
              deployment
            </li>

            <li>
              Proficient in programming languages such as{" "}
              <b>Java ,JavaScript,Dart</b>, and frameworks such as
              <b> React JS, React Native and Flutter,</b> and familiar with{" "}
              <b>Android Studio,Visual Studio Code, Git,Bit Bucket,JIRA</b> and
              other relevant tools.
            </li>
          </ul>
        </p>
        <div class="social-icons">
          <a
            class="social-icon"
            href="https://www.linkedin.com/in/sajid-m-5429a5175/"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a class="social-icon" href="https://github.com/sajidsalu">
            <i class="fab fa-github"></i>
          </a>
          <a class="social-icon" href="https://twitter.com/itsSajidM">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
        <div class="social-icons ml-0 mt-5">
          {/* <div class="social-icons">
            <button class="btn btn-primary">Hire me</button>
          </div> */}
          <div class="social-icons">
            <a class="btn btn-secondary" href={File} download>
              Download resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
