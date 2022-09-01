import Button from "../Button/Button";
import RegisterFormStyled from "./RegisterFormStyled";

const submit = (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
};

const RegisterForm = () => {
  return (
    <RegisterFormStyled>
      <form
        onSubmit={(event) => submit(event)}
        className="register-form"
        autoComplete="off"
      >
        <h1 className="register-form__title">Crea tu perfil</h1>
        <div className="register-form__inputs-container">
          <div className="register-form__input-field">
            <label htmlFor="name" className="label">
              Nombre:
            </label>
            <input id="name" type="text" className="register-form__input" />
          </div>

          <div className="register-form__input-field">
            <label htmlFor="name" className="label">
              Email:
            </label>
            <input id="email" type="text" className="register-form__input" />
          </div>

          <div className="register-form__input-field">
            <label htmlFor="password" className="label">
              Contraseña:
            </label>
            <input
              id="password"
              type="password"
              className="register-form__input"
            />
          </div>

          <div className="register-form__input-field">
            <label htmlFor="passwordConfirm" className="label">
              Confirmar contraseña:
            </label>
            <input
              id="passwordConfirm"
              type="password"
              className="register-form__input"
            />
          </div>
        </div>
        <link
          className="register-form__link"
          rel="stylesheet"
          href="#"
          title="click aquí"
        />
        <span className="link-dialog">
          ¿Ya registrado?{" "}
          <link
            className="register-form__link"
            rel="stylesheet"
            href="#"
            title="click aquí"
          />
          para login.
        </span>

        <Button text="Crear perfil" />
      </form>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
