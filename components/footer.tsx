import Container from './container';

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Taehwan Noh
          </h3>
          <div className="flex flex-col lg:flex-row justify-end items-center lg:pl-4 lg:w-1/2 gap-x-6">
            <div className="flex flex-row gap-x-6 mb-6 lg:mb-0">
              <a
                href="https://github.com/taehwanno"
                target="_blank"
                rel="noopener"
              >
                <img
                  className="w-5 h-5"
                  src="https://user-images.githubusercontent.com/7760903/53615236-5d183b80-3c20-11e9-8665-40f837e91ccf.png"
                  alt="GitHub"
                />
              </a>
              <a
                href="https://twitter.com/@taehwannoh"
                target="_blank"
                rel="noopener"
              >
                <img
                  className="w-6 h-5"
                  src="https://user-images.githubusercontent.com/7760903/208281431-7e50d9e1-0f81-43ce-ba90-0979a32a1a26.png"
                  alt="Twitter"
                />
              </a>
              <a
                href="https://medium.com/@taehwannoh"
                target="_blank"
                rel="noopener"
              >
                <img
                  className="w-5 h-5"
                  src="https://user-images.githubusercontent.com/7760903/53615395-052e0480-3c21-11e9-8b3b-29e064acc35b.png"
                  alt="Medium"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/taehwannoh"
                target="_blank"
                rel="noopener"
              >
                <img
                  className="w-6 h-5"
                  src="https://user-images.githubusercontent.com/7760903/53615700-89cd5280-3c22-11e9-9657-0b238c9ed3ed.png"
                  alt="Linkedin"
                />
              </a>
            </div>
            <a
              href="mailto:taehwanno.dev@gmail.com"
              target="_blank"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="py-4">© Taehwan Noh. All rights reserved.</div>
      </Container>
    </footer>
  );
}
