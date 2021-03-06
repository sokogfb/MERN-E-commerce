/**
 * Constants
 * */
import { appName } from '../../config'

export const moduleName = 'auth'
const prefix = `${appName}/${moduleName}`

export const SIGN_IN_REQUEST = `${prefix}/SIGN_IN_REQUEST`
export const SIGN_IN_SUCCESS = `${prefix}/SIGN_IN_SUCCESS`
export const SIGN_IN_ERROR = `${prefix}/SIGN_IN_ERROR`
export const SIGN_UP_REQUEST = `${prefix}/SIGN_UP_REQUEST`
export const SIGN_UP_SUCCESS = `${prefix}/SIGN_UP_SUCCESS`
export const SIGN_UP_ERROR = `${prefix}/SIGN_UP_ERROR`
export const LOAD_USER_REQUEST = `${prefix}/LOAD_USER_REQUEST`
export const LOAD_USER_SUCCESS = `${prefix}/LOAD_USER_SUCCESS`
export const LOAD_USER_ERROR = `${prefix}/LOAD_USER_ERROR`
export const SIGN_OUT_REQUEST = `${prefix}/SIGN_OUT_REQUEST`
export const SIGN_OUT_SUCCESS = `${prefix}/SIGN_OUT_SUCCESS`
export const SIGN_OUT_ERROR = `${prefix}/SIGN_OUT_ERROR`

export const UPDATE_USER_REQUEST = `${prefix}/UPDATE_USER_REQUEST`
export const UPDATE_USER_SUCCESS = `${prefix}/UPDATE_USER_SUCCESS`
export const UPDATE_USER_ERROR = `${prefix}/UPDATE_USER_ERROR`

export const SIGN_IN_WITH_EMAIL_REQUEST = `${prefix}/SIGN_IN_WITH_EMAIL_REQUEST`
export const SIGN_IN_WITH_EMAIL_SUCCESS = `${prefix}/SIGN_IN_WITH_EMAIL_SUCCESS`
export const SIGN_IN_WITH_EMAIL_ERROR = `${prefix}/SIGN_IN_WITH_EMAIL_ERROR`

export const SIGN_UP_WITH_EMAIL_REQUEST = `${prefix}/SIGN_UP_WITH_EMAIL_REQUEST`
export const SIGN_UP_WITH_EMAIL_SUCCESS = `${prefix}/SIGN_UP_WITH_EMAIL_SUCCESS`
export const SIGN_UP_WITH_EMAIL_ERROR = `${prefix}/SIGN_UP_WITH_EMAIL_ERROR`

export const CHECK_USER_SESSION_REQUEST = `${prefix}/CHECK_USER_SESSION_REQUEST`

export const SIGN_OUT_FB_REQUEST = `${prefix}/SIGN_OUT_FB_REQUEST`
export const SIGN_OUT_FB_SUCCESS = `${prefix}/SIGN_OUT_FB_SUCCESS`
export const SIGN_OUT_FB_ERROR = `${prefix}/SIGN_OUT_FB_ERROR`

export const SIGN_IN_WITH_GOOGLE_REQUEST = `${prefix}/SIGN_IN_WITH_GOOGLE_REQUEST`
export const SIGN_IN_WITH_GOOGLE_SUCCESS = `${prefix}/SIGN_IN_WITH_GOOGLE_SUCCESS`
export const SIGN_IN_WITH_GOOGLE_ERROR = `${prefix}/SIGN_IN_WITH_GOOGLE_ERROR`
