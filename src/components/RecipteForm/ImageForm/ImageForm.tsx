import { ProtoRecipte } from "../../../types/interfaces";
import Button from "../../Button/Button";
import ImageFormStyled from "./ImageFormStyled";

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
    <ImageFormStyled
      data-testid="form-recipte"
      onSubmit={(event) => submit(event)}
      className="recipte-form"
      autoComplete="off"
    >
      <h1 className="recipte-form__title">Añade tu imagen</h1>
      <div className="recipte-form__inputs-container">
        <div className="recipte-form__input-field">
          <label htmlFor="image" className="label">
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
      <div className="recipte-form__buttons-container">
        <Button
          type="button"
          text="Anterior"
          actionOnClick={() => previousPage(3)}
        />
        <Button type="submit" text="Crear Receta" />
      </div>
    </ImageFormStyled>
  );
};

export default ImageForm;
