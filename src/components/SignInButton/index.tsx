import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';
import { signIn, useSession } from 'next-auth/client';

export function SignInButton() {
  const [session] = useSession();

  console.log(session);
  return session ? (
    <button type='button' className={styles.signInButton}>
      <FaGithub color='#04d361' />
      Matheus Soares
      <FiX color='#737380' className={styles.closeIcon} />
    </button>
  ) : (
    <button
      onClick={() => signIn('github')}
      type='button'
      className={styles.signInButton}
    >
      <FaGithub color='#eba417' />
      Sign In
    </button>
  );
}
