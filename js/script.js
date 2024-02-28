//modal

const btns = document.querySelectorAll("button");
const formActiv = document.querySelector(".form");

btns.forEach((btn) => {
  btn.addEventListener("click", activModal);
});

function activModal() {
  formActiv.classList.toggle("activ");
  openModal();
}

const openModal = setTimeout(activModal, 5000);

//modalTimeout

//scroll

const goPages = document.querySelectorAll("a[data-goto]");

if (goPages.length > 0) {
  goPages.forEach((page) => {
    page.addEventListener("click", pageUp);
  });
}

function pageUp(e) {
  const page = e.target;

  if (page.dataset.goto && document.querySelector(page.dataset.goto)) {
    const gotoIndex = document.querySelector(page.dataset.goto);
    const gotoIndexValue = gotoIndex.getBoundingClientRect().top + pageYOffset;

    window.scrollTo({
      top: gotoIndexValue,
      behavior: "smooth",
    });
    e.parentDefault();
  }
}

//scrollToTop
const scrollTop = document.querySelector(".scroll_top");
const scrollBtn = document.querySelector(".scroll_img");

window.onscroll = () => {
  if (window.scrollY > 500) {
    scrollTop.classList.add("scroll_activ");
  } else {
    scrollTop.classList.remove("scroll_activ");
  }
};

scrollBtn.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
