const now = new Date();

export default defineEventHandler((event) => {
  return {
    api: 'works' + now
  }
})
