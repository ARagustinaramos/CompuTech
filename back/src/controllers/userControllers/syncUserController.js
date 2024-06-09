/*const { User } = require('../../config/db');
const { auth } = require('../../middlewares/firebaseAdmin');

const syncUsersFromFirebase = async () => {
  try {
    const listUsersResult = await auth.listUsers();
    const users = listUsersResult.users;

    const userPromises = users.map(async (firebaseUser) => {
      const [user, created] = await User.findOrCreate({
        where: { mail: firebaseUser.email },
        defaults: {
          id_User: firebaseUser.uid,
          name: firebaseUser.displayName || '',
          mail: firebaseUser.email,
          phone: firebaseUser.phoneNumber || '',
          image: firebaseUser.photoURL || '',
          address: '', // Si tienes una dirección en Firebase, cámbiala aquí
          active: true,
          rol: false, // Asigna el rol según tu lógica
          shoppingCart: [],
          recurringPayment: {}
        }
      });
      if (!created) {
        // Actualizar datos si el usuario ya existía
        await user.update({
          name: firebaseUser.displayName || '',
          phone: firebaseUser.phoneNumber || '',
          image: firebaseUser.photoURL || '',
        });
      }
    });

    await Promise.all(userPromises);
    console.log('Users synchronized successfully');
    return { message: 'Users synchronized successfully' };
  } catch (error) {
    console.error('Error syncing users:', error);
    throw new Error('Error syncing users');
  }
};

module.exports = syncUsersFromFirebase;*/