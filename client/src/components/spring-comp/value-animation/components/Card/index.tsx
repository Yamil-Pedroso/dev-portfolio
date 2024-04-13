import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./styles.module.scss";

interface CardProps {
  src: string | object | any;
  onClick?: () => void;
  url?: string | object | any;
}

export const Card = ({ src, url }: CardProps) => {
  return (
    <>
      <Link className={styles.card} to={url} target="_blank">
        <img className={styles.card__blur} src={src} alt="" />
        <img className={styles.card__img} src={src} alt="" />
      </Link>
    </>
  );
};
