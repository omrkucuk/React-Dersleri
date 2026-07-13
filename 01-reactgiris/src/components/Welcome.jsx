const Welcome = ({ isLoggedIn = false }) => {
  // 1 - IF/Else
  //   if (isLoggedIn) {
  //     return <h1>Tekrar hoş geldiniz!</h1>;
  //   } else {
  //     return <h2>Lütfen giriş yapınız.</h2>;
  //   }
  //
  // ###########################
  //
  // 2 - Ternary Operatör
  return <>{isLoggedIn ? <h1>Hoş geldiniz!</h1> : <h2>Giriş yapınız!</h2>}</>;
  //
  //###########################
  // 3- && Operatörü -> koşul sağlandığında render et, sağlanmadığında hiçbir şey gösterme.
  //   return (
  //     <>
  //       <h1>Dashboard</h1>
  //       {isLoggedIn && <h2>Hoş geldiniz</h2>}
  //     </>
  //   );
};

export default Welcome;
