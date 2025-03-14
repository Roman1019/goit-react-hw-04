import css from "./ImageGallery.module.css";
export default function ImageGallery({ items }) {
  return (
    <>
      <ul className={css.photoList}>
        {items.map((item) => (
          <li className={css.photoItem} key={item.id}>
            <img
              className={css.img}
              src={item.urls.small}
              alt=""
              width={250}
              height={100}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
