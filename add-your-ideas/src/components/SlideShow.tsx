import "tw-elements";

const SlideShow = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide relative"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner relative w-full overflow-hidden">
        <div className="relative carousel-item active float-left w-full">
          <img
            src="https://i.postimg.cc/6QgfpGJc/ideabg2.jpg"
            className="block w-full"
            alt="Wild Landscape"
          />
          <p className="lg:text-3xl absolute top-1/3 bottom-1/2 left-10 lg:top-40  lg:left-20 text-white">
            To make great ideas a reality, we must act, experiment, fail, adapt,
            and learn on a daily basis
          </p>
        </div>
        <div className="relative carousel-item float-left w-full">
          <img
            src="https://i.postimg.cc/QdDPjwkC/My-project.jpg"
            className="block w-full"
            alt="Camera"
          />
          <p className="lg:text-3xl absolute top-1/3 bottom-1/2 left-10 lg:top-40  lg:left-20 text-white">
            Let your ideas and thoughts give you inspiration. All creativity
            come from your imagination - you first imagine and then you create
          </p>
        </div>
        <div className="relative carousel-item float-left w-full">
          <img
            src="https://i.postimg.cc/3rPVcdkg/My-project-1.jpg"
            className="block w-full"
            alt="Exotic Fruits"
          />
          <p className="lg:text-3xl absolute top-1/3 bottom-1/2 left-10 lg:top-40  lg:left-20 text-white">
            To sit on an idea or fail to act on a goal, is not really
            goal-setting, but wishful thinking.
          </p>
        </div>
      </div>
      <button
        className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon inline-block bg-no-repeat"
          aria-hidden="true"
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default SlideShow;
