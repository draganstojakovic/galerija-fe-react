export const UserForm = ({ handleSubmit, user, onChange, formText }) => {
  return (
    <>
      <h1>{formText}</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="text"
          value={user.email}
          required
          onChange={(e) => onChange({ ...user, email: e.target.value })}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          value={user.password}
          required
          onChange={(e) => onChange({ ...user, password: e.target.value })}
        />
        <br />
        <br />
        <button type="submit">{formText}</button>
      </form>
    </>
  );
};
