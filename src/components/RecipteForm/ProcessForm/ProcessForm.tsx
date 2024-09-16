import { useAppSelector } from "../../../app/hooks";
import { RootState } from "../../../app/store";
import { ProtoRecipte } from "../../../types/interfaces";
import Button from "../../Button/Button";
import ProcessFormStyled from "./ProcessFormStyled";

interface ProcessFromProps {
  recipte: ProtoRecipte;
  nextPage: () => void;
  previousPage: () => void;
  setRecipte: React.Dispatch<React.SetStateAction<ProtoRecipte>>;
}

const ProcessForm = ({
  recipte,
  setRecipte,
  previousPage,
  nextPage,
}: ProcessFromProps): JSX.Element => {
  const {
    translations: {
      recipeForm: { process, step, backButton, nextButton, stepPlaceholder },
    },
  } = useAppSelector((state: RootState) => state.i8n);
  let data = [...recipte.process];
  const handleFormChange = (
    index: number,
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    data[index].process = event.target.value;

    setRecipte({ ...recipte, process: data });
  };

  const processFields = recipte.process.map((process, index) => {
    return (
      <li className="recipte-form__process">
        <label htmlFor="process" className="label">
          <span>{`${step} ${index + 1}`}</span>
        </label>
        <textarea
          className="recipte-form__process-text"
          autoComplete="off"
          id="process"
          name="process"
          value={process.process}
          wrap="hard"
          autoCapitalize="sentences"
          onChange={(event) => handleFormChange(index, event)}
          placeholder={stepPlaceholder}
        />
      </li>
    );
  });

  const addInputField = () => {
    setRecipte({
      ...recipte,
      process: recipte.process.concat({
        process: "",
        picture: "",
        backupPicture: "",
      }),
    });
  };

  const deleteInputField = () => {
    if (recipte.process.length === 1) {
      return;
    }
    const inputFields = recipte.process.slice(0, recipte.process.length - 1);
    setRecipte({ ...recipte, process: inputFields });
  };

  return (
    <ProcessFormStyled data-testid="form-recipt" className="recipte-form">
      <h1 className="recipte-form__title">{process}</h1>

      <ul className="recipte-form__process-list">{processFields}</ul>

      <div className="buttons">
        <Button
          customStyle="buttons--small"
          text="+"
          type="button"
          actionOnClick={addInputField}
        />

        <Button
          customStyle="buttons--small"
          text="-"
          type="button"
          actionOnClick={deleteInputField}
        />
      </div>

      <div className="recipte-form__buttons-container">
        <Button
          type="button"
          text={backButton}
          actionOnClick={() => previousPage()}
        />
        <Button
          type="button"
          text={nextButton}
          actionOnClick={() => nextPage()}
        />
      </div>
    </ProcessFormStyled>
  );
};

export default ProcessForm;
