import {
    ProjectLink,
    ServiceCard,
} from '../mainContent/homeContent/HomeContent.style';
import { CarouselStyled, CarouselWrapper } from './Carousel.style';
import { FaAngleRight } from 'react-icons/fa';

interface CarouselData {
    title: string;
    description: string[];
    image?: string;
}

interface CarouselProps {
    items: CarouselData[];
    className?: string;
    showButton?: boolean;
    useTitleCard?: boolean;
}

export const Carousel: React.FC<CarouselProps> = ({
    items,
    className,
    showButton = true,
    useTitleCard = true,
}) => {
    const settings: any = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <CarouselWrapper>
            <CarouselStyled {...settings} className={className}>
                {items.map((item, index) => (
                    <ServiceCard key={index}>
                        {useTitleCard ? (
                            <ServiceCard className="title-card">
                                <h4>{item.title}</h4>
                            </ServiceCard>
                        ) : (
                            <h4>{item.title}</h4>
                        )}
                        {item.description.map((desc, i) => (
                            <p key={i}>{desc}</p>
                        ))}
                        {showButton && (
                            <ProjectLink>
                                View Project <FaAngleRight />
                            </ProjectLink>
                        )}
                        {item.image && <img src={item.image} alt="carousel" />}
                    </ServiceCard>
                ))}
            </CarouselStyled>
        </CarouselWrapper>
    );
};
