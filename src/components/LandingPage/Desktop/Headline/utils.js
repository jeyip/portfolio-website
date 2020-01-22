export const handleScrollTo = className => {
  document
    .getElementsByClassName(className)[0]
    .scrollIntoView({ behavior: "smooth", block: "start" })
}
