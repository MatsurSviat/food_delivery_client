import { Button } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';

import likeImage from '../../shared/assets/icons/favorite.svg';
import image from '../../shared/assets/images/image_grilled_fish.png';

import styles from './FoodCard.module.scss';

export const FoodCard = () => {
    const { wrap, imageContainer, foodImg, likeImg, textContainer, title, subtitle, price, dollar, addButtonCont } =
        styles;

    return (
        <div className={wrap}>
            <div className={imageContainer}>
                <Icon src={image} alt="foodImg" className={foodImg} />
                <Button square>
                    <Icon src={likeImage} alt="likeImg" className={likeImg} />
                </Button>
            </div>
            <div className={textContainer}>
                <p className={title}>Grilled Fish</p>
                <p className={subtitle}>Spicy grilled fish</p>
                <p className={price}>
                    <span className={dollar}>$</span>8.50
                </p>
                <div className={addButtonCont}>
                    <Button wave>Add to card</Button>
                </div>
            </div>
        </div>
    );
};
