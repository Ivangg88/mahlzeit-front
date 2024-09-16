import { useAppSelector } from "../../../app/hooks";
import { RootState } from "../../../app/store";
import { ProtoRecipte } from "../../../types/interfaces";
import Button from "../../Button/Button";
import ImageFormStyled from "./ImageFormStyled";

interface ImageFromProps {
  recipte: ProtoRecipte;
  nextPage: () => void;
  previousPage: () => void;
  submit: (event: React.FormEvent<HTMLFormElement>) => void;
  createImage: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageForm = ({
  createImage,
  previousPage,
  submit,
}: ImageFromProps): JSX.Element => {
  const {
    translations: {
      recipeForm: { addImage, addImageLabel, backButton, createRecipeButton },
    },
  } = useAppSelector((state: RootState) => state.i8n);
  return (
    <ImageFormStyled
      data-testid="form-recipte"
      onSubmit={(event) => submit(event)}
      className="recipte-form"
      autoComplete="off"
    >
      <h1 className="recipte-form__title">{addImage}</h1>
      <div className="recipte-form__inputs-container">
        <div className="recipte-form__input-field">
          <label htmlFor="image" className="label">
            {addImageLabel}
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
        <Button type="button" text={backButton} actionOnClick={previousPage} />
        <Button type="submit" text={createRecipeButton} />
      </div>
    </ImageFormStyled>
  );
};

export default ImageForm;
