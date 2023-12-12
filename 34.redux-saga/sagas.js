import { put, takeEvery, all, call, apply, takeLatest } from 'redux-saga/effects'

export const delay = (ms) => new Promise(res => setTimeout(res, ms))

export function* incrementAsync() {
  yield call(delay, 1000)
  yield put({ type: 'INCREMENT' })
}

export function* helloSaga() {
  console.log('Hello Sagas!');
}

export function* watchIncrementAsync() {
  // yield takeEvery('INCREMENT_ASYNC', incrementAsync)
  yield takeLatest('INCREMENT_ASYNC', incrementAsync) // This is like debounce
}

export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}
