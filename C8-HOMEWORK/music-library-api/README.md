# 🎵 Music Library API

API REST para gestionar una biblioteca musical, desarrollada con **Node.js**, **Express**, **Sequelize** y **PostgreSQL**. Permite realizar operaciones CRUD sobre artistas y canciones.

---

## 🚀 Características

- CRUD completo para artistas (`/artists`)
- CRUD completo para canciones (`/songs`)
- Relación entre canciones y artistas (`Song.belongsTo(Artist)`)
- Base de datos con Sequelize y PostgreSQL
- Soporte para CORS y JSON
- Código modular

---

## 🛠️ Requisitos

- Node.js ≥ 16
- PostgreSQL ≥ 12
- npm ≥ 8

---

## 📦 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/music-library-api.git
cd music-library-api
