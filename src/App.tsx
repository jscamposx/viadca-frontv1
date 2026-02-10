import HomePage from './features/home/pages/HomePage';
import ThemeToggle from './ThemeToggle';
import Footer from './features/common/components/Footer';
function App() {


  return (
    <>
      <main>
        <HomePage />
        <Footer />
      </main>
      <ThemeToggle />
    </>
  )
}

export default App
