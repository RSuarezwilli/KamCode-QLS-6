const { sequelize, Artist, Song } = require('../models');

async function seed() {
  await sequelize.sync({ force: true });

  const beatles = await Artist.create({
    name: 'The Beatles',
    bio: 'The Beatles were an English rock band formed in Liverpool.',
    photoUrl: 'https://picsum.photos/id/1015/400/400',
  });

  const adele = await Artist.create({
    name: 'Adele',
    bio: 'Adele is an English singer-songwriter known for her soulful voice.',
    photoUrl: 'https://picsum.photos/id/1016/400/400',
  });

  await Song.bulkCreate([
    { title: 'Hey Jude', artistId: beatles.id, releaseYear: 1968, duration: 431, coverUrl: 'https://picsum.photos/id/1018/400/400' },
    { title: 'Let It Be', artistId: beatles.id, releaseYear: 1970, duration: 243, coverUrl: 'https://picsum.photos/id/1020/400/400' },
    { title: 'Rolling in the Deep', artistId: adele.id, releaseYear: 2010, duration: 228, coverUrl: 'https://picsum.photos/id/1021/400/400' },
    { title: 'Someone Like You', artistId: adele.id, releaseYear: 2011, duration: 284, coverUrl: 'https://picsum.photos/id/1022/400/400' },
    { title: 'Hello', artistId: adele.id, releaseYear: 2015, duration: 295, coverUrl: 'https://picsum.photos/id/1023/400/400' },
  ]);

  console.log('Datos iniciales insertados correctamente.');
  process.exit();
}

seed();
