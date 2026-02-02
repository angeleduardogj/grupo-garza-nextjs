'use client'
import Link from "next/link";
import styles from './ActiveLink.module.css'
import { usePathname } from "next/navigation";


interface Props {
    path: string;
    text: string;
    className?: string;
    onClick?: () => void;
}
export const ActiveLink = ({ path, text, className, onClick }: Props) => {
    const pathName = usePathname();
    return (
        <Link
        onClick={onClick}
        className={`${styles.link} ${pathName === path ? styles['active-link'] : ''} ${className ?? ''}`}
         href={path}>
            {text}
        </Link>
    )
}
