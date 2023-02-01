export const UserForm = ({
  handleSubmit,
  user,
  onChange,
  formText,
  register,
  checkPw,
  onChangeCheckPw,
  handleCheckbox,
}) => {
  return (
    <div>
      <br />
      <div className="d-flex justify-content-center">
        <h1>{formText}</h1>
      </div>
      <form onSubmit={handleSubmit} className="form-inline">
        {register && (
          <>
            <div className="form-group mx-sm-3 mb-2">
              <label htmlFor="first_name">First Name*</label>
              <input
                className="form-control"
                id="first_name"
                type="text"
                value={user.first_name}
                required
                onChange={(e) =>
                  onChange({ ...user, first_name: e.target.value })
                }
              />
            </div>
            <div className="form-group mx-sm-3 mb-2">
              <label htmlFor="last_name">Last Name*</label>
              <input
                className="form-control"
                id="last_name"
                type="text"
                value={user.last_name}
                required
                onChange={(e) =>
                  onChange({ ...user, last_name: e.target.value })
                }
              />
            </div>
          </>
        )}
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="email">Email*</label>
          <input
            className="form-control"
            id="email"
            type="text"
            value={user.email}
            required
            onChange={(e) => onChange({ ...user, email: e.target.value })}
          />
        </div>
        <div className="form-group mx-sm-3 mb-2">
          <label htmlFor="password">Password*</label>
          <input
            className="form-control"
            id="password"
            type="password"
            value={user.password}
            required
            onChange={(e) => onChange({ ...user, password: e.target.value })}
          />
        </div>
        {register && (
          <>
            <div className="form-group mx-sm-3 mb-2">
              <label htmlFor="confirm_password">Confirm Password*</label>
              <input
                className="form-control"
                id="confirm_password"
                type="password"
                value={checkPw.confirm_password}
                required
                onChange={(e) =>
                  onChangeCheckPw({
                    ...checkPw,
                    confirm_password: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group mx-sm-3 mb-2">
              <label htmlFor="terms">Terms of usage*</label>
              <input
                className="form-check-input"
                id="terms"
                type="checkbox"
                name="genres"
                value={1}
                onChange={(e) => handleCheckbox(e.target.checked)}
              />
            </div>
          </>
        )}
        <br />
        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary">
            {formText}
          </button>
        </div>
        <br />
      </form>
    </div>
  );
};
