import { ProtoRecipte } from "../../../types/interfaces";
import Button from "../../Button/Button";

interface ImageFromProps {
  recipte: ProtoRecipte;
  nextPage: (currentPage: number) => void;
  previousPage: (currentPage: number) => void;
  submit: (event: React.FormEvent<HTMLFormElement>) => void;
  createImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageForm = ({
  createImage,
  previousPage,
  submit,
}: ImageFromProps): JSX.Element => {
  return (
    <form
      data-testid="form-recipt"
      onSubmit={(event) => submit(event)}
      className="recipt-form"
      autoComplete="off"
    >
      <h1 className="recipt-form__title">Añade tu imagen</h1>
      <div className="recipt-form__inputs-container">
        <div className="recipte-form__input-field">
          <label htmlFor="Process" className="label">
            Añadir imagen:
          </label>
          <input
            id="image"
            name="image"
            type="file"
            className="recipte-form__image"
            onChange={(event) => createImage(event)}
          />
        </div>
      </div>

      <Button
        type="button"
        text="Anterior"
        actionOnClick={() => previousPage(3)}
      />
      <Button type="submit" text="Crear Receta" />
    </form>
  );
};

export default ImageForm;
