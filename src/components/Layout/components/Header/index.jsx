import {
    faCircleQuestion,
    faCircleXmark,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faSignOut,
    faSpinner,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import 'tippy.js/dist/tippy.css';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import { InboxIcon, MessageIcon, SearchIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Menu from '~/components/Popper/Menu';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                { type: 'language', code: 'en', title: 'English' },
                { type: 'language', code: 'vi', title: 'Tiếng Việt' },
            ],
        },
    },
    { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: 'Feedback and help', to: '/feedback' },
    { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Keyboard shortcuts' },
];

const Header = () => {
    const [searchResult, setSearchResult] = useState([]);
    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        });
    }, []);

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
        }
    };

    const userMenu = [
        { icon: <FontAwesomeIcon icon={faUser} />, title: 'View profile', to: '/@phananh' },
        { icon: <FontAwesomeIcon icon={faCoins} />, title: 'Get coins', to: '/coin' },
        { icon: <FontAwesomeIcon icon={faGear} />, title: 'Settings', to: '/settings' },
        ...MENU_ITEMS,
        { icon: <FontAwesomeIcon icon={faSignOut} />, title: 'Log out', to: '/logout', separate: true },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Image src={images.logo} alt="Tiktok by anhldp" />
                <HeadlessTippy
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                    interactive
                    visible={searchResult.length > 0}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />

                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>

                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <SearchIcon />
                        </button>
                    </div>
                </HeadlessTippy>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onClick={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/df1124d2d68d07f98b3fdae2a217f877~c5_100x100.jpeg?x-expires=1662642000&x-signature=tVq6YTk0d4pZIfBPUc1tx92O%2BV8%3D"
                                alt="user-avatar"
                                fallback="data:image/jpeg;base64,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"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
};

export default Header;
