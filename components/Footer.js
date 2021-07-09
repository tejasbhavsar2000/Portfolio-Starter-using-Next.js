export default function Footer() {
  return (
    <>
      <footer>
        Made with{' '}
        <img src="/netliheart.svg" alt="Netlify Logo" className="logo" /> Next.js
      </footer>
      <style jsx>{`
        footer {
          width: 100%;
          height: 100px;
          font-size: 12px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          align-self: flex-end;
        }

        .logo {
          height: 1em;
          margin: 5px;
        }
      `}</style>
    </>
  )
}
