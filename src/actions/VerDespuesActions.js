import { db } from "../firebase/firebase-config"
import { types } from "../types/types"
import { loadVerDespues } from '../helpers/loadHelp'

export const AddVerDespues = (title, description, category, date, duration, image, qualification, trailer) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth

        const newMovie = {
            title,
            description,
            category,
            date,
            duration,
            image,
            qualification,
            trailer
        }

        await db.collection(`verDespues/${uid}/movies`).add(newMovie)
        dispatch(addNewMovie(uid, newMovie))
        dispatch(startLoadingVerDespues(uid))
    }
}

export const addNewMovie = (uid, movie) => ({
    type: types.verDespuesAdd,
    payLoad: {
        uid,
        ...movie
    }
})

export const startLoadingVerDespues = (id) => {
    return async (dispatch) => {

        const movie = await loadVerDespues(id);
        dispatch(setVerDespues(movie));
    }
}

export const setVerDespues = (movie) => ({
    type: types.movieLoad,
    payload: movie
});

export const startSaveverDespues = (verDespues) => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;

        const verDespuesToFirestore = { ...verDespues };
        delete verDespuesToFirestore.id;

        await db.doc(`verDespues/${uid}/movies/${verDespues.id}`).update(verDespuesToFirestore);

        dispatch(refreshverDespues(verDespues.id, verDespuesToFirestore));
        dispatch(startLoadingCart(uid))
    }
}

export const refreshverDespues = (id, movie) => ({
    type: types.verDespuesUpdate,
    payload: {
        id,
        movie: {
            id,
            ...movie
        }
    }
});

export const activeCart = (id, cart) => ({
    type: types.cartActive,
    payload: {
        id,
        ...cart
    }
});

export const startDeletingCart = (id) => {
    return async (dispatch, getState) => {

        const uid = getState().auth.uid;

        await db.doc(`cart/${uid}/productos/${id}`).delete();

        dispatch(deleteCart(id));
    }
}

export const deleteCart = (id) => ({
    type: types.cartDelete,
    payload: id
});