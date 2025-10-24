import {
  FacebookLogoIcon,
  InstagramLogoIcon, // <-- CORREÇÃO: "Instagram"
  LinkedinLogoIcon,
} from "@phosphor-icons/react";

function Footer() {
  const data = new Date().getFullYear();

  return (
    <>
      <div className="flex justify-center bg-indigo-900 text-white">
        <div className="Container flex flex-col items-center py-4">
          <p className="text-x1 font-bold">
            BlogPessoal Joe | copyright: {data}
          </p>
          <p className="text-lg">Acesse minhas redes sociais</p>
          <div className="flex gap-2">
            <LinkedinLogoIcon size={48} weight="bold" />
            <InstagramLogoIcon size={48} weight="bold" />
            <FacebookLogoIcon size={48} weight="bold" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
