import Image from "../../assets/profile.jpg";

const NavBar = () => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <span class="d-block d-lg-none">Sajid M</span>
        <span class="d-none d-lg-block">
          <img
            class="img-profile rounded-circle mb-2"
            height={250}
            width={200}
            src={Image}
            alt="..."
          />
        </span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#about">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#experience">
              Experience
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#education">
              Education
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#skills">
              Skills
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#interests">
              Interests
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
