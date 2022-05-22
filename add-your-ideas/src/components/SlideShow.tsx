import { Carousel } from "react-bootstrap";

const SlideShow = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/6QgfpGJc/ideabg2.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="caption">
          <h3>
            {" "}
            To sit on an idea or fail to act on a goal is not really
            goal-setting, but wishful thinking.
          </h3>
          <br/>
          <br/>
          <br/>
          <br/>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/QdDPjwkC/My-project.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className="caption">
          <h3>
            Let your ideas and thoughts give you inspiration. All creativity
            comes from your imagination - you first imagine and then you create.
          </h3>
          <br/>
          <br/>
          <br/>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.postimg.cc/3rPVcdkg/My-project-1.jpg"
          alt="Third slide"
        />
        <Carousel.Caption className="caption">
          <h3>
            To make great ideas a reality, we must act, experiment, fail, adapt,
            and learn on a daily basis.
          </h3>
          <br/>
          <br/>
          <br/>
          <br/>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default SlideShow;
