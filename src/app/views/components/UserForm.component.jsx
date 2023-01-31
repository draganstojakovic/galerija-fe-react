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
      <h1>{formText}</h1>
      <form onSubmit={handleSubmit}>
        <br />
        <br />
        {register && (
          <>
            <div className="form-group">
              <label htmlFor="first_name">First Name*:</label>
              <input
                id="first_name"
                type="text"
                value={user.first_name}
                required
                onChange={(e) =>
                  onChange({ ...user, first_name: e.target.value })
                }
              />
            </div>
            <br />
            <br />
            <div className="form-group">
              <label htmlFor="last_name">Last Name*:</label>
              <input
                id="last_name"
                type="text"
                value={user.last_name}
                required
                onChange={(e) =>
                  onChange({ ...user, last_name: e.target.value })
                }
              />
            </div>
            <br />
            <br />
          </>
        )}
        <div className="form-group">
          <label htmlFor="email">Email*:</label>
          <input
            id="email"
            type="text"
            value={user.email}
            required
            onChange={(e) => onChange({ ...user, email: e.target.value })}
          />
        </div>
        <br />
        <br />
        <div className="form-group">
          <label htmlFor="password">Password*:</label>
          <input
            id="password"
            type="password"
            value={user.password}
            required
            onChange={(e) => onChange({ ...user, password: e.target.value })}
          />
        </div>
        <br />
        <br />
        {register && (
          <>
            <div className="form-group">
              <label htmlFor="confirm_password">Confirm Password*:</label>
              <input
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
            <br />
            <br />
            <div className="form-group form-check">
              <label htmlFor="terms">Terms of usage*:</label>
              <input
                id="terms"
                type="checkbox"
                name="genres"
                value={1}
                onChange={(e) => handleCheckbox(e.target.checked)}
              />
            </div>
            <br />
            <br />
          </>
        )}
        <button type="submit" className="btn btn-primary">
          {formText}
        </button>
        <br />
        <br />
      </form>
    </div>
  );
};
