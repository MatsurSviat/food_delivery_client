/* eslint-disable react/jsx-props-no-spreading */
import Slider from 'react-slick';

import { Button } from 'shared/ui/Button';

import './slick.css';
import './slick-theme.css';

interface IItem {
    name: string;
}

export interface IInfo {
    info: IItem[];
}

export const MultipleItems = ({ info }: IInfo) => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        variableWidth: true,
    };

    return (
        <Slider {...settings}>
            {info.map(({ name }) => (
                <Button key={name} size="s" color="white" style={{ width: 90 }}>
                    {name}
                </Button>
            ))}
        </Slider>
    );
};
