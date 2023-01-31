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
    <>
      <h1>{formText}</h1>
      <form onSubmit={handleSubmit}>
        {register && (
          <>
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
            <br />
            <label htmlFor="last_name">Last Name*:</label>
            <input
              id="last_name"
              type="text"
              value={user.last_name}
              required
              onChange={(e) => onChange({ ...user, last_name: e.target.value })}
            />
            <br />
          </>
        )}
        <label htmlFor="email">Email*:</label>
        <input
          id="email"
          type="text"
          value={user.email}
          required
          onChange={(e) => onChange({ ...user, email: e.target.value })}
        />
        <br />
        <label htmlFor="password">Password*:</label>
        <input
          id="password"
          type="password"
          value={user.password}
          required
          onChange={(e) => onChange({ ...user, password: e.target.value })}
        />
        <br />
        {register && (
          <>
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
            <br />
            <label htmlFor="terms">Terms of usage*:</label>
            <input
              id="terms"
              type="checkbox"
              name="genres"
              value={1}
              onChange={(e) => handleCheckbox(e.target.checked)}
            />
            <br />
          </>
        )}
        <br />
        <br />
        <button type="submit">{formText}</button>
      </form>
    </>
  );
};
