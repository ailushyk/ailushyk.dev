export interface Post {
  meta: {
    id: string,
    uid: string,
    lang: string,
    firstPublicationDate: string
  }
  title: string,
  content: any
}
