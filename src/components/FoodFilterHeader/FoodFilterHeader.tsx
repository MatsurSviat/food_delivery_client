import { memo } from 'react';
import { useSelector } from 'react-redux';
import type { IInfo } from 'components/MultipleItems/MultipleItems';

import { MultipleItems } from 'components/MultipleItems';
import FilterIcon from 'shared/assets/icons/filter.svg';
import { ReactComponent as SearchIcon } from 'shared/assets/icons/ic_search.svg';
import { Avatar } from 'shared/ui/Avatar';
import { Button } from 'shared/ui/Button';
import { Icon } from 'shared/ui/Icon';
import { Input } from 'shared/ui/Input';
import { getUserPhoto } from 'store/selectors/user.selectors';

import styles from './FoodFilterHeader.module.scss';

interface IAttribute extends IInfo {
    attribute: string;
}

export const FoodFilterHeader = memo(({ info, attribute }: IAttribute) => {
    const { title, slider } = styles;
    const userPhoto = useSelector(getUserPhoto);

    return (
        <>
            <div className={styles['title-wrap']}>
                <p className={title}>
                    Let’s eat
                    <br /> {attribute} food
                </p>
                <Avatar src={`${process.env.REACT_APP_API_URL}/${userPhoto}`} />
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
