declare function describe(description: string, specDefinitions: () => void): void

declare function it(description: string, specDefinitions: () => void): void

declare let expect: any

declare module '*.svg' {
  const content: string
  export default content
}

declare module '*.woff' {
  const content: string
  export default content
}

declare module '*.ttf' {
  const content: string
  export default content
}

declare module '*.eot' {
  const content: string
  export default content
}

declare module '*.woff2' {
  const content: string
  export default content
}

declare module 'react-redux';
