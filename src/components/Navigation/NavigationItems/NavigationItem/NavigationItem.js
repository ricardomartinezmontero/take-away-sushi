import Link from 'next/link';
import { useRouter } from 'next/router';
import classes from './NavigationItem.module.css';

const navigationItem = (props) => {
    const router = useRouter();

    const anchorStyles = `${classes.NavigationItemAnchor} ${router.pathname == props.to ? classes.NavigationItemAnchorActive : ''}`;
    
    return (
        <li className={`${classes.NavigationItem} ${anchorStyles}`}>
            <Link href={props.to}>
                {props.children}
            </Link>
        </li>
    );
};

export default navigationItem;