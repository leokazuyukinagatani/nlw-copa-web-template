import Image from "next/image";
import appPreviewImg from '../assets/app-nlw-copa-preview.png';
import logoImg from '../assets/logo.svg';
import usersAvatarExampleImg from '../assets/users-avatar-example.png';
import iconCheckImg from '../assets/icon-check.svg';
interface HomeProps {
  poolCount: number;
  guessCount: number;
  userCount: number;
}

export default function Home(props: HomeProps) {

  return (
    <div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 gap-28 items-center">
        <h1 className="mt-14 text-white text-5xl font-bold leading-tight">
          Hello World
        </h1>
    </div>
  )
}

