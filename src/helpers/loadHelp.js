import { db } from "../firebase/firebase-config";

export const loadMovies = async () => {
    const moviesSnap = await db.collection(`/peliculas/`).get()
    const movies = []

    moviesSnap.forEach(snapHijo => {
        movies.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    });
    return movies;
}

export const loadUser = async (id) => {
    const userSnap = await db.collection(`profile/user/${id}`).get();
    const user = []

    userSnap.forEach(snapHijo => {
        user.push({
            id: snapHijo.id,
            ...snapHijo.data()
        })
    })
    return user
}