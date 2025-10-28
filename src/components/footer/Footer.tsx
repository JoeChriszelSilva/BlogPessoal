import {
  GithubLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";

function Footer() {
  const data = new Date().getFullYear();

  return (
    <>
      <div className="flex justify-center bg-indigo-900 text-white">
        <div className="container flex flex-col items-center py-4">
          <p className="text-x1 font-bold">
            Blog Pessoal Joe Chriszel | Copyright: {data}
          </p>
          <p className="text-lg">Acesse Minhas Redes Sociais</p>
          <div className="flex gap-2">
            <a
              href="https://www.linkedin.com/in/joechriszelsilva/"
              target="_blaml"
            >
              <LinkedinLogoIcon size={48} weight="bold" />
            </a>
            <a href="https://www.instagram.com/dev_chriszel/" target="_blaml">
              <InstagramLogoIcon size={48} weight="bold" />
            </a>
            <a href="https://github.com/JoeChriszelSilva" target="_blaml">
              <GithubLogoIcon size={48} weight="bold" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
