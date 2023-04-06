import { memo } from 'react';
import type { IInfo } from 'components/Slider/Slider';

import { MultipleItems } from 'components/Slider';
import FilterIcon from 'shared/assets/icons/filter.svg';
import { ReactComponent as SearchIcon } from 'shared/assets/icons/ic_search.svg';
import avatarImg from 'shared/assets/images/avatar-profile.png';
import { Avatar } from 'shared/ui/Avatar';
import { Button } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';
import { Input } from 'shared/ui/Input';

import styles from './FoodFilterHeader.module.scss';

interface IAttribute extends IInfo {
    attribute: string;
}

export const FoodFilterHeader = memo(({ info, attribute }: IAttribute) => {
    const { title, slider } = styles;

    return (
        <>
            <div className={styles['title-wrap']}>
                <p className={title}>
                    Let’s eat
                    <br /> {attribute} food
                </p>
                <Avatar src={avatarImg} />
            </div>
            <div className={styles['search-wrap']}>
                <Input
                    placeholder="Search food ..."
                    purpose="search"
                    iconSize="small"
                    position="left"
                    inputColor="white"
                    icon={<SearchIcon />}
                />
                <Button size="xxs" circle>
                    <Icon src={FilterIcon} />
                </Button>
            </div>
            <div className={slider}>
                <MultipleItems info={info} />
            </div>
        </>
    );
});

FoodFilterHeader.displayName = 'FoodFilterHeader';
