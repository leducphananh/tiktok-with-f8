import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

const AccountItem = () => {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/df1124d2d68d07f98b3fdae2a217f877~c5_100x100.jpeg?x-expires=1662642000&x-signature=tVq6YTk0d4pZIfBPUc1tx92O%2BV8%3D"
                alt="Phan Anh"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Le Duc Phan Anh</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>leducphananh</span>
            </div>
        </div>
    );
};

export default AccountItem;
