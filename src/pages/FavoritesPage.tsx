import { useAppSelector } from "../hooks/redux";

const FavoritesPage = () => {
  const { favorites } = useAppSelector((state) => state.github);

  if (favorites.length === 0) return <p className="text-center">No Items</p>;
  return (
    <article className='flex justify-center pt-10 mx-auto h-screen w-screen"'>
      <ul>
        {favorites.map((f) => (
          <li key={f}>
            <a href={f} target="_blank">
              {f}
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default FavoritesPage;
