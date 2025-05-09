/* // app/test-firebase.tsx
import { auth } from '@/firebase/config';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

export default function FirebaseTestScreen() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (usr) => {
      setUser(usr);
    });
    return unsub;
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Usuario autenticado:</Text>
      <Text>{user ? user.email : 'No autenticado'}</Text>
    </View>
  );
}
 */