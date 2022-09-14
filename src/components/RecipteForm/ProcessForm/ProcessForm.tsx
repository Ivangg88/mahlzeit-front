import { ProtoRecipte } from "../../../types/interfaces";
import Button from "../../Button/Button";
import FormularBanner from "../../FormularBanner/FormularBanner";
import ProcessFormStyled from "./ProcessFormStyled";

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
    <ProcessFormStyled
      data-testid="form-recipt"
      className="recipte-form"
      autoComplete="off"
    >
      <h1 className="recipte-form__title">Procedimiento</h1>
      <div className="recipte-form__inputs-container">
        <div className="recipte-form__input-field">
          <label htmlFor="Process" className="label">
            Proceso:
          </label>
          <textarea
            id="process"
            name="process"
            value={recipte.process}
            className="recipte-form__process"
            placeholder="Introduce los pasos separados por salto de página"
            onChange={(event) => handleChange(event)}
          />
        </div>
      </div>
      <div className="recipte-form__buttons-container">
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
      </div>

      <FormularBanner currentPage={2} />
    </ProcessFormStyled>
  );
};

export default ProcessForm;
