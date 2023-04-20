/* eslint-disable react/jsx-props-no-spreading */
import { useSelector } from 'react-redux';
import Slider from 'react-slick';

import { Button } from 'shared/ui/Button';
import { mealActions, sortMeals, useAppDispatch } from 'store';

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

    const dispatch = useAppDispatch();
    const sort = useSelector(sortMeals);

    return (
        <Slider {...settings}>
            {info.map(({ name }) => (
                <Button
                    key={name}
                    size="s"
                    color={sort === name ? 'yellow' : 'white'}
                    style={{ width: 90 }}
                    onClick={() => dispatch(mealActions.setSort(name))}
                >
                    {name}
                </Button>
            ))}
        </Slider>
    );
};
