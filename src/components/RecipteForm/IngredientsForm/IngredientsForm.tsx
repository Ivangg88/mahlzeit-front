import { ProtoRecipte } from "../../../types/interfaces";
import Button from "../../Button/Button";

interface IngredientsFromProps {
  recipte: ProtoRecipte;
  nextPage: (currentPage: number) => void;
  previousPage: (currentPage: number) => void;
  handleChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

const IngredientsForm = ({
  handleChange,
  recipte,
  nextPage,
}: IngredientsFromProps): JSX.Element => {
  return (
    <form
      data-testid="form-recipt"
      //onSubmit={(event) => submit(event, apiUrl)}
      className="recipt-form"
      autoComplete="off"
    >
      <h1 className="recipt-form__title">Crea tu perfil</h1>
      <div className="recipt-form__inputs-container">
        <div className="recipte-form__input-field">
          <label htmlFor="name" className="label">
            Nombre:
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={recipte.name}
            className="recipte
  -form__input"
            placeholder="Cristina"
            onChange={(event) => handleChange(event)}
          />
        </div>

        <div className="recipte-form__input-field">
          <label htmlFor="dificulty" className="label">
            Dificultad::
          </label>
          <input
            id="dificulty"
            name="dificulty"
            type="text"
            value={recipte.dificulty}
            className="recipte
  -form__input"
            placeholder="Cristina"
            onChange={(event) => handleChange(event)}
          />
        </div>

        <div className="recipte-form__input-field">
          <label htmlFor="persons" className="label">
            Personas:
          </label>
          <input
            id="persons"
            name="persons"
            type="number"
            value={recipte.persons}
            className="recipte
  -form__input"
            placeholder="4"
            onChange={(event) => handleChange(event)}
          />
        </div>

        <div className="recipte-form__input-field">
          <label htmlFor="ingredients" className="label">
            Ingredientes:
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            cols={30}
            rows={20}
            value={recipte.ingredients}
            className="recipte
  -form__text-area"
            placeholder="Introduce los ingredientes separados por comas"
            onChange={(event) => handleChange(event)}
          />
        </div>
      </div>

      <Button
        type="button"
        text="Siguiente"
        actionOnClick={() => {
          nextPage(1);
          console.log("pulsado boton");
        }}
      />
    </form>
  );
};

export default IngredientsForm;
