function HandleUser({ isLoggedIn, user, Login, Logout }) {
  return (
    <>
      {isLoggedIn ? (
        <>
          <h1>Bem vindo {user}!</h1>
          <button onClick={Logout}>Logout</button>
        </>
      ) : (
        <>
          <h1>Você não pode acessar essa página</h1>
          <button onClick={Login}>Login</button>
        </>
      )}
    </>
  );
}

export default HandleUser;
