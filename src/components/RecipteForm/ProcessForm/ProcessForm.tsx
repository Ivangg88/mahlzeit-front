import { ProtoRecipte } from "../../../types/interfaces";
import Button from "../../Button/Button";

interface ProcessFromProps {
  recipte: ProtoRecipte;
  nextPage: (currentPage: number) => void;
  previousPage: (currentPage: number) => void;
  handleChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

const ProcessForm = ({
  handleChange,
  recipte,
  previousPage,
  nextPage,
}: ProcessFromProps): JSX.Element => {
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
          <label htmlFor="Process" className="label">
            Proceso:
          </label>
          <textarea
            id="process"
            name="process"
            value={recipte.process}
            className="recipte-form__process"
            placeholder="Introduce los ingredientes separados por comas"
            onChange={(event) => handleChange(event)}
          />
        </div>
      </div>

      <Button
        type="button"
        text="Anterior"
        actionOnClick={() => previousPage(2)}
      />
      <Button
        type="button"
        text="Siguiente"
        actionOnClick={() => nextPage(2)}
      />
    </form>
  );
};

export default ProcessForm;
