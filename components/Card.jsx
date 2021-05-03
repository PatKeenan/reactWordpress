import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Card = ({ data }) => {
  const [title, setTitle] = useState(false);
  return (
    <Link href={`projects/${data.slug}`}>
      <div
        className="card"
        onMouseEnter={() => setTitle(!title)}
        onMouseLeave={() => setTitle(false)}
        onTouchStart={() => setTitle(!title)}
        onTouchEnd={() => setTitle(!title)}
      >
        <Image
          height="200px"
          width="250px"
          layout="responsive"
          src={data.projectsFieldGroup.projectImage.mediaItemUrl}
          alt={data.projectsFieldGroup.projectImage.altText}
          className="card__image"
        />

        {title && (
          <div className="card__content">
            <p className="card__title">{data.title}</p>
          </div>
        )}
      </div>
    </Link>
  );
};

export default Card;

/* 
<div className="card__content">
        <div>
          <p className="card__description">
            {data.projectsFieldGroup.projectDescription}
          </p>
        </div>
        <Link href={`projects/${data.slug}`}>
          <button className="card__button">View Project</button>
        </Link>
      </div> */
