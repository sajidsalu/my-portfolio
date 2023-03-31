const EducationSection = () => {
  return (
    <section class="resume-section" id="education">
      <div class="resume-section-content">
        <h2 class="mb-5">Education</h2>
        <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
          <div class="flex-grow-1">
            <h3 class="mb-0">College of Engineering Trivandrum</h3>
            <div class="subheading mb-3">Master of Computer Applications</div>
            <div>Computer Science - Web Development Track</div>
            <p>GPA: 3.5</p>
          </div>
          <div class="flex-shrink-0">
            <span class="text-primary">August 2017 - May 2014</span>
          </div>
        </div>
        <div class="d-flex flex-column flex-md-row justify-content-between">
          <div class="flex-grow-1">
            <h3 class="mb-0">University of Kerala</h3>
            <div class="subheading mb-3">Bachelor of Computer Science</div>
            <p>GPA: 3.16</p>
          </div>
          <div class="flex-shrink-0">
            <span class="text-primary">August 2011 - May 2014</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
