import React, {
    // useState
} from 'react'
// import Video from '../../videos/video_original.mp4'

import { 
    HeroContainer, 
    HeroContent,
    HeroH1,
    HeroP,
} from './HeroElements'
// import { Button } from './ButtonElement';
// import hero_pic from '../../images/shreyas_pic_cropped.png';

const HeroSection = () => {
    // const [imgHover, setImgHover] = useState(false)

    // const toggleImgHover = () => {
	// 	setImgHover( !imgHover );
	// }

    return (
        
        <HeroContainer>
            {/* <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg> */}
            {/* <ImgWrap>
                <PicBg  src={hero_pic} onMouseEnter={toggleImgHover} onMouseOut={toggleImgHover} /> 
            </ImgWrap> */}
            <HeroContent>
                <HeroH1 capital={'120px'} space={'0.02em'} >S</HeroH1>
                <HeroH1 space={'-0.01em'}>H</HeroH1>
                <HeroH1 space={'-0.06em'}>R</HeroH1>
                <HeroH1 space={'-0.03em'}>E</HeroH1>
                <HeroH1 space={'-0.17em'}>Y</HeroH1>
                <HeroH1 space={'-0.09em'}>A</HeroH1>
                <HeroH1 space={'0.2em'}>S </HeroH1>
                
                <HeroH1 capital={'110px'} space={'-0.12em'}>P</HeroH1>
                <HeroH1 space={'-0.16em'}>A</HeroH1>
                <HeroH1 space={'-0.02em'}>T</HeroH1>
                <HeroH1 space={'-0.03em'}>E</HeroH1>
                <HeroH1 >L</HeroH1>
                <HeroP>Software Development</HeroP>
                <HeroP>Product Design</HeroP>
                {/* <HeroBtnWrapper>
                    <Button 
                        to="signup" 
                        onMouseEnter={onHover} 
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                    >
                        Get Started { hover ? <ArrowForward/> : <ArrowRight/> }
                    </Button>
                </HeroBtnWrapper> */}
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection
