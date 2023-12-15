const mode = document.querySelectorAll(".mode_icon");
mode.forEach((e) => {
  e.addEventListener("click", () => {
    changeMode();
    mode.forEach((e) => {
      e.style.display = "block";
    });
    const $data = e.getAttribute("data-page"),
      $mode = document.getElementById($data);
    $mode.style.display = "none";
  });
});

const page = document.querySelectorAll("#ChangePage"),
  listPage = document.querySelectorAll(".ListPage");

page.forEach((e) => {
  e.addEventListener("click", () => {
    page.forEach((e) => {
      e.classList.remove("active");
    });
    e.classList.add("active");
    listPage.forEach((e) => {
      e.style.display = "none";
    });
    const $data = e.getAttribute("data-page"),
      $pages = document.getElementById($data);
    $pages.style.display = "block";
  });
});

const certificateSlideImages = document.querySelectorAll("#pagesImage");
const CertificatePrevious = document.getElementById("Previous");
const CertificateNext = document.getElementById("Next");
let certificateFromIndex = 1;

const showCertificateImages = (e) => {
  certificateSlideImages.forEach((x) => {
    x.style.display = "none";
    x.classList.remove("imagesActive");
  });
  certificateSlideImages[e - 1].style.display = "block";
  certificateSlideImages[e - 1].classList.add("imagesActive");

  return certificateFromIndex;
};

const prevCertificateImages = () => {
  if (certificateFromIndex > 1) {
    certificateFromIndex--;
    showCertificateImages(certificateFromIndex);
  }
};

const nextCertificateImages = () => {
  if (certificateFromIndex < certificateSlideImages.length) {
    certificateFromIndex++;
    showCertificateImages(certificateFromIndex);
  }
};

CertificatePrevious.addEventListener("click", prevCertificateImages);
CertificateNext.addEventListener("click", nextCertificateImages);

const projectSlideImages = document.querySelectorAll("#projectPagesImage");
const ProjectPrevious = document.getElementById("ProjectPrevious");
const ProjectNext = document.getElementById("ProjectNext");
let projectFromIndex = 1;

const showProjectImages = (e) => {
  projectSlideImages.forEach((x) => {
    x.style.display = "none";
    x.classList.remove("imagesActive");
  });
  projectSlideImages[e - 1].style.display = "block";
  projectSlideImages[e - 1].classList.add("imagesActive");

  return projectFromIndex;
};

const prevProjectImages = () => {
  if (projectFromIndex > 1) {
    projectFromIndex--;
    showProjectImages(projectFromIndex);
  }
};

const nextProjectImages = () => {
  if (projectFromIndex < projectSlideImages.length) {
    projectFromIndex++;
    showProjectImages(projectFromIndex);
  }
};

ProjectPrevious.addEventListener("click", prevProjectImages);
ProjectNext.addEventListener("click", nextProjectImages);
