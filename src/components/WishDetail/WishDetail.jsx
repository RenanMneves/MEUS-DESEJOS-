import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { useWishs } from "../../hooks/useWishs";
import { formatDate } from "../utils/formatDate";

export const WishDetail = () => {
  const { id } = useParams();
  const { wishs, loading, setLoading, form, setForm } = useWishs();
  const [wishDetail, setWishDetail] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const handleEditToggle = () => {
    setIsEditing((prev) => !prev);
  };

  useEffect(() => {
    if (id && wishs.length > 0 && !loading) {
      setLoading(true);
      console.log(wishs.find((wish) => wish.id === Number.parseInt(id)));
      const foundWish = wishs.find((wish) => wish.id === Number.parseInt(id));
      console.log(foundWish);
      setWishDetail(foundWish);
      setForm({
        name: foundWish.name,
        description: foundWish.description,
        urlImage: foundWish.urlImage,
        date: foundWish.date || "",
      });
    }
    setLoading(false);
  }, [wishs, id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log(form);
  };

  if (loading) return <h1>Carregando...</h1>;

  return (
    <div>
      <button onClick={() => navigate(-1)}>⬅️ Voltar</button>
      <h1>Detalhes do desejo</h1>
      <button onClick={handleEditToggle}>✏️ Editar</button>
      {isEditing ? (
        <>
          <AddItemForm
            handleSubmit={handleUpdate}
            setForm={setForm}
            form={form}
          />
        </>
      ) : (
        <>
          <p>{wishDetail.name}</p>
          <p>{wishDetail.description}</p>
          <p>{formatDate(wishDetail.date)}</p>
          <img width={200} src={wishDetail.urlImage} alt={wishDetail.name} />
        </>
      )}
    </div>
  );
};
