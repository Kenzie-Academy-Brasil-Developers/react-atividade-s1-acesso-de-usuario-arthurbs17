const RestrictedPage = ({ isLoggedIn, user, Login, Logout }) => {
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <p>Bem-vindo, {user}!</p>
          <button onClick={Logout}>Sair</button>
        </div>
      ) : (
        <div>
          <p>Você não pode acessar essa página</p>
          <button onClick={Login}>Entrar</button>
        </div>
      )}
    </div>
  );
};

export default RestrictedPage;
