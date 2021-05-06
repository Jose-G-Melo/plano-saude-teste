import React from 'react';
import styles from './signup.module.scss';

export default function Signup() {
  return(
    <div>
      <header className={styles.header}>
        <h1>Plano Digital</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.login}>
          <p>Canal do corretor</p>
          <h1>Login</h1>
          <form>
            <input type="email" placeholder="Digite seu email" />
            <input type="password" placeholder="Digite sua senha" />
          </form>
          <input type="submit" value="ENTRAR" className={styles.enviar}/>
          <a href="">Esqueci minha senha</a>
        </div>
      </main>
    </div>
  )
}