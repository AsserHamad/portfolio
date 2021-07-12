import Contact from './Contact/Contact';
import './Home.scss';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-header">
                <img className="home-self" src="/self.jpg" />
                <span>Asser Hamad</span>
                <span>Welcome to my Portfolio</span>
            </div>
            <div className="home-fs">
                <span className="home-fs-title">Full Stack Development</span>
                <div className="home-fs-images">
                    <div className="home-fs-image-container secondary"><img src="/icons/ndg.png" /></div>
                    <div className="home-fs-image-container tertiary"><img src="/icons/emall.png" /></div>
                    <div className="home-fs-image-container secondary"><img src="/icons/ibs.png" /></div>
                </div>
                <Contact phone={'+201140008042'} email={'asserhamad96@gmail.com'} />
            </div>
            <img src="/arrow.png" className="home-down" />
        </div>
    )
}

export default Home;