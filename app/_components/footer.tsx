const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className="px-6 py-8">
      <p className="text-sm text-gray-400">
        © {currentYear} Copyright <span className="font-bold">FSW Barber</span>
      </p>
    </footer>
  )
}

export default Footer
