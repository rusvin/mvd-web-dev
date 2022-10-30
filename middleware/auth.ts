import {defineNuxtRouteMiddleware, useNuxtApp} from "#app";
import {isAuthorized} from "~/composables/useAuth";

export default defineNuxtRouteMiddleware(async(to) => {
  if (!isAuthorized()) {
    return '/'
  }
})
