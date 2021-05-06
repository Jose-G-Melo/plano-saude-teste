import React from 'react';
import styles from './signup.module.scss';

export default function Signup() {
  return(
    <div>
      <header className={styles.header}>
        <span/>
        <h1>Plano Digital</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.login}>
          <p>Canal do corretor</p>
          <h1>Login</h1>
          <form>
            <div className={styles.email}>
              <span><i className="fa fa-user fa-lg" /></span>
              <input id="email" type="email" placeholder="Digite seu email" />
            </div>
            <div className={styles.email}>
              <span><i className="fa fa-lock fa-lg" /></span>
              <input type="password" placeholder="Digite sua senha" />
            </div>
          </form>
          <input type="submit" value="ENTRAR" className={styles.enviar}/>
          <a href="">Esqueci minha senha</a>
        </div>
      </main>
    </div>
  )
}