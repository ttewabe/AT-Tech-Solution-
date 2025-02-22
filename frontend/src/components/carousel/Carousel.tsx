import {
    Card,
    CardLink,
} from '../commonStyledComponents/CommonStyledComponents.style';
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
    useTitleParagraph?: boolean;
    cardContentClassName?: string;
}

export const Carousel: React.FC<CarouselProps> = ({
    items,
    className,
    showButton = true,
    useTitleCard = true,
    useTitleParagraph = false,
    cardContentClassName = 'center-align',
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
                    <Card key={index}>
                        <div className={cardContentClassName}>
                            {useTitleCard ? (
                                <Card className="title-card">
                                    {useTitleParagraph ? (
                                        <p>{item.title}</p>
                                    ) : (
                                        <h4>{item.title}</h4>
                                    )}
                                </Card>
                            ) : useTitleParagraph ? (
                                <p>{item.title}</p>
                            ) : (
                                <h4>{item.title}</h4>
                            )}
                            {item.description.map((desc, i) => (
                                <p key={i}>{desc}</p>
                            ))}
                            {showButton && (
                                <CardLink>
                                    View Project <FaAngleRight />
                                </CardLink>
                            )}
                            {item.image && (
                                <img src={item.image} alt="carousel" />
                            )}
                        </div>
                    </Card>
                ))}
            </CarouselStyled>
        </CarouselWrapper>
    );
};
