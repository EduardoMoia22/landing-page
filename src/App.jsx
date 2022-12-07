function App() {
  return (
    <div className="App bg-zinc-900 h-screen flex flex-col">
      <header className="w-full h-20">
        <div className="max-w-[1440px] w-[85%] mx-auto pt-8">
          <div className="flex items-center justify-between">
            <img src="./assets/logo.svg" alt="" />

            <ul className="flex items-center gap-14 text-zinc-100 font-bold">
              <li><a>How it works</a></li>
              <li><a>Pricing</a></li>
              <li><a>Help</a></li>
              <li><a>Login</a></li>
              <li className="bg-blue-500 w-[6.938rem] rounded-lg flex items-center justify-center py-2"><a>Sign Up</a></li>
            </ul>
          </div>
        </div>
      </header>
      
      <main className="flex-1 mt-28">
        <div className="max-w-[1440px] w-[85%] mx-auto flex justify-between items-center">
          <div className="w-[40.375rem] h-[26.25rem] flex flex-col">
            <h1 className="font-semibold text-6xl text-zinc-50 leading-tight">Launch your best product through the Metaverse.</h1>
            <p className="text-xl text-zinc-50 w-[25.625rem] pt-6">We provide the best service for you company product in the real world</p>

            <div className="flex items-center gap-6 mt-12">
              <a className="w-[12.625rem] h-14 bg-blue-500 rounded-lg text-zinc-50 flex items-center justify-center font-bold">Get Started</a>
              <a className="w-[12.625rem] h-14 bg-transparent border border-blue-500 rounded-lg text-blue-500 hover:bg-blue-500 hover:text-zinc-50 flex items-center justify-center font-bold transition-colors">Sign Up</a>
            </div>
          </div>
          <div>
            <img src="./assets/earth.svg" alt="" />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
