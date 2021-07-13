import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './WorkPage.scss';

const WorkPage = ({color, icon, title, images, titles, paragraphs}) => {
    return (
        <div className="work-container">
            <div className={`work-header work-header-${color}`}>
                <img alt="company logo" className="work-header-icon" src={icon} />
            </div>
            <div className="work-main">
                <div className="work-main-left">
                    <span className="work-main-left-title">{title}</span>
                    <Carousel showStatus={false} emulateTouch width={100}>
                        {images.map(image => (
                            <img alt="example" key={image} src={image} />
                        ))}
                    </Carousel>
                </div>
                <div className="work-main-right">
                    <div className="work-main-right-titles">
                            <div className="work-main-right-title">
                                <span>{titles[0].title}</span>
                                <span>{titles[0].descr}</span>
                            </div>
                            <div className="work-main-right-title work-main-right-title-middle">
                                <span>{titles[1].title}</span>
                                <span>{titles[1].descr}</span>
                            </div>
                            <div className="work-main-right-title">
                                <span>{titles[2].title}</span>
                                <span>{titles[2].descr}</span>
                            </div>
                    </div>
                    <div className="work-main-paragraphs">
                            {paragraphs.map(paragraph => (
                                <p className="work-main-paragraph">{paragraph}</p>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkPage;