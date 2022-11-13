import { useState } from "react";
import { ProtoRecipte } from "../../../types/interfaces";
import Button from "../../Button/Button";
import ProcessFormStyled from "./ProcessFormStyled";

interface ProcessFromProps {
  recipte: ProtoRecipte;

  nextPage: () => void;
  previousPage: () => void;
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
  const [largo, setlargo] = useState(1);
  const processes: JSX.Element[] = [];

  const addProcessField = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    setlargo(largo + 1);
  };

  const deleteProcessField = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    setlargo(largo - 1);
  };

  for (let counter = 0; counter < largo; counter += 1) {
    processes.push(
      <>
        <li>
          <label htmlFor="process" className="label">
            <span>{counter + 1}</span>
          </label>
          <textarea
            id="process"
            name="process"
            value={recipte.process}
            onChange={(event) => handleChange(event)}
          />
        </li>
      </>
    );
  }

  return (
    <ProcessFormStyled
      data-testid="form-recipt"
      className="recipte-form"
      autoComplete="off"
    >
      <h1 className="recipte-form__title">Procedimiento</h1>
      <div>
        <ul>
          {processes}
          <button onClick={(event) => addProcessField(event)}>+</button>
          <button onClick={(event) => deleteProcessField(event)}>-</button>
        </ul>

        <div className="recipte-form__buttons-container">
          <Button
            type="button"
            text="Anterior"
            actionOnClick={() => previousPage()}
          />
          <Button
            type="button"
            text="Siguiente"
            actionOnClick={() => nextPage()}
          />
        </div>
      </div>
    </ProcessFormStyled>
  );
};

export default ProcessForm;
