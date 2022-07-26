import Document, { Html, Head, Main, NextScript } from 'next/document'

class SpecialDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="bg-[#d2cdcd] text-black dark:bg-black dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default SpecialDocument
