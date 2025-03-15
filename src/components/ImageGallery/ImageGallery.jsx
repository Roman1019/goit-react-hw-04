import css from "./ImageGallery.module.css";

export default function ImageGallery({ items, onImageClick }) {
  return (
    <>
      <ul className={css.photoList}>
        {items.map((item) => (
          <li className={css.photoItem} key={item.id}>
            <img
              className={css.img}
              src={item.urls.small}
              alt=""
              width={360}
              height={100}
              onClick={() => onImageClick(item.urls.full)}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
