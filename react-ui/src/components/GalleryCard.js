import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

function GalleryCard() {
    return (
        <div className="items-center">
            <Carousel responsive={responsive} >
                <div><img className="max-h-96" src="/images/gallery/1.jpeg"/></div>
                <div><img className="max-h-96" src="/images/gallery/2.jpeg"/></div>
                <div><img className="max-h-96" src="/images/gallery/3.jpeg"/></div>
                <div><img className="max-h-96" src="/images/gallery/4.jpeg"/></div>
                <div><img className="max-h-96" src="/images/gallery/5.jpeg"/></div>
                <div><img className="max-h-96" src="/images/gallery/6.jpeg"/></div>
                <div><img className="max-h-96" src="/images/gallery/7.jpeg"/></div>
                <div><img className="max-h-96" src="/images/gallery/8.jpeg"/></div>
                <div><img className="max-h-96" src="/images/gallery/9.jpeg"/></div>
                <div><img className="max-h-96" src="/images/gallery/10.jpeg"/></div>
                <div><img className="max-h-96" src="/images/gallery/11.jpeg"/></div>
                <div><img className="max-h-96" src="/images/gallery/12.jpeg"/></div>
                <div><img className="max-h-96" src="/images/gallery/13.jpeg"/></div>
            </Carousel>;
        </div>
)};

export default GalleryCard;