import Carousel from 'react-bootstrap/Carousel';
import logo from './assets/logo.jpg'

function Hero() {
    return (
        <Carousel variant='dark' pause='hover' wrap='true' style={{overflow:'hidden',height:'60vh'}}>
            <Carousel.Item interval={1000}>
                <img src={logo} alt='logo' className='heroimg' />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img src={logo} alt='logo' className='heroimg' />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img src={logo} alt='logo' className='heroimg' />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Hero